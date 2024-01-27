drop database if exists Raspored;
go
create database Raspored;
go
use Raspored;

CREATE TABLE djelatnici(
	ID int not null primary key identity(1,1),
	ime VARCHAR (50) NOT NULL,
	prezime VARCHAR (50) NOT NULL,
	odjel int not null
	);

CREATE TABLE slike(
	ID int not null primary key identity(1,1),
	djelatnik int not null,
	redni_br int not null,
	putanja VARCHAR (50)
);

CREATE TABLE odjel(
	ID int not null primary key identity(1,1),
	vrsta VARCHAR (50)
);

alter table djelatnici add foreign key (odjel) references odjel(ID);
alter table slike add foreign key (djelatnik) references djelatnici(ID);
alter table odjel add foreign key (djelatnici) references djelatnici(ID);

insert into djelatnici (ime,prezime,odjel,slika) values
('','',1,1),
('','',1,2),
('','',1,3),
('','',2,4),
('','',2,5);

insert into odjel (vrsta) values
('mesnica'),
('delikatesa'),
('prijem'),
('sala');

