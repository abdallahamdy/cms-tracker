const inquirer = require('inquirer');
const db = require('../db/connection');

function Queries() {

}

Queries.prototype.initializeQueries = function() {
    inquirer.prompt(
        {
            type:'list',
            name: 'action',
            message: 'Choose an action:',
            choices: ['1. View all departments.', '2. View all roles.', '3. View all employees.', '4. Add a department.', '5. Add a role', '6. Add an employee.', '7. Update an employee role.', '8. Exit']
        })
        .then(result => {
            var theAction = result.action;
            var choiceNumber = parseInt(theAction.replace ( /[^\d.]/g, '' ));

            switch (choiceNumber) {
                case 1:
                    this.viewDepartments();
                    break;
                case 2:
                    this.viewRoles();
                    break;
                case 3:
                    this.viewEmployees();
                    break;
                case 4:
                    this.addDepartment();
                    break;
                case 5:
                    this.addRole();
                    break;
                case 6:
                    console.log("Add an employee");
                    break;
                case 7:
                    console.log("Update an employee role");
                    break;
                case 8:
                    console.log("Exiting now!");
                    process.exit();
            }
        })
}

Queries.prototype.viewDepartments = function() {
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, rows) => {
      if (err) {
        console.log(err);
        return;
      }
      console.table(rows);
      this.initializeQueries()
    });
}

Queries.prototype.viewRoles = function() {
    const sql = `
        SELECT role.id, role.title, role.salary ,department.name 
        FROM role 
        LEFT JOIN department 
        ON role.department_id = department.id`;

    db.query(sql, (err, rows) => {
      if (err) {
        console.log(err);
        return;
      }
      console.table(rows);
      this.initializeQueries()
    });
}

Queries.prototype.viewEmployees = function() {
    const sql = `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, " " , manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;`;
    db.query(sql, (err, rows) => {
      if (err) {
        console.log(err);
        return;
      }
      console.table(rows);
      this.initializeQueries();
    });
}

Queries.prototype.addDepartment = function() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'depName',
            message: 'What is the name of the department?'
        }
    ])
    .then(result => {
        var newDep = result.depName;

        const sql = `INSERT INTO department (name) VALUES (?)`;

        db.query(sql, newDep, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("Department added successfully.");
        });

        this.initializeQueries();
    })
}

Queries.prototype.addRole = function() {
    var availDeps = [];
    const sql = `SELECT name FROM department`;
    
    db.query(sql, (err, rows) => {
      if (err) {
        console.log(err);
        return;
      }
      for(var i=0; i < rows.length; i++){
        availDeps.push(rows[i].name);
      }
    });
    
    inquirer.prompt([
        {
            type: 'input',
            name: 'roleName',
            message: 'What is the name of the role?'
        },
        {
            type: 'input',
            name: 'roleSalary',
            message: 'What is the salary of the role?'
        },
        {
            type: 'list',
            name: 'roleDep',
            message: 'Which department does the role belong to?',
            choices: availDeps
        }
    ])
    .then(result => {
        let chosenDepID;
        var sqlDepById = 'SELECT id FROM department WHERE department.name = ?';
        db.query(sqlDepById, result.roleDep, (err, rows) => {
            if (err) {
              console.log(err);
              return;
            }
            chosenDepID = parseInt(rows[0].id);

            const params = [result.roleName, result.roleSalary, chosenDepID];

            const newRolesql = 'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)';

            db.query(newRolesql, params, (err, results) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log("Role added successfully.");
            });
            this.initializeQueries();
        })
    })

}

module.exports = Queries;