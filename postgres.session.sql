DROP TABLE users;
DROP TABLE profiles;
DROP TABLE table_name;

CREATE TABLE Users (
    id INT,
    firstName VARCHAR(50),
    lastName VARCHAR(50),
    createdAt TIMESTAMP,
    deletedAt TIMESTAMP,
    modifiedAt TIMESTAMP,
    updatedAt TIMESTAMP
);



insert into users values (1, 'mehdi','bayar');


SELECT * FROM users;

DELETE FROM table_name;
DELETE FROM users;

insert into table_name values ('hello postgres');

SELECT * FROM table_name;
