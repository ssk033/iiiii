------------------------------------------------------------
-- TABLE: EMPLOYEE
-- Primary Key: SSN
-- SuperSSN → refers to another employee (manager)
-- Dno → refers to DEPARTMENT(Dnumber)
------------------------------------------------------------
CREATE TABLE EMPLOYEE (
    Fname VARCHAR(30),
    Lname VARCHAR(30),
    SSN INT PRIMARY KEY,
    Addrs VARCHAR(100),
    Sex CHAR(1),
    Salary INT,
    SuperSSN INT,
    Dno INT,
    FOREIGN KEY (SuperSSN) REFERENCES EMPLOYEE(SSN),
    FOREIGN KEY (Dno) REFERENCES DEPARTMENT(Dnumber)
);
------------------------------------------------------------
-- TABLE: DEPARTMENT
-- Primary Key: Dnumber
-- MgrSSN → references EMPLOYEE(SSN)
------------------------------------------------------------
CREATE TABLE DEPARTMENT (
    Dname VARCHAR(30),
    Dnumber INT PRIMARY KEY,
    MgrSSN INT,
    MgrStartDate DATE,
    FOREIGN KEY (MgrSSN) REFERENCES EMPLOYEE(SSN)
);
------------------------------------------------------------
-- TABLE: PROJECT
-- Primary Key: Pno
-- Dnum → references DEPARTMENT(Dnumber)
------------------------------------------------------------
CREATE TABLE PROJECT (
    Pno INT PRIMARY KEY,
    Pname VARCHAR(30),
    Dnum INT,
    FOREIGN KEY (Dnum) REFERENCES DEPARTMENT(Dnumber)
);
------------------------------------------------------------
-- TABLE: WORKS_ON
-- ESSN → references EMPLOYEE(SSN)
-- Pno → references PROJECT(Pno)
------------------------------------------------------------
CREATE TABLE WORKS_ON (
    ESSN INT,
    Pno INT,
    Hours INT,
    FOREIGN KEY (ESSN) REFERENCES EMPLOYEE(SSN),
    FOREIGN KEY (Pno) REFERENCES PROJECT(Pno)
);
------------------------------------------------------------
-- INSERT EMPLOYEES
------------------------------------------------------------
INSERT INTO EMPLOYEE VALUES
('John', 'Smith', 101, 'MG Road', 'M', 60000, NULL, 1),
('Amit', 'Verma', 102, 'BTM Layout', 'M', 55000, 101, 2),
('Priya', 'Sharma', 103, 'Indiranagar', 'F', 70000, 101, 5),
('Rita', 'Das', 104, 'Koramangala', 'F', 45000, 102, 3),
('Karan', 'Sen', 105, 'Whitefield', 'M', 80000, 103, 5);
------------------------------------------------------------
-- INSERT DEPARTMENTS
------------------------------------------------------------
INSERT INTO DEPARTMENT VALUES
('Admin', 1, 101, '2020-01-10'),
('Finance', 2, 102, '2021-03-22'),
('Marketing', 3, 104, '2019-07-01'),
('HR', 4, 101, '2022-06-05'),
('Research', 5, 103, '2018-11-12');
------------------------------------------------------------
-- INSERT PROJECTS
------------------------------------------------------------
INSERT INTO PROJECT VALUES
(1, 'Alpha', 5),
(2, 'Beta', 5),
(3, 'Gamma', 3),
(4, 'Delta', 2),
(5, 'Epsilon', 1);
------------------------------------------------------------
-- INSERT WORKS_ON DATA
------------------------------------------------------------
INSERT INTO WORKS_ON VALUES
(101, 1, 10),
(102, 2, 15),
(103, 1, 12),
(105, 3, 20),
(104, 2, 8),
(105, 1, 25),
(102, 3, 10);
------------------------------------------------------------
-- QUERY 1
-- Employees whose salary > ALL salaries of department 5
------------------------------------------------------------
SELECT Fname, Lname
FROM EMPLOYEE
WHERE Salary > ALL (
    SELECT Salary 
    FROM EMPLOYEE
    WHERE Dno = 5
);
------------------------------------------------------------
-- QUERY 2
-- SSNs of employees working on project 1, 2, OR 3
------------------------------------------------------------
SELECT DISTINCT ESSN
FROM WORKS_ON
WHERE Pno IN (1, 2, 3);
------------------------------------------------------------
-- QUERY 3
-- Total hours spent by employees on each project
------------------------------------------------------------
SELECT Pno, SUM(Hours) AS Total_Hours
FROM WORKS_ON
GROUP BY Pno;
