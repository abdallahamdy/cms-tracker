INSERT INTO department (name)
VALUES
  ('Support'),
  ('Sales'),
  ('R&D');

INSERT INTO role (title, salary, department_id)
VALUES
  ('Support Engineer', 50000, 1),
  ('Sales Engineer', 80000, 2),
  ('Full Stack Engineer', 100000, 3),
  ('Manager', 120000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Alexia', 'Huff', 1, 1),
  ('Keyon', 'Allison', 1, 1),
  ('Allison', 'Huang', 1, 2),
  ('Conrad', 'Mccarty', 2, 2),
  ('Reagan', 'George', 2, 2),
  ('Kamren', 'Delacruz', 2, 2),
  ('Abbigail', 'Patton', 3, 3),
  ('Abdullah', 'Floyd', 3, 3),
  ('Kyle', 'Kemp', 3, 3),
  ('Jadiel', 'Esparza', 4, 3),
  ('Ella', 'Oconnell', 4, 3)