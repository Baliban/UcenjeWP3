drop database if exists Raspored;
go
create database Raspored;
go
use Raspored;

CREATE TABLE djelatnici(
	ID int not null primary key identity(1,1),
	ime VARCHAR (50) NOT NULL,
	prezime VARCHAR (50) NOT NULL,
	odjel int not null,
	slika int not null
);

CREATE TABLE slike(
	ID int not null primary key identity(1,1),
	djelatnik int not null,
	redni_br int not null,
	putanja VARCHAR (50)
);

CREATE TABLE odjel(
	ID int not null primary key identity(1,1),
	djelatnici int not null,
	vrsta VARCHAR (50)
);

alter table djelatnici add foreign key (odjel) references odjel(ID);
alter table djelatnici add foreign key (slika) references slike(ID);
alter table slike add foreign key (djelatnik) references djelatnici(ID);
alter table odjel add foreign key (djelatnici) references djelatnici(ID);


