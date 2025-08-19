CREATE TABLE edusign (
    edusign_id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstname VARCHAR (255) NOT NULL,
    last_name VARCHAR (255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at DATETIME
)