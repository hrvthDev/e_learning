

CREATE DATABASE IF NOT EXISTS learning_platform;
USE learning_platform;



CREATE TABLE IF NOT EXISTS lessons (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    content TEXT
);



CREATE TABLE IF NOT EXISTS quizzes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    lesson_id INT,
    question TEXT
);


CREATE TABLE IF NOT EXISTS answers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    quiz_id INT,
    answer_text VARCHAR(255),
    is_correct BOOLEAN DEFAULT FALSE
);



CREATE TABLE IF NOT EXISTS results (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100),
    score INT,
    lesson_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



INSERT INTO lessons (title, content) VALUES
('JavaScript változók', 'A változók adatok tárolására szolgálnak. let, const, var.'),
('DOM alapok', 'A DOM a HTML dokumentum objektum modellje.'),
('Frontend fogalma', 'A frontend a felhasználó által látott rész.'),
('Backend fogalma', 'A backend a szerver oldali logika.'),
('HTTP alapok', 'HTTP egy kérés-válasz protokoll.'),
('Node.js alapok', 'Node.js JavaScript futtatókörnyezet szerver oldalon.'),
('Express.js', 'Express egy Node.js framework API készítéshez.'),
('REST API', 'REST API HTTP metódusokon alapul.'),
('CRUD műveletek', 'Create, Read, Update, Delete műveletek.'),
('SQL alapok', 'SQL adatbázis lekérdező nyelv.');



INSERT INTO quizzes (lesson_id, question) VALUES
(1, 'Melyik kulcsszóval hozunk létre változót?'),
(1, 'Melyik NEM JavaScript változó típus?'),
(1, 'Melyik változó módosítható?'),

(2, 'Mit jelent a DOM?'),
(2, 'Mivel érjük el az elemeket JavaScriptben?'),
(2, 'Mit módosíthatunk a DOM-ban?'),

(3, 'Mi a frontend?'),
(3, 'Melyik frontend technológia?'),
(3, 'Ki látja a frontend-et?'),

(4, 'Mi a backend feladata?'),
(4, 'Melyik backend nyelv?'),
(4, 'Hol fut a backend?'),

(5, 'Mit jelent a HTTP?'),
(5, 'Melyik HTTP metódus?'),
(5, 'Mit csinál a GET?'),

(6, 'Mi a Node.js?'),
(6, 'Mire jó a Node.js?'),
(6, 'Melyik nyelven fut a Node.js?'),

(7, 'Mi az Express?'),
(7, 'Mit egyszerűsít az Express?'),
(7, 'Mire használjuk?'),

(8, 'Mi a REST?'),
(8, 'Mire épül a REST API?'),
(8, 'Melyik REST művelet?'),

(9, 'Mit jelent a CRUD?'),
(9, 'Melyik CRUD művelet?'),
(9, 'Melyik nem CRUD?'),

(10, 'Mit csinál a SELECT?'),
(10, 'Melyik SQL parancs töröl?'),
(10, 'Mire való az SQL?');


INSERT INTO answers (quiz_id, answer_text, is_correct) VALUES
(1, 'let', TRUE),
(1, 'html', FALSE),
(1, 'css', FALSE),

(2, 'var', FALSE),
(2, 'loop', TRUE),
(2, 'function', FALSE),

(3, 'let', TRUE),
(3, 'print', FALSE),
(3, 'echo', FALSE);


INSERT INTO answers (quiz_id, answer_text, is_correct) VALUES
(4, 'Document Object Model', TRUE),
(4, 'Data Object Model', FALSE),
(4, 'Digital Output Method', FALSE),

(5, 'getElementById', TRUE),
(5, 'getData', FALSE),
(5, 'querySQL', FALSE),

(6, 'HTML elemeket', TRUE),
(6, 'adatbázist', FALSE),
(6, 'szervert', FALSE);


INSERT INTO answers (quiz_id, answer_text, is_correct) VALUES
(7, 'Felhasználói felület', TRUE),
(7, 'Szerver logika', FALSE),
(7, 'Adatbázis', FALSE),

(8, 'React', TRUE),
(8, 'MySQL', FALSE),
(8, 'Node.js', FALSE),

(9, 'Felhasználó', TRUE),
(9, 'Szerver', FALSE),
(9, 'Adatbázis', FALSE);


INSERT INTO answers (quiz_id, answer_text, is_correct) VALUES
(10, 'Szerver oldali logika', TRUE),
(10, 'UI kezelés', FALSE),
(10, 'CSS stílus', FALSE),

(11, 'Node.js', TRUE),
(11, 'HTML', FALSE),
(11, 'Photoshop', FALSE),

(12, 'Szerver', TRUE),
(12, 'Böngésző', FALSE),
(12, 'Kamera', FALSE);

INSERT INTO answers (quiz_id, answer_text, is_correct) VALUES
(13, 'HyperText Transfer Protocol', TRUE),
(13, 'High Text Transfer Program', FALSE),
(13, 'Hyper Tool', FALSE),

(14, 'GET', TRUE),
(14, 'DRAW', FALSE),
(14, 'PAINT', FALSE),

(15, 'Adat lekérés', TRUE),
(15, 'Adat törlés', FALSE),
(15, 'Adat mentés', FALSE);

INSERT INTO answers (quiz_id, answer_text, is_correct) VALUES
(16, 'Szerver oldali JS', TRUE),
(16, 'CSS engine', FALSE),
(16, 'Adatbázis', FALSE),

(17, 'Backend fejlesztés', TRUE),
(17, 'Design', FALSE),
(17, 'Videó szerkesztés', FALSE),

(18, 'JavaScript', TRUE),
(18, 'Python', FALSE),
(18, 'C++', FALSE);


INSERT INTO answers (quiz_id, answer_text, is_correct) VALUES
(19, 'Node.js framework', TRUE),
(19, 'Database', FALSE),
(19, 'Browser', FALSE),

(20, 'Routing', TRUE),
(20, 'Photoshop', FALSE),
(20, 'Gaming', FALSE),

(21, 'API készítés', TRUE),
(21, 'Zenelejátszás', FALSE),
(21, 'Rajzolás', FALSE);

INSERT INTO answers (quiz_id, answer_text, is_correct) VALUES
(22, 'Representational State Transfer', TRUE),
(22, 'Random System', FALSE),
(22, 'Runtime Service Tool', FALSE),

(23, 'HTTP', TRUE),
(23, 'FTP', FALSE),
(23, 'SMTP', FALSE),

(24, 'GET', TRUE),
(24, 'PAINT', FALSE),
(24, 'CLICK', FALSE);

INSERT INTO answers (quiz_id, answer_text, is_correct) VALUES
(25, 'Create Read Update Delete', TRUE),
(25, 'Copy Run Upload Download', FALSE),
(25, 'Connect Route Update Data', FALSE),

(26, 'DELETE', TRUE),
(26, 'PAINT', FALSE),
(26, 'DRAW', FALSE),

(27, 'Adatbázis műveletek', TRUE),
(27, 'Frontend design', FALSE),
(27, 'Videó streaming', FALSE);

INSERT INTO answers (quiz_id, answer_text, is_correct) VALUES
(28, 'Adatok lekérdezése', TRUE),
(28, 'Videó render', FALSE),
(28, 'UI design', FALSE),

(29, 'DELETE', TRUE),
(29, 'CREATE', FALSE),
(29, 'STYLE', FALSE),

(30, 'Adatbázis nyelv', TRUE),
(30, 'Browser', FALSE),
(30, 'OS kernel', FALSE);