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
                    console.log("Add a department");
                    break;
                case 5:
                    console.log("Add a role");
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
                    break;
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
    const sql = `SELECT * FROM role`;
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
    const sql = `SELECT * FROM employee`;
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
    const sql = `SELECT * FROM employee`;
    db.query(sql, (err, rows) => {
      if (err) {
        console.log(err);
        return;
      }
      console.table(rows);
      this.initializeQueries();
    });
}

module.exports = Queries;