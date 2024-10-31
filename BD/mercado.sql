create database mercado;
use mercado;

create table producto(
    codigo int primary key,
    nombre varchar(50),
    precio double,
    cantidad int,
    caracteristicas varchar(100),
    imagen varchar(100)
);
create table cliente(
    rfc varchar(20) primary key,
    codigo int,
    nombre varchar(50),
    paterno varchar(50),
    materno varchar(50),
    edad tinyint,
    sexo char,
    celular bigint,
    foto varchar(1000),
    foreign key (codigo) references producto (codigo)
);
create table empleado(
    numEmpleado int,
    nombre varchar(50),
    paterno varchar(50),
    materno varchar(50),
    celular bigint(50),
    cargo varchar(50),
    sexo varchar(50)
);