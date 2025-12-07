=============================================================
======================== 10(a) — SQL =========================
====================== SHIPMENT DATABASE =====================
=============================================================


-------------------------------------------------------------
-- CUSTOMER TABLE
-- PK: cust#
-------------------------------------------------------------
CREATE TABLE CUSTOMER (
    cust# INT PRIMARY KEY,
    cname VARCHAR(50),
    city VARCHAR(50)
);


-------------------------------------------------------------
-- ORDERS TABLE
-- PK: order#
-- FK: cust# → CUSTOMER(cust#)
-------------------------------------------------------------
CREATE TABLE ORDERS (
    order# INT PRIMARY KEY,
    odate DATE,
    cust# INT,
    ord_Amt INT,
    FOREIGN KEY (cust#) REFERENCES CUSTOMER(cust#)
);


-------------------------------------------------------------
-- ITEM TABLE
-- PK: item#
-------------------------------------------------------------
CREATE TABLE ITEM (
    item# INT PRIMARY KEY,
    unit_price INT
);


-------------------------------------------------------------
-- ORDER_ITEM TABLE
-- PK: (order#, item#)
-- FK: order# → ORDERS(order#)
-- FK: item# → ITEM(item#)
-------------------------------------------------------------
CREATE TABLE ORDER_ITEM (
    order# INT,
    item# INT,
    qty INT,
    FOREIGN KEY (order#) REFERENCES ORDERS(order#),
    FOREIGN KEY (item#) REFERENCES ITEM(item#)
);


-------------------------------------------------------------
-- SHIPMENT TABLE
-- PK: order#
-- FK: order# → ORDERS(order#)
-------------------------------------------------------------
CREATE TABLE SHIPMENT (
    order# INT PRIMARY KEY,
    ship_date DATE,
    FOREIGN KEY (order#) REFERENCES ORDERS(order#)
);


=============================================================
=========================== DATA =============================
=============================================================


-------------------------------------------------------------
-- CUSTOMERS
-------------------------------------------------------------
INSERT INTO CUSTOMER VALUES
(1, 'Ramesh', 'Bangalore'),
(2, 'Suresh', 'Bangalore'),
(3, 'Asha', 'Delhi'),
(4, 'Karan', 'Chennai'),
(5, 'Rekha', 'Mumbai');


-------------------------------------------------------------
-- ORDERS
-------------------------------------------------------------
INSERT INTO ORDERS VALUES
(101, '2024-01-10', 1, 5000),
(102, '2024-01-10', 1, 2400),
(103, '2024-01-12', 2, 1500),
(104, '2024-01-13', 2, 2600),
(105, '2024-01-14', 3, 1800);


-------------------------------------------------------------
-- ITEMS
-------------------------------------------------------------
INSERT INTO ITEM VALUES
(501, 60),
(502, 120),
(503, 80),
(504, 200),
(505, 150);


-------------------------------------------------------------
-- ORDER_ITEM
-------------------------------------------------------------
INSERT INTO ORDER_ITEM VALUES
(101, 501, 5),
(102, 503, 3),
(103, 504, 4),
(104, 505, 2),
(105, 502, 1);


-------------------------------------------------------------
-- SHIPMENT
-------------------------------------------------------------
INSERT INTO SHIPMENT VALUES
(101, '2024-01-15'),
(102, '2024-01-16'),
(103, '2024-01-17'),
(104, '2024-01-17'),
(105, '2024-01-18');


=============================================================
=========================== QUERIES ==========================
=============================================================


-------------------------------------------------------------
-- QUERY i:
-- List name of the customer + number of orders
-- Only customers residing in BANGALORE
-------------------------------------------------------------
SELECT cname, COUNT(order#) AS num_orders
FROM CUSTOMER C
JOIN ORDERS O ON C.cust# = O.cust#
WHERE C.city = 'Bangalore'
GROUP BY C.cname;


-------------------------------------------------------------
-- QUERY ii:
-- List customers who ordered AT LEAST 3 ITEMS total
-------------------------------------------------------------
SELECT cname 
FROM CUSTOMER
WHERE cust# IN (
    SELECT cust#
    FROM ORDERS
    WHERE order# IN (
        SELECT order#
        FROM ORDER_ITEM
        GROUP BY order#
        HAVING SUM(qty) >= 3
    )
);


-------------------------------------------------------------
-- QUERY iii:
-- List customer names who have NOT ordered for ITEM 10
-------------------------------------------------------------
SELECT cname
FROM CUSTOMER
WHERE cust# NOT IN (
    SELECT cust#
    FROM ORDERS
    WHERE order# IN (
        SELECT order#
        FROM ORDER_ITEM
        WHERE item# = 10
    )
);


=============================================================
========================= END OF FILE ========================
=============================================================
