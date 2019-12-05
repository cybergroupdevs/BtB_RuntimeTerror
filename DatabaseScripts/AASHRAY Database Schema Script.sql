DROP DATABASE IF EXISTS AASHRAY
CREATE DATABASE AASHRAY
--Choose Database AASHRAY
--UserRoles
DROP TABLE IF EXISTS UserTypes;
CREATE TABLE UserTypes (Id int PRIMARY KEY IDENTITY(1,1),
						UserTypeCode varchar(10) NULL,
						UserType varchar(40) NULL,
						RoleDescription varchar(255) NULL,
						isResponsibleFor varchar(255) NULL,
						isActive bit NOT NULL);

--Rescue Details
DROP TABLE IF EXISTS RescueDetails;
CREATE TABLE RescueDetails (Id int PRIMARY KEY IDENTITY(1,1),
							RaisedByUser varchar(50) NULL,
							RespondedBy varchar(50) NULL,
							FullName varchar(50) NULL,
							Phone varchar(15) NULL,
							RequestTime timestamp NOT NULL,
							ActionTime datetime  NULL,
							ResponseTime Time NULL,
							RaisedByDevice varchar(30) NULL,
							DeviceAddress varchar(50) NULL,
							DeviceAddressType varchar(50) NULL,
							Latitude float(15) NOT NULL,
							Longitude float(15) NOT NULL,
							MapLocation varchar(255) NULL,
							SuccessPercentage int NULL,
							isCompleted bit NULL,
							isActive bit NOT NULL DEFAULT 1);

--Holds the Address data
DROP TABLE IF EXISTS AddressDetails;
CREATE TABLE AddressDetails (Id int Primary key identity (1,1),
							 Email varchar(60) NULL,
							 Phone varchar(15)  NULL,
							 HouseBuilding varchar(50) NULL,
							 AddressLine1 varchar(100) NULL,
							 AddressLine2 varchar(100) NULL,
							 City varchar(50) NULL,
							 State varchar(50) NULL,
							 Country varchar(50) NULL,
							 PinCode int NULL,
							 LandMark varchar(50) NULL,
							 Latitude float(15) NULL,
							 Longitude float(15) NULL,
							 MapLocation nvarchar(500) NULL,
							 isAddressVerified bit DEFAULT 0,
							 isActive bit DEFAULT 1);

--Holds the verification data
DROP TABLE IF EXISTS VerificationDetails;
CREATE TABLE VerificationDetails (Id int Primary key identity (1,1),
								  Id1path varchar(255) NULL,
								  Id2path varchar(255) NULL,
								  Id3path varchar(255) NULL,
								  Id1ProofType varchar(15) NULL,
								  Id2ProofType varchar(15) NULL,
								  Id3ProofType varchar(15) NULL,
								  Id1VerifiedBy varchar(50) NULL,
								  Id2VerifiedBy varchar(50) NULL,
								  Id3VerifiedBy varchar(50) NULL,
								  isId1Verified bit NULL,
								  isId2Verified bit NULL,
								  isId3Verified bit NULL,
								  isCertified bit NULL,
								  isCertifiedBy1 varchar(50) NULL,
								  isCertifiedBy2 varchar(50) NULL,
								  isCertifiedBy3 varchar(50) NULL,
								  isActive bit DEFAULT 1);
								  
--Users Table (Holds user table)
DROP TABLE IF EXISTS Users;
CREATE TABLE Users (Id int PRIMARY KEY identity(1,1),
					UserTypeId int NOT NULL references dbo.UserTypes (Id) ON UPDATE CASCADE,
					UserName varchar(30) NOT NULL,
					FirstName varchar(30) NOT NULL,
					MiddleName varchar(30) NULL,
					LastName varchar(30) NULL,
					DOB date NULL,
					Gender varchar(10) NULL,
					Email varchar(60) NOT NULL UNIQUE,
					Phone varchar(15) NULL,
					AddressDetailId int NULL references dbo.AddressDetails (Id) ON UPDATE CASCADE,
					VerificationDetailId int NULL references dbo.VerificationDetails (Id) ON UPDATE CASCADE,
					Password varchar(255) NULL,
					SecurityQuestion1 varchar(100) NULL,
					SecurityQuestion2 varchar(100) NULL,
					SecurityQuestion1Answer varchar(50) NULL,
					SecurityQuestion2Answer varchar(50) NULL,
					isAuthByThirdParty bit NULL,
					ThirdPartyId nvarchar(500) NULL,
					isOrgPart bit NULL,
					OrgName varchar (50) NULL,
					isActive bit NOT NULL DEFAULT 1,
					isEmailVerified bit NULL,
					isPhoneVerified bit NULL,
					isVerifiedUser bit NOT NULL DEFAULT 0,
					VerifiedBy varchar(50) NULL);

--Records of all the helps
DROP TABLE IF EXISTS Helps;
CREATE TABLE Helps (Id int PRIMARY KEY identity (1,1),
							UserId int NOT NULL,
							isActive bit NOT NULL,
							HelpDescription nvarchar(500) NULL,
							OpenDate datetime NULL,
							CloseDate datetime NULL,
							isVolunteer bit NULL,
							isVacant bit NULL,
							VolunteerType varchar(100) NULL,
							isShelter bit NULL,
							isClothings bit NULL,
							isFood bit NULL,
							isMedicine bit NULL, 
							canAccomodate int NULL,
							isAccomodating int NULL,
							AccomodationType varchar(50) NULL,
							OpenAfterDate Datetime NULL,
							CloseAfterDate Datetime NULL,
							AddressDetailId int NULL references dbo.AddressDetails (Id) ON UPDATE CASCADE);

--Records of all the Authorities
DROP TABLE IF EXISTS Authorities;
CREATE TABLE Authorities (Id int PRIMARY KEY identity(1,1),
							UserTypeId int NOT NULL references dbo.UserTypes (Id) ON UPDATE CASCADE,
							AuthorityName varchar(30) NULL,
							AuthorityFullAddress nvarchar(500) NULL,
							Email varchar(60) NOT NULL UNIQUE,
							Phone1 varchar(15) NOT NULL,
							Phone2 varchar(15) NULL,
							Phone3 varchar(15) NULL,
							isEmailVerified bit NULL,
							isPhoneVerified1 bit NULL,
							isPhoneVerified2 bit NULL,
							isPhoneVerified3 bit NULL,
							AddressDetailId int NULL references dbo.AddressDetails (Id) ON UPDATE CASCADE,
							VerificationDetailId int NULL references dbo.VerificationDetails (Id) ON UPDATE CASCADE,
							Password varchar(255) NULL,
							SecurityQuestion1 varchar(100) NULL,
							SecurityQuestion2 varchar(100) NULL,
							SecurityQuestion1Answer varchar(50) NULL,
							SecurityQuestion2Answer varchar(50) NULL,
							isAuthByThirdParty bit NULL,
							ThirdPartyId nvarchar(500) NULL,
							isActive bit NOT NULL DEFAULT 1,
							isVerifiedUser bit NULL DEFAULT 0,
							VerifiedBy varchar(50) NULL);
