use master
go
drop database if exists Raspored;
go
create database test;
go
use test;

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
	putanja varchar (2048)
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

ALTER TABLE slike COLUMN putanja varchar(255);


insert into slike (djelatnik,redni_br,putanja) values
(1,1,'C:\Users\Marko\Documents\GitHub\UcenjeWP3\SQL\pic\1.jfif'),
(2,2,'C:\Users\Marko\Documents\GitHub\UcenjeWP3\SQL\pic\2.png'),
(3,3,'C:\Users\Marko\Documents\GitHub\UcenjeWP3\SQL\pic\3.jfif'),
(4,4,'C:\Users\Marko\Documents\GitHub\UcenjeWP3\SQL\pic\4.jfif'),
(5,5,'C:\Users\Marko\Documents\GitHub\UcenjeWP3\SQL\pic\5.jfif'),
(6,6,'C:\Users\Marko\Documents\GitHub\UcenjeWP3\SQL\pic\6.jfif'),
(7,7,'C:\Users\Marko\Documents\GitHub\UcenjeWP3\SQL\pic\7.jfif'),
(8,8,'C:\Users\Marko\Documents\GitHub\UcenjeWP3\SQL\pic\8.png'),
(9,9,'C:\Users\Marko\Documents\GitHub\UcenjeWP3\SQL\pic\9.jfif'),
(10,10,'C:\Users\Marko\Documents\GitHub\UcenjeWP3\SQL\pic\10.png'),
(11,11,'C:\Users\Marko\Documents\GitHub\UcenjeWP3\SQL\pic\11.jfif'),
(12,12,'C:\Users\Marko\Documents\GitHub\UcenjeWP3\SQL\pic\12.png'),
(13,13,'C:\Users\Marko\Documents\GitHub\UcenjeWP3\SQL\pic\13.jfif');



CREATE TABLE Raspored (djelatnik int ,ime varchar(15) ,prezime varchar(15) ,
		Odjel varchar(15),
           Ponedjeljak varchar (10),Utorak varchar (10),Srijeda varchar(10),Cetvrtak varchar(10),Petak varchar(10),Subota varchar(10),Nedjelja varchar(10) )

alter table Raspored add foreign key (djelatnik) references djelatnici(ID);
--alter table Raspored add foreign key (prezime) references djelatnici(ID);

--alter table Raspored add foreign key (Djelatnik) references djelatnici(prezime);
--alter table Raspored add foreign key (Odjel) references odjel(vrsta);

--alter table Raspored 
--EXEC sp_rename 'Raspored.a1' , 'Ponedjeljak' , 'column' ; 
--EXEC sp_rename 'Raspored.a2' , 'Utorak' , 'column' ;
--EXEC sp_rename 'Raspored.a3' , 'Srijeda' , 'column' ;
--EXEC sp_rename 'Raspored.a4' , 'Cetvrtak' , 'column' ;
--EXEC sp_rename 'Raspored.a5' , 'Petak' , 'column' ;
--EXEC sp_rename 'Raspored.a6' , 'Subota' , 'column' ;
--EXEC sp_rename 'Raspored.a7' , 'Nedjelja' , 'column' ;

--a1 to 'Monday',a2='Tuesday',a3='Wednesday',a4='Thursday',a5='Friday',a6='Saturday',a7='Sunday');
 
--SELECT S.ime,S.prezime,P.vrsta from odjel P,djelatnici S INNER JOIN djelatnici  on S.ID=S.ID;
insert into Raspored (ime,prezime,Odjel)select ime,prezime,odjel from djelatnici ;

alter table Raspored add fondsati int;
Update Raspored SET fondsati = (Ponedjeljak + Utorak + Srijeda + Cetvrtak + Petak + Subota + Nedjelja);



SET DATEFIRST 1 -- ( Ponedjeljak )
CREATE TABLE proba 
           (
           ponedjeljak date FORMAT (getdate(), 'dddd, MMMM, yyyy') as date ;


		   select * from Raspored;


--use master
--drop database Raspored;
--drop TABLE Raspored;

--select * from Raspored;
BEGIN TRANSACTION
SET QUOTED_IDENTIFIER ON
SET ARITHABORT ON
SET NUMERIC_ROUNDABORT OFF
SET CONCAT_NULL_YIELDS_NULL ON
SET ANSI_NULLS ON
SET ANSI_PADDING ON
SET ANSI_WARNINGS ON
COMMIT
BEGIN TRANSACTION
GO
CREATE TABLE dbo.tjedan2
	(
	ponedjeljak datetime NULL,
	ut datetime2 NULL,
	sr datetime2 NULL,
	ce datetime2 NULL,
	pe varchar (10) NULL,
	su int NULL,
	nedjelja datetime NULL,
	fondsati int NULL
	)  ON [PRIMARY]
GO
ALTER TABLE dbo.tjedan2 SET (LOCK_ESCALATION = TABLE)
GO
COMMIT

select * from tjedan;
SET DATEFIRST 3

SELECT FORMAT (getdate(), 'dddd, MMMM, yyyy') as date

DATEPART(dw, '2024-04-21')
SELECT DAYOFWEEK(NOW());

SELECT DATEPART(dw, '2017/08/25') AS DatePartInt;
SELECT DATEPART(month, '2017/08/25') AS DatePartInt;
SELECT DAY('2017/08/25') AS DayOfMonth;
SELECT DATENAME(dw, '2017/08/25') AS DatePartString;

SELECT DATENAME(year, '12:10:30.123')  
    ,DATENAME(month, '12:10:30.123')  
    ,DATENAME(day, '12:10:30.123')  
    ,DATENAME(dayofyear, '12:10:30.123')  
    ,DATENAME(weekday, '12:10:30.123'); 

select DATENAME(weekday, '12:10:30.123'); 
update tjedan2 set pe = DATENAME(weekday, '2024/05/25') ;
update tjedan2 set pe = DATENAME(weekday, '2024/05/25') ;

select * from tjedan2;

SELECT DATEPART(year, GETDATE()) AS CurrentYear,
       DATEPART(month, GETDATE()) AS CurrentMonth,
       DATEPART(day, GETDATE()) AS CurrentDay;

SELECT FORMAT(sr, 'd', 'en-US') AS 'Datetime2'
FROM tjedan2;