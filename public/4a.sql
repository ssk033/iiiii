------------------------------------------------------------
-- SUPPLY–PARTS DATABASE (Complete SQL File)
-- Tables: SUPPLIER, PART, SHIPMENT
-- Includes 5 tuples each + required queries
------------------------------------------------------------


------------------------------------------------------------
-- 1. CREATE TABLE: SUPPLIER
-- Primary Key: Sid
------------------------------------------------------------
CREATE TABLE SUPPLIER (
    Sid VARCHAR(5) PRIMARY KEY,
    Sname VARCHAR(50),
    Address VARCHAR(100)
);


------------------------------------------------------------
-- 2. CREATE TABLE: PART
-- Primary Key: PID
------------------------------------------------------------
CREATE TABLE PART (
    PID VARCHAR(5) PRIMARY KEY,
    Pname VARCHAR(50),
    Color VARCHAR(20)
);


------------------------------------------------------------
-- 3. CREATE TABLE: SHIPMENT
-- Sid → FK referencing SUPPLIER(Sid)
-- PID → FK referencing PART(PID)
------------------------------------------------------------
CREATE TABLE SHIPMENT (
    Sid VARCHAR(5),
    PID VARCHAR(5),
    Cost INT,
    FOREIGN KEY (Sid) REFERENCES SUPPLIER(Sid),
    FOREIGN KEY (PID) REFERENCES PART(PID)
);


------------------------------------------------------------
-- INSERT TUPLES INTO SUPPLIER (5 rows)
------------------------------------------------------------
INSERT INTO SUPPLIER VALUES
('S1', 'Rohan', 'Bangalore'),
('S2', 'Meera', 'Mysore'),
('S3', 'Arjun', 'Chennai'),
('S4', 'Kriti', 'Mumbai'),
('S5', 'Vikas', 'Hyderabad');


------------------------------------------------------------
-- INSERT TUPLES INTO PART (5 rows)
------------------------------------------------------------
INSERT INTO PART VALUES
('P1', 'Bolt', 'Red'),
('P2', 'Nut', 'Green'),
('P3', 'Screw', 'Blue'),
('P4', 'Washer', 'Green'),
('P5', 'Pin', 'Black');


------------------------------------------------------------
-- INSERT TUPLES INTO SHIPMENT (5+ rows)
------------------------------------------------------------
INSERT INTO SHIPMENT VALUES
('S1', 'P1', 100),
('S2', 'P2', 150),
('S3', 'P3', 80),
('S3', 'P4', 120),
('S4', 'P5', 90),
('S1', 'P4', 200),
('S5', 'P2', 110);


------------------------------------------------------------
-- ===================== QUERIES ===========================
------------------------------------------------------------

------------------------------------------------------------
-- QUERY i:
-- Find the Sid’s of suppliers who supply a GREEN part
------------------------------------------------------------
SELECT DISTINCT S.Sid
FROM SHIPMENT S
JOIN PART P ON S.PID = P.PID
WHERE P.Color = 'Green';


------------------------------------------------------------
-- QUERY ii:
-- For every supplier print: Supplier Name + Total Number of Parts Supplied
------------------------------------------------------------
SELECT SUP.Sname, COUNT(SH.PID) AS Total_Parts_Supplied
FROM SUPPLIER SUP
LEFT JOIN SHIPMENT SH ON SUP.Sid = SH.Sid
GROUP BY SUP.Sname;


------------------------------------------------------------
-- QUERY iii:
-- Update the part color supplied by supplier S3 to YELLOW
-- Meaning: all parts shipped by S3 should become yellow
------------------------------------------------------------
UPDATE PART
SET Color = 'Yellow'
WHERE PID IN (
    SELECT PID FROM SHIPMENT WHERE Sid = 'S3'
);
