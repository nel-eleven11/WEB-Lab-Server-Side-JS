CREATE USER IF NOT EXISTS 'nelson'@'%' IDENTIFIED BY 'admin';
GRANT ALL PRIVILEGES ON blog_nelson.* TO 'nelson'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;

CREATE TABLE IF NOT EXISTS posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    posicion VARCHAR(100) NOT NULL,
    posicion2 VARCHAR(100),
    numero INT NOT NULL,
    equipo VARCHAR(100) NOT NULL,
    descripcion TEXT NOT NULL
);