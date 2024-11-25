
-- create
CREATE TABLE Usuarios (
  cpf VARCHAR(14) NOT NULL,
  senha_usuario VARCHAR(100) NOT NULL,
  nome_completo TEXT NOT NULL,
  data_nascimento VARCHAR(20) NOT NULL,
  endereco VARCHAR(110) NOT NULL
);


-- insert
INSERT  INTO Usuarios  (cpf, senha_usuario, nome_completo, data_nascimento, endereco) VALUES 
 ('744.267.430-52', 'clark34532', 'clarksilva', '02/05/2003', 'mariaalmas.56'),
 ('787.389.220-45', 'clark34532', 'clarksilva', '05/21/1990', 'mulgoo.31'),
 ('719.589.140-29', 'clark34532', 'clarksilva', '07/30/1999', 'cogonhas.56'),
 ('240.275.019-77', 'clark34532', 'clarksilva', '09/26/1989', 'matildes.89');
-- fetch 
SELECT * FROM Usuarios ;
