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
update usuarios set (1, 'gamingOriginal@gaming.com','gaming','gam','ing','2022-11-28');


update usuarios set
email = 'gamingOriginall@gaming.com'
where id_user = 1;

select * from usuarios where email = 'aaaaaa@aaaa.com' and password = 'abcde';

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
insert into articulos (page_name, description, link) values ('Acerca De','Breve resumen sobre nosotros y el proyecto.','/contenido/acerca-de.html');
insert into articulos (page_name, description, link) values ('Skate','Explicación sobre el deporte extremo de Skating.','/contenido/deportes/skate.html');
insert into articulos (page_name, description, link) values ('Escalada','Explicación sobre el deporte extremo de escalar.','/contenido/deportes/escalada.html');
insert into articulos (page_name, description, link) values ('Skydiving','Explicación sobre el deporte extremo de Skydiving o Paracaidismo.','/contenido/deportes/skydiving.html');
insert into articulos (page_name, description, link) values ('Surf','Explicación sobre el deportes extremo de Surfing.','/contenido/deportes/surf.html');
insert into articulos (page_name, description, link) values ('Motocross','Explicación sobre el deporte extremo de Motocross.','/contenido/deportes/motocross.html');




insert into imagenes_articulos (pag_id, img_name, img_url) values (1, 'BannerPrueba', '/img/Concepto_2.jpg');


select a.id_pag, a.link, i.id_img, i.img_name, i.img_url 
from articulos a
inner join imagenes_articulos i;

select * from articulos;