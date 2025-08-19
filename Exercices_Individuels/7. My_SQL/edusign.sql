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