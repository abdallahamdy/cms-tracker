INSERT INTO department (name)
VALUES
  ('Engineering'),
  ('Sales'),
  ('Legal'),
  ('Finance');

INSERT INTO role (title, salary, department_id)
VALUES
  ('Sales Lead', 100000, 2),
  ('Salesperson', 80000, 2),
  ('Lead Engineer', 150000, 1),
  ('Software Engineer', 120000, 1),
  ('Account Manager', 160000, 2),
  ('Accountant', 125000, 4),
  ('Legal Team Lead', 250000, 3),
  ('Lawyer', 190000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Alexia', 'Huff', 1, NULL),
  ('Keyon', 'Allison', 2, NULL),
  ('Allison', 'Huang', 3, NULL),
  ('Conrad', 'Mccarty', 4, 1),
  ('Reagan', 'George', 5, 1),
  ('Kamren', 'Delacruz', 6, 2),
  ('Abbigail', 'Patton', 7, 2),
  ('Abdullah', 'Floyd', 8, 3),
  ('Kyle', 'Kemp', 8, 3),
  ('Jadiel', 'Esparza', 4, 2),
  ('Ella', 'Oconnell', 4, 2)