create database rushevo_db;
use rushevo_db;

-- hecha?
create table usuarios(
	id_user INT not null auto_increment,
	email varchar(256) not null,
	password varchar(256) not null,
	nombre varchar(256) not null,
	apellido varchar(256) not null,
	fecha_nac DATE,
	primary key (id_user)
);

insert into usuarios (email, password, nombre, apellido, fecha_nac) values ('gaming@gaming.com','gaming','gam','ing','2022-11-28');
select * from usuarios;

select * from usuarios;

-- hacer
create table articulos(
	id_pag INT not null auto_increment, primary key (id_pag),
	page_name varchar(256) not null,
	description varchar(256) not null,
	link varchar(256)
);

create table imagenes_articulos(
	id_img INT not null auto_increment, 
	pag_id INT not null,
	img_name varchar(256) not null,
	img_url varchar(256) not null,
	primary key (id_img),
	constraint fk_img_id 
	foreign key (pag_id) 
		references articulos (id_pag)
); 

insert into articulos (page_name, description, link) values ('Concepto','Explicación del concepto de Deportes Extremos','/contenido/deportes/concepto.html');

insert into imagenes_articulos (pag_id, img_name, img_url) values (1, 'BannerPrueba', '/img/Concepto_2.jpg');


select a.id_pag, a.link, i.id_img, i.img_name, i.img_url 
from articulos a
inner join imagenes_articulos i;

select * from articulos;