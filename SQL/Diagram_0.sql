/*
   Thursday, 2 May 202411:43:28
   User: 
   Server: DESKTOP-PAQEUL1
   Database: test
   Application: 
*/

/* To prevent any potential data loss issues, you should review this script in detail before running it outside the context of the database designer.*/
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
CREATE TABLE dbo.tjedan
	(
	ponedjeljak datetime NULL,
	utorak datetime NULL,
	srijeda datetime NULL,
	cetvrtak datetime NULL,
	petak datetime NULL,
	subota datetime NULL,
	nedjelja datetime NULL,
	fondsati int NULL
	)  ON [PRIMARY]
GO
ALTER TABLE dbo.tjedan SET (LOCK_ESCALATION = TABLE)
GO
COMMIT
