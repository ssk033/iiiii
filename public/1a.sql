------------------------------------------------------------
-- CREATE TABLE: SAILORS
------------------------------------------------------------
CREATE TABLE SAILORS (
    Sid INT PRIMARY KEY,
    Sname VARCHAR(50),
    Rating INT,
    Age INT
);

------------------------------------------------------------
-- CREATE TABLE: BOATS
------------------------------------------------------------
CREATE TABLE BOATS (
    Bid INT PRIMARY KEY,
    Bname VARCHAR(50),
    Colour VARCHAR(20)
);

------------------------------------------------------------
-- CREATE TABLE: RESERVES
-- Sid → FOREIGN KEY referencing SAILORS(Sid)
-- Bid → FOREIGN KEY referencing BOATS(Bid)
------------------------------------------------------------
CREATE TABLE RESERVES (
    Sid INT,
    Bid INT,
    day DATE,
    FOREIGN KEY (Sid) REFERENCES SAILORS(Sid),
    FOREIGN KEY (Bid) REFERENCES BOATS(Bid)
);

------------------------------------------------------------
-- INSERT SAMPLE DATA (AT LEAST 5 TUPLES EACH)
------------------------------------------------------------

-- Insert Sailors
INSERT INTO SAILORS VALUES
(1, 'Ram', 7, 25),
(2, 'Ravi', 5, 30),
(3, 'John', 9, 22),
(4, 'Aman', 6, 28),
(5, 'Kiran', 4, 26);

-- Insert Boats
INSERT INTO BOATS VALUES
(101, 'Speedster', 'Red'),
(102, 'Wave Rider', 'Blue'),
(103, 'Sea Hawk', 'Green'),
(104, 'Dolphin', 'Yellow'),
(105, 'Thunder', 'Red');

-- Insert Reserves
INSERT INTO RESERVES VALUES
(1, 101, '2024-01-12'),
(2, 103, '2024-02-10'),
(3, 102, '2024-01-15'),
(1, 105, '2024-03-20'),
(4, 104, '2024-01-18');

------------------------------------------------------------
-- QUERY 1: Sailors who have reserved at least one boat
------------------------------------------------------------
SELECT DISTINCT S.Sname
FROM SAILORS S
JOIN RESERVES R ON S.Sid = R.Sid;

------------------------------------------------------------
-- QUERY 2: Sids of sailors who reserved Red or Green boats
------------------------------------------------------------
SELECT DISTINCT R.Sid
FROM RESERVES R
JOIN BOATS B ON R.Bid = B.Bid
WHERE B.Colour IN ('Red', 'Green');

------------------------------------------------------------
-- QUERY 3: Sailors who have NOT reserved a boat
------------------------------------------------------------
SELECT S.Sid
FROM SAILORS S
WHERE S.Sid NOT IN (
    SELECT Sid FROM RESERVES
);
