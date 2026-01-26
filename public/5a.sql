//-------------------------------------------------------------
// DATABASE: AircraftDB
//-------------------------------------------------------------


-------------------------------------------------------------
-- TABLE 1: EMPLOYEE
-- Primary Key: EmpID
-------------------------------------------------------------
CREATE TABLE EMPLOYEE (
    EmpID INT PRIMARY KEY,
    Ename VARCHAR(50),
    Salary INT
);


-------------------------------------------------------------
-- TABLE 2: AIRCRAFT
-- Primary Key: AircraftID
-------------------------------------------------------------
CREATE TABLE AIRCRAFT (
    AircraftID INT PRIMARY KEY,
    Aircraft_name VARCHAR(50),
    Cruising_range INT
);


-------------------------------------------------------------
-- TABLE 3: CERTIFIED
-- Foreign Keys only (NO JOINS WILL BE USED IN QUERIES)
-------------------------------------------------------------
CREATE TABLE CERTIFIED (
    EmpID INT,
    AircraftID INT,
    FOREIGN KEY (EmpID) REFERENCES EMPLOYEE(EmpID),
    FOREIGN KEY (AircraftID) REFERENCES AIRCRAFT(AircraftID)
);


-------------------------------------------------------------
-- INSERT SAMPLE EMPLOYEES
-------------------------------------------------------------
INSERT INTO EMPLOYEE VALUES
(101, 'Ramesh', 60000),
(102, 'Sujay', 55000),
(103, 'Arjun', 75000),
(104, 'Megha', 48000),
(105, 'Kiran', 68000);


-------------------------------------------------------------
-- INSERT SAMPLE AIRCRAFTS
-------------------------------------------------------------
INSERT INTO AIRCRAFT VALUES
(1, 'Boeing 737', 3000),
(2, 'Boeing 747', 8000),
(3, 'Airbus A320', 3100),
(4, 'Cessna 172', 800),
(5, 'ATR 72', 1500);


-------------------------------------------------------------
-- INSERT CERTIFICATION DATA
-------------------------------------------------------------
INSERT INTO CERTIFIED VALUES
(101, 1),   -- Boeing 737
(103, 2),   -- Boeing 747
(102, 3),   -- Airbus A320
(104, 4),   -- Cessna 172
(105, 3),   -- Airbus A320
(105, 5);   -- ATR 72



//=============================================================
// QUERIES (NO JOINS USED ANYWHERE)
//=============================================================


//-------------------------------------------------------------
// QUERY i:
// Find the NAMES of pilots certified for BOEING aircraft
// (using IN + subqueries, NOT JOIN)
//-------------------------------------------------------------
SELECT Ename
FROM EMPLOYEE
WHERE EmpID IN (
    SELECT EmpID
    FROM CERTIFIED
    WHERE AircraftID IN (
        SELECT AircraftID
        FROM AIRCRAFT
        WHERE Aircraft_name LIKE 'Boeing%'
    )
);



//-------------------------------------------------------------
// QUERY ii:
// Arrange aircrafts in ASCENDING order of cruising range
//-------------------------------------------------------------
SELECT AircraftID, Aircraft_name, Cruising_range
FROM AIRCRAFT
ORDER BY Cruising_range ASC;



//-------------------------------------------------------------
// QUERY iii:
// Find names of pilots who:
// 1) operate aircraft with RANGE > 3000
// 2) are NOT certified for any BOEING aircraft
// (NO JOINS — only subqueries)
//-------------------------------------------------------------
SELECT Ename
FROM EMPLOYEE
WHERE EmpID IN (
    SELECT EmpID
    FROM CERTIFIED
    WHERE AircraftID IN (
        SELECT AircraftID
        FROM AIRCRAFT
        WHERE Cruising_range > 3000
    )
)
AND EmpID NOT IN (
    SELECT EmpID
    FROM CERTIFIED
    WHERE AircraftID IN (
        SELECT AircraftID
        FROM AIRCRAFT
        WHERE Aircraft_name LIKE 'Boeing%'
    )
);
