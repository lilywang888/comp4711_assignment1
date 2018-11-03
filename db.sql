php mysqli configure:	/etc/php/7.2/fpm/php.ini 
extension=mysqli

mysql -u root
mysql> use mysql;
mysql> update mysql.user set authentication_string=password('vagrant') where user='root';
mysql> update mysql.user set authentication_string=password('') where user='root';
mysql> FLUSH PRIVILEGES;
mysql> INSERT INTO mysql.user (Host,User,authentication_string) VALUES('%','quiz', PASSWORD('quiz'));
GRANT USAGE ON *.* TO 'quiz'@'localhost' IDENTIFIED BY 'quiz' WITH GRANT OPTION;

vagrant mysql default user: homestead password:secret

create database comp4711;
use comp4711;
CREATE TABLE quiz(
    id int(10) NOT NULL auto_increment,
    question varchar(255) NOT NULL,
    quest_type varchar(15),
    answer1 varchar(255),
    answer2 varchar(255),
    answer3 varchar(255),
    answer4 varchar(255),
    correct_answer varchar(15) NOT NULL,
    PRIMARY KEY (id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


INSERT INTO quiz (question, quest_type, answer1, answer2, answer3, answer4, correct_answer) 
VALUES ('How far away is the moon?', 'Medium', '238,900 mi', '238,900 KM', '238,900 Feet', '238,900 L','a');
INSERT INTO quiz (question, quest_type, answer1, answer2, answer3, answer4, correct_answer) 
VALUES ('How far away is the Sun?', 'Low', '150 million meters', '150 million kilometers', '150 million Feet', '150 million L','b');
INSERT INTO quiz (question, quest_type, answer1, answer2, answer3, answer4, correct_answer) 
VALUES ('How many countries are there in the world?', 'High', '180', '195', '178', '199','b');
INSERT INTO quiz (question, quest_type, answer1, answer2, answer3, answer4, correct_answer) 
VALUES ('What Is The Capital Of Canada?', 'Medium', ' Toronto', 'Ottawa', 'Vancouver', 'Calgary','b');
INSERT INTO quiz (question, quest_type, answer1, answer2, answer3, answer4, correct_answer) 
VALUES ('where is united nations headquarters located?', 'Low', 'New York', 'Zurich', 'Paris', 'London','a');
INSERT INTO quiz (question, quest_type, answer1, answer2, answer3, answer4, correct_answer) 
VALUES ('how many states are there in the united states?', 'High', '49', '50', '51', '52','b');


alter table quiz drop 'type';


CREATE TABLE users(
    id bigint(10) NOT NULL auto_increment,
    user_name varchar(25) NOT NULL,
    password varchar(15) NOT NULL,
    user_level int NOT NULL,
    first_name varchar(25),
    last_name varchar(25),
    email varchar(50),
    phone_no varchar(15),
    PRIMARY KEY (id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE UNIQUE INDEX idx_user_name ON users(user_name);

--user_level: 0 admin, 1 student who can take a quiz
INSERT INTO users(user_name, password, user_level, first_name, last_name, email, phone_no)
VALUES ('admin', '1234', 0, 'Tom', 'Hanks', 'tom.hanks@gmail.com', '626-823-9942');
INSERT INTO users(user_name, password, user_level, first_name, last_name, email, phone_no)
VALUES ('user', '1234', 1, 'Marilyn', 'Monroe', 'marilyn.monroe@gmail.com', '778-990-5533');
INSERT INTO users(user_name, password, user_level, first_name, last_name, email, phone_no)
VALUES ('QU1001', '1234', 0, 'Mike', 'Jackson', 'mike.jackson@gmail.com', '604-634-8824');
INSERT INTO users(user_name, password, user_level, first_name, last_name, email, phone_no)
VALUES ('QU1011', '1234', 1, 'Tom', 'Cruse', 'tom.cruse@gmail.com', '604-883-6654');
INSERT INTO users(user_name, password, user_level, first_name, last_name, email, phone_no)
VALUES ('QU1012', '1234', 1, 'Edward', 'Blais', 'edward.blais@gmail.com', '706-554-3320');
INSERT INTO users(user_name, password, user_level, first_name, last_name, email, phone_no)
VALUES ('QU1013', '1234', 1, 'Matthew', 'Lisson', 'matthew.lisson@gmail.com', '778-663-2233');

UPDATE users SET user_level=1 WHERE user_name='QU1011';


CREATE TABLE users_scores (
    user_name varchar(25) NOT NULL,
    start_time datetime NOT NULL,
    end_time datetime NOT NULL, 
    score int NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
CREATE INDEX idx_scores_user_name ON users_scores(user_name);

INSERT INTO users_scores(user_name, start_time, end_time,score)
VALUES('QU1011', '2017-10-11 13:17:17', '2017-10-11 14:30:17',80);
INSERT INTO users_scores(user_name, start_time, end_time,score)
VALUES('QU1011', '2017-10-25 10:00:01', '2017-10-25 11:30:00',95);
INSERT INTO users_scores(user_name, start_time, end_time,score)
VALUES('QU1012', '2018-05-08 09:00:03', '2018-05-08 10:30:17',90);



