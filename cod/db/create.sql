CREATE TABLE public.produtos (
	id bigserial NOT NULL,
	descricao varchar(50) NOT NULL,
	valor numeric(10, 2) NOT NULL,
	marca varchar(25) NULL,
	CONSTRAINT produtos_pkey PRIMARY KEY (id)
);