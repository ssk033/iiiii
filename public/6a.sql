=============================================================
===================== 6(b) — SQL DATABASE ===================
================ EMPLOYEE – DEPARTMENT – DEPENDENT ==========
=============================================================


-------------------------------------------------------------
-- TABLE: DEPARTMENT
-- Primary Key: Dnumber
-------------------------------------------------------------
CREATE TABLE DEPARTMENT (
    Dname VARCHAR(40),
    Dnumber INT PRIMARY KEY,
    MgrSSN INT,
    MgrStartDate DATE
);


-------------------------------------------------------------
-- TABLE: EMPLOYEE
-- Primary Key: SSN
-- Foreign Keys:
-- SuperSSN → EMPLOYEE(SSN)
-- Dno → DEPARTMENT(Dnumber)
-------------------------------------------------------------
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


-------------------------------------------------------------
-- TABLE: DEPENDENT
-- Foreign Key: ESSN → EMPLOYEE(SSN)
-------------------------------------------------------------
CREATE TABLE DEPENDENT (
    Dname VARCHAR(40),
    ESSN INT,
    FOREIGN KEY (ESSN) REFERENCES EMPLOYEE(SSN)
);


=============================================================
======================= INSERT ROWS ==========================
=============================================================


-------------------------------------------------------------
-- INSERT DEPARTMENTS
-------------------------------------------------------------
INSERT INTO DEPARTMENT VALUES
('Tech Research', 1, 101, '2020-01-01'),
('HR', 2, 102, '2019-06-10'),
('Finance', 3, 103, '2021-03-15'),
('Tech Support', 4, 104, '2018-09-05'),
('Marketing', 5, 105, '2022-02-20');


-------------------------------------------------------------
-- INSERT EMPLOYEES
-------------------------------------------------------------
INSERT INTO EMPLOYEE VALUES
('Amit', 'Sharma', 101, 'Delhi', 'M', 70000, NULL, 1),
('Riya', 'Verma', 102, 'Bangalore', 'F', 50000, 101, 2),
('Karan', 'Singh', 103, 'Mumbai', 'M', 65000, 101, 1),
('Sneha', 'Rao', 104, 'Pune', 'F', 55000, 102, 4),
('Arjun', 'Das', 105, 'Chennai', 'M', 60000, 103, 3);


-------------------------------------------------------------
-- INSERT DEPENDENTS
-------------------------------------------------------------
INSERT INTO DEPENDENT VALUES
('Asha', 101),
('Kunal', 101),
('Ritu', 104),
('Meena', 105),
('Raghav', 102);


=============================================================
========================== QUERIES ===========================
=============================================================


-------------------------------------------------------------
-- QUERY i:
-- For each department, retrieve department name & average salary
-------------------------------------------------------------
SELECT Dname,
       (SELECT AVG(Salary)
        FROM EMPLOYEE E
        WHERE E.Dno = D.Dnumber) AS Avg_Salary
FROM DEPARTMENT D;


-------------------------------------------------------------
-- QUERY ii:
-- List names of managers who have at least one dependent
-------------------------------------------------------------
SELECT Fname, Lname
FROM EMPLOYEE
WHERE SSN IN (
    SELECT MgrSSN FROM DEPARTMENT
)
AND SSN IN (
    SELECT ESSN FROM DEPENDENT
);


-------------------------------------------------------------
-- QUERY iii:
-- Display details of departments containing substring 'tech'
-------------------------------------------------------------
SELECT *
FROM DEPARTMENT
WHERE LOWER(Dname) LIKE '%tech%';


=============================================================
======================= END OF FILE ==========================
=============================================================
