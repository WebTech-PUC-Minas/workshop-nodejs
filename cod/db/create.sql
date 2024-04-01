CREATE TABLE produtos (
    id BIGSERIAL PRIMARY KEY,
    descricao VARCHAR(50) NOT NULL,
    valor DECIMAL(10, 2) NOT NULL,
    marca VARCHAR(25)
);