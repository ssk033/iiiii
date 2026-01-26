=============================================================
====================== CRICKET DATABASE =====================
=============================================================


-------------------------------------------------------------
-- PLAYER TABLE
-- Primary Key: Pid
-------------------------------------------------------------
CREATE TABLE PLAYER (
    Pid INT PRIMARY KEY,
    Lname VARCHAR(50),
    Fname VARCHAR(50),
    Country VARCHAR(50),
    Yborn INT,
    Bplace VARCHAR(100)
);


-------------------------------------------------------------
-- MATCH TABLE
-- Primary Key: MatchId
-------------------------------------------------------------
CREATE TABLE MATCH (
    MatchId INT PRIMARY KEY,
    Team1 VARCHAR(50),
    Team2 VARCHAR(50),
    Ground VARCHAR(100),
    Date DATE,
    Winner VARCHAR(50)
);


-------------------------------------------------------------
-- BATTING TABLE
-- FKs: MatchId → MATCH, Pid → PLAYER
-------------------------------------------------------------
CREATE TABLE BATTING (
    MatchId INT,
    Pid INT,
    Nruns INT,
    Fours INT,
    Sixes INT,
    FOREIGN KEY (MatchId) REFERENCES MATCH(MatchId),
    FOREIGN KEY (Pid) REFERENCES PLAYER(Pid)
);


-------------------------------------------------------------
-- BOWLING TABLE
-- FKs: MatchId → MATCH, Pid → PLAYER
-------------------------------------------------------------
CREATE TABLE BOWLING (
    MatchId INT,
    Pid INT,
    Novers INT,
    Maidens INT,
    Nruns INT,
    Nwickets INT,
    FOREIGN KEY (MatchId) REFERENCES MATCH(MatchId),
    FOREIGN KEY (Pid) REFERENCES PLAYER(Pid)
);


=============================================================
======================= INSERTING DATA ======================
=============================================================


-------------------------------------------------------------
-- INSERT PLAYERS
-------------------------------------------------------------
INSERT INTO PLAYER VALUES
(7,  'Dhoni',   'MS',     'India',     1981, 'Ranchi'),
(18, 'Kohli',   'Virat',  'India',     1988, 'Delhi'),
(33, 'Smith',   'Steve',  'Australia', 1989, 'Sydney'),
(45, 'Finch',   'Aaron',  'Australia', 1986, 'Victoria'),
(99, 'Gayle',   'Chris',  'West Indies', 1979, 'Jamaica');


-------------------------------------------------------------
-- INSERT MATCHES
-------------------------------------------------------------
INSERT INTO MATCH VALUES
(2689, 'Australia', 'India',       'MCG',         '2020-01-15', 'Australia'),
(2690, 'India',     'Australia',   'Wankhede',    '2020-02-10', 'India'),
(2691, 'Australia', 'England',     'SCG',         '2021-05-22', 'England'),
(2692, 'South Africa','Australia', 'Perth',       '2019-12-01', 'Australia'),
(2693, 'Australia', 'New Zealand', 'Adelaide',    '2021-08-13', 'Australia');


-------------------------------------------------------------
-- INSERT BATTING DATA
-------------------------------------------------------------
INSERT INTO BATTING VALUES
(2689, 7,  45, 3, 2),   -- Dhoni
(2690, 18, 78, 8, 2),
(2689, 33, 55, 6, 1),
(2689, 45, 32, 4, 0),
(2691, 7,  20, 1, 0);   -- Dhoni again


-------------------------------------------------------------
-- INSERT BOWLING DATA
-------------------------------------------------------------
INSERT INTO BOWLING VALUES
(2689, 33, 10, 1, 45, 2),
(2690, 18, 5,  0, 22, 1),
(2689, 45, 8,  0, 36, 1),
(2691, 99, 4,  0, 30, 0),
(2692, 33, 10, 2, 40, 3);


=============================================================
========================= QUERIES ===========================
=============================================================


-------------------------------------------------------------
-- QUERY i:
-- Sorted list of Grounds where AUSTRALIA played as Team1
-------------------------------------------------------------
SELECT Ground
FROM MATCH
WHERE Team1 = 'Australia'
ORDER BY Ground ASC;


-------------------------------------------------------------
-- QUERY ii:
-- Match information of all matches in which Dhoni did batting
-------------------------------------------------------------
SELECT *
FROM MATCH
WHERE MatchId IN (
    SELECT MatchId
    FROM BATTING
    WHERE Pid = (
        SELECT Pid FROM PLAYER WHERE Lname='Dhoni'
    )
);


-------------------------------------------------------------
-- QUERY iii:
-- Names of players who did batting in match 2689
-------------------------------------------------------------
SELECT Fname, Lname
FROM PLAYER
WHERE Pid IN (
    SELECT Pid FROM BATTING WHERE MatchId = 2689
);


=============================================================
========================== END FILE ==========================
=============================================================
