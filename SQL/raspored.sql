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

insert into odjel (vrsta) values
('Mesnica'),
('Delikatesa'),
('Voditelj'),
('Sala');


insert into djelatnici (ime,prezime,odjel) values
('Mario','Baliban',1),
('Durdica','Novakovic',1),
('Danijela','Brezovac',2),
('Jelena','Predic',2),
('Snjezana','Kanski',2),
('Manuela','Marusic',3),
('Marijana','Iles',3),
('Valentina','Ivkovic',3),
('Snjezana','Polanec',4),
('Martina','Gomercic',4),
('Zeljka','Blazevic',4),
('Romana','Pavlovic',4),
('Zeljka','Milakovic',4);



--insert into slike (djelatnik,redni_br,putanja) values
--('',1,'')



CREATE TABLE Raspored (
		[Datum] DATE ,
		[Dan] char(10) ,
		Djelatnik int ,
		Odjel int )

alter table Raspored add foreign key (Djelatnik) references djelatnici(ID);
alter table Raspored add foreign key (Odjel) references odjel(ID);

		SET DATEFIRST 1

DECLARE @StartDate AS DATETIME
DECLARE @EndDate AS DATETIME
SET @StartDate = CURRENT_TIMESTAMP
SET @EndDate =  DATEADD(d, 6, @StartDate)
WHILE @StartDate <= @EndDate

BEGIN

INSERT INTO Raspored

([Dan],[Datum])

SELECT

CASE DATEPART(DW, @StartDate)

WHEN 1 THEN 'Monday'
WHEN 2 THEN 'Tuesday'
WHEN 3 THEN 'Wednesday'
WHEN 4 THEN 'Thursday'
WHEN 5 THEN 'Friday'
WHEN 6 THEN 'Saturday'
WHEN 7 THEN 'Sunday'

END AS DayOfWeek

,@StartDate AS ActualDate

SET @StartDate = DATEADD(DD, 1, @StartDate)

END

GO

--use master
--drop database Raspored
--drop TABLE Raspored;

--select * from Raspored;


