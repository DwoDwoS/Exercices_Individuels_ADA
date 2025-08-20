DROP TABLE IF EXISTS edusign;
DROP TABLE IF EXISTS users;

CREATE TABLE edusign (
    edusign_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    created_at DATETIME
);

CREATE TABLE users (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_firstname VARCHAR (255) NOT NULL,
    user_last_name VARCHAR (255) NOT NULL,
    user_email VARCHAR (255) UNIQUE
);

-- @block
INSERT INTO users (user_firstname, user_last_name, user_email) VALUES ('Ada', 'Lovelace', 'ada@test.fr');
INSERT INTO users (user_firstname, user_last_name, user_email) VALUES ('Beatrice', 'Worsley', 'bea@test.fr');
INSERT INTO users (user_firstname, user_last_name, user_email) VALUES ('Bella', 'Guerin', 'bella@test.fr');
INSERT INTO users (user_firstname, user_last_name, user_email) VALUES ('Barbara', 'Chase', 'barbara@test.fr');

-- @block
SELECT * FROM users;

-- @block
SELECT * FROM users 
WHERE user_firstname="Ada";

-- @block
SELECT * FROM users 
WHERE user_firstname LIKE 'B%';

-- @block
SELECT COUNT(*) FROM users;

-- @block
SELECT COUNT(*) FROM users 
WHERE user_firstname LIKE 'B%';

-- @block
SELECT user_firstname FROM users;

-- @block
INSERT INTO edusign (user_id,created_at) 
SELECT user_id, "2024-05-30 09:30:00" FROM users 
WHERE user_firstname="Ada";

INSERT INTO edusign (user_id,created_at) 
SELECT user_id, "2024-05-30 09:30:00" FROM users 
WHERE user_firstname="Bella";

INSERT INTO edusign (user_id, created_at) 
SELECT user_id, "2024-09-01 09:30:00" FROM users;

-- @block
SELECT * FROM edusign 
ORDER BY created_at DESC, user_id ASC;

SELECT * FROM edusign 
WHERE created_at = "2024-05-30 09:30:00";

-- @block
SELECT created_at, COUNT(*) AS nb_users FROM edusign 
GROUP BY created_at 
ORDER BY created_at;

SELECT COUNT(*) AS volume FROM edusign 
JOIN users ON edusign.user_id = users.user_id 
WHERE users.user_firstname="Bella";