------------------------------------------------------------
-- AIRCRAFT DATABASE (Complete SQL File)
-- Tables: AIRCRAFT, CERTIFIED, EMPLOYEE
-- Includes 5 tuples each + required queries
------------------------------------------------------------

------------------------------------------------------------
-- 1. CREATE TABLE: EMPLOYEE
-- Primary Key: EmpID
------------------------------------------------------------
CREATE TABLE EMPLOYEE (
    EmpID INT PRIMARY KEY,
    Ename VARCHAR(50),
    Salary INT
);

------------------------------------------------------------
-- 2. CREATE TABLE: AIRCRAFT
-- Primary Key: AircraftID
------------------------------------------------------------
CREATE TABLE AIRCRAFT (
    AircraftID INT PRIMARY KEY,
    Aircraft_name VARCHAR(50),
    Cruising_range INT
);

------------------------------------------------------------
-- 3. CREATE TABLE: CERTIFIED
-- EmpID → FK referencing EMPLOYEE(EmpID)
-- AircraftID → FK referencing AIRCRAFT(AircraftID)
------------------------------------------------------------
CREATE TABLE CERTIFIED (
    EmpID INT,
    AircraftID INT,
    FOREIGN KEY (EmpID) REFERENCES EMPLOYEE(EmpID),
    FOREIGN KEY (AircraftID) REFERENCES AIRCRAFT(AircraftID)
);

------------------------------------------------------------
-- 4. INSERT TUPLES INTO EMPLOYEE (5 rows)
------------------------------------------------------------
INSERT INTO EMPLOYEE VALUES
(101, 'Ramesh', 45000),
(102, 'Suresh', 52000),
(103, 'Neha', 68000),
(104, 'Arjun', 75000),
(105, 'Karan', 30000);

------------------------------------------------------------
-- 5. INSERT TUPLES INTO AIRCRAFT (5 rows)
------------------------------------------------------------
INSERT INTO AIRCRAFT VALUES
(1, 'Boeing 737', 3000),
(2, 'Airbus A320', 3200),
(3, 'Boeing 747', 8000),
(4, 'Cessna 172', 800),
(5, 'ATR 72', 1500);

------------------------------------------------------------
-- 6. INSERT TUPLES INTO CERTIFIED (5 rows)
------------------------------------------------------------
INSERT INTO CERTIFIED VALUES
(102, 1),
(103, 2),
(103, 3),
(104, 3),
(101, 4);

------------------------------------------------------------
-- ===================== QUERIES ===========================
------------------------------------------------------------

------------------------------------------------------------
-- QUERY i:
-- Find the employee IDs of employees who make the highest salary
------------------------------------------------------------
SELECT EmpID
FROM EMPLOYEE
WHERE Salary = (SELECT MAX(Salary) FROM EMPLOYEE);

------------------------------------------------------------
-- QUERY ii:
-- Find the names of aircraft such that ALL pilots certified
-- to operate them earn more than 50000
------------------------------------------------------------
SELECT A.Aircraft_name
FROM AIRCRAFT A
WHERE NOT EXISTS (
    SELECT *
    FROM CERTIFIED C
    JOIN EMPLOYEE E ON C.EmpID = E.EmpID
    WHERE C.AircraftID = A.AircraftID
    AND E.Salary <= 50000     -- if any pilot earns <= 50k, exclude aircraft
);

------------------------------------------------------------
-- QUERY iii:
-- Find employees who are NOT certified for operating any aircraft
------------------------------------------------------------
SELECT E.EmpID, E.Ename
FROM EMPLOYEE E
WHERE E.EmpID NOT IN (
    SELECT EmpID FROM CERTIFIED
);
