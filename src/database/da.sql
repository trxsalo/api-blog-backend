
CREATE TABLE usuarios(
    id SERIAL NOT NULL,
    nombrecompleto character varying(50) NOT NULL,
    apellidom character varying(50) NOT NULL,
    email character varying(50) NOT NULL,
    usuario character varying(50) NOT NULL,
    password character varying(100) NOT NULL,
    createdat timestamp without time zone,
    updatedat timestamp without time zone,
    PRIMARY KEY(id),
    roles_id INTEGER,
    Foreign Key (roles_id) REFERENCES roles(id)
);

DROP TABLE usuarios;

CREATE TABLE roles(
    id SERIAL NOT NULL,
    name character varying(50),
    PRIMARY KEY(id)
);

DROP TABLE posts;

CREATE TABLE posts(
    id SERIAL NOT NULL,
    titulo character varying(50),
    descripcion character varying(100),
    createdat timestamp without time zone,
    updatedat timestamp without time zone,
    PRIMARY KEY(id),
    usuario_id INTEGER,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
)

