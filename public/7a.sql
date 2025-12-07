=============================================================
==================== ACCIDENT TRACKER SQL ===================
=============================================================


-------------------------------------------------------------
-- PERSON TABLE
-- PK: driver_id
-------------------------------------------------------------
CREATE TABLE PERSON (
    driver_id INT PRIMARY KEY,
    name VARCHAR(50),
    address VARCHAR(100)
);


-------------------------------------------------------------
-- CAR TABLE
-- PK: Regno
-------------------------------------------------------------
CREATE TABLE CAR (
    Regno VARCHAR(20) PRIMARY KEY,
    model VARCHAR(50),
    year INT
);


-------------------------------------------------------------
-- ACCIDENT TABLE
-- PK: report_number
-------------------------------------------------------------
CREATE TABLE ACCIDENT (
    report_number INT PRIMARY KEY,
    acc_date DATE,
    location VARCHAR(100)
);


-------------------------------------------------------------
-- OWNS TABLE
-- FK: driver_id → PERSON(driver_id)
-- FK: Regno → CAR(Regno)
-------------------------------------------------------------
CREATE TABLE OWNS (
    driver_id INT,
    Regno VARCHAR(20),
    FOREIGN KEY (driver_id) REFERENCES PERSON(driver_id),
    FOREIGN KEY (Regno) REFERENCES CAR(Regno)
);


-------------------------------------------------------------
-- PARTICIPATED TABLE
-- FK: driver_id → PERSON(driver_id)
-- FK: Regno → CAR(Regno)
-- FK: report_number → ACCIDENT(report_number)
-------------------------------------------------------------
CREATE TABLE PARTICIPATED (
    driver_id INT,
    Regno VARCHAR(20),
    report_number INT,
    damageamount INT,
    FOREIGN KEY (driver_id) REFERENCES PERSON(driver_id),
    FOREIGN KEY (Regno) REFERENCES CAR(Regno),
    FOREIGN KEY (report_number) REFERENCES ACCIDENT(report_number)
);


=============================================================
======================= INSERT DATA ==========================
=============================================================


-------------------------------------------------------------
-- PERSON DATA
-------------------------------------------------------------
INSERT INTO PERSON VALUES
(1, 'Ramesh', 'Bangalore'),
(2, 'Suresh', 'Mysore'),
(3, 'Asha', 'Hyderabad'),
(4, 'Karan', 'Mumbai'),
(5, 'Rita', 'Delhi');


-------------------------------------------------------------
-- CAR DATA
-------------------------------------------------------------
INSERT INTO CAR VALUES
('KA01AB1234', 'Hyundai i20', 2018),
('KA02CD5678', 'Honda City', 2020),
('MH12EF9999', 'Maruti Swift', 2017),
('DL05XY5555', 'Toyota Innova', 2019),
('TS09GH3333', 'Honda Amaze', 2021);


-------------------------------------------------------------
-- ACCIDENT DATA
-------------------------------------------------------------
INSERT INTO ACCIDENT VALUES
(101, '2024-01-15', 'MG Road'),
(102, '2024-02-18', 'Airport Road'),
(103, '2024-03-11', 'Ring Road'),
(104, '2024-04-05', 'Koramangala'),
(105, '2024-05-25', 'Whitefield');


-------------------------------------------------------------
-- OWNS DATA
-------------------------------------------------------------
INSERT INTO OWNS VALUES
(1, 'KA01AB1234'),
(2, 'KA02CD5678'),
(3, 'MH12EF9999'),
(4, 'DL05XY5555'),
(5, 'TS09GH3333');


-------------------------------------------------------------
-- PARTICIPATED DATA
-------------------------------------------------------------
INSERT INTO PARTICIPATED VALUES
(1, 'KA01AB1234', 101, 5000),
(2, 'KA02CD5678', 102, 12000),
(3, 'MH12EF9999', 103, 8000),
(4, 'DL05XY5555', 104, 25000),   -- Highest damage
(5, 'TS09GH3333', 105, 6000);


=============================================================
=========================== QUERIES ==========================
=============================================================


-------------------------------------------------------------
-- QUERY i:
-- Display UNIQUE Regno’s of cars involved in accidents
-------------------------------------------------------------
SELECT DISTINCT Regno
FROM PARTICIPATED;


-------------------------------------------------------------
-- QUERY ii:
-- Display car Regno and model of the car with MAX damage amount
-------------------------------------------------------------
SELECT C.Regno, C.model
FROM CAR C
WHERE C.Regno = (
    SELECT Regno
    FROM PARTICIPATED
    WHERE damageamount = (SELECT MAX(damageamount) FROM PARTICIPATED)
);


-------------------------------------------------------------
-- QUERY iii:
-- Display number of cars owned by each driver
-------------------------------------------------------------
SELECT driver_id, COUNT(Regno) AS number_of_cars
FROM OWNS
GROUP BY driver_id;


=============================================================
========================= END OF FILE ========================
=============================================================
