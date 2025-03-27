Comandos para a tabela no postgreSQL

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE users(
    username VARCHAR(555),
    first_name VARCHAR(555),
    age_user DATE,
    last_name VARCHAR(555),
    email VARCHAR(555),
    password_user VARCHAR(555),
    image VARCHAR(555),
    gender_user VARCHAR(255),
    problems_user VARCHAR(255),
    professional_confirm BOOLEAN,
    professional_type VARCHAR (555) CHECK (professional_type IN('personal trainer', 'nutricionista', 'ambos')),
    id_user UUID DEFAULT uuid_generate_v4(),
    account_enable BOOLEAN
);

