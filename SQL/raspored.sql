use master
go
drop database if exists Raspored;
go
create database Raspored;
go
use Raspored;

CREATE TABLE djelatnici(
	ID int not null primary key identity(1,1),
	ime VARCHAR (50) NOT NULL,
	prezime VARCHAR (50) NOT NULL,
	odjel varchar (10) not null
	);

CREATE TABLE slike(
	ID int not null primary key identity(1,1),
	djelatnik int not null,
	redni_br int not null,
	putanja VARCHAR (50)
);



alter table slike add foreign key (djelatnik) references djelatnici(ID);




insert into djelatnici (ime,prezime,odjel) values 
('Mario','Baliban','1'),
('Durdica','Novakovic','1'),
('Danijela','Brezovac','2'),
('Jelena','Predic','2'),
('Snjezana','Kanski','2'),
('Manuela','Marusic','3'),
('Marijana','Iles','3'),
('Valentina','Ivkovic','3'),
('Snjezana','Polanec','4'),
('Martina','Gomercic','4'),
('Zeljka','Blazevic','4'),
('Romana','Pavlovic','4'),
('Zeljka','Milakovic','4');
 
update djelatnici set odjel='mesnica' where odjel='1' ;
update djelatnici set odjel='delikatesa' where odjel='2' ;
update djelatnici set odjel='voditelj' where odjel='3' ;
update djelatnici set odjel='sala' where odjel='4' ;


--insert into slike (djelatnik,redni_br,putanja) values
--('',1,'')



CREATE TABLE Raspored (ime varchar(15) ,prezime varchar(15) ,
		Odjel varchar(15),
           a1 varchar (10),a2 varchar (10),a3 varchar(10),a4 varchar(10),a5 varchar(10),a6 varchar(10),a7 varchar(10) )

--alter table Raspored add foreign key (Djelatnik) references djelatnici(prezime);
--alter table Raspored add foreign key (Odjel) references odjel(vrsta);

--alter table Raspored 
EXEC sp_rename 'Raspored.a1' , 'Ponedjeljak' , 'column' ; 
EXEC sp_rename 'Raspored.a2' , 'Utorak' , 'column' ;
EXEC sp_rename 'Raspored.a3' , 'Srijeda' , 'column' ;
EXEC sp_rename 'Raspored.a4' , 'Cetvrtak' , 'column' ;
EXEC sp_rename 'Raspored.a5' , 'Petak' , 'column' ;
EXEC sp_rename 'Raspored.a6' , 'Subota' , 'column' ;
EXEC sp_rename 'Raspored.a7' , 'Nedjelja' , 'column' ;

--a1 to 'Monday',a2='Tuesday',a3='Wednesday',a4='Thursday',a5='Friday',a6='Saturday',a7='Sunday');
 
--SELECT S.ime,S.prezime,P.vrsta from odjel P,djelatnici S INNER JOIN djelatnici  on S.ID=S.ID;
insert into raspored (ime,prezime,Odjel)select ime,prezime,odjel from djelatnici ;






use master
drop database Raspored
drop TABLE Raspored;

select * from Raspored;


