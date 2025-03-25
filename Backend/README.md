Comandos para a tabela no postgreSQL

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE users IF NOT EXISTS(
    username VARCHAR(255),
    first_name VARCHAR(255),
    age_user INT(255),
    last_name VARCHAR(255),
    email VARCHAR(255),
    password_user VARCHAR(255),
    image VARCHAR(255),
    gender_user VARCHAR(255),
    problems_user VARCHAR(255),
    professional_confirm BOOLEAN,
    professional_type INT(3),
    id_user UUID DEFAULT uuid_generate_v4(),
    account_enable BOOLEAN
);

