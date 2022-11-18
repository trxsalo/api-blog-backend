
CREATE TABLE usuarios(
    id SERIAL NOT NULL,
    nombrecompleto character varying(50),
    apellidom character varying(50),
    email character varying(50),
    usuario character varying(50),
    password character varying(100),
    createdat timestamp without time zone,
    updatedat timestamp without time zone,
    PRIMARY KEY(id)
);