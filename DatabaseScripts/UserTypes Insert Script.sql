USE [AASHRAY]
GO

INSERT INTO [dbo].[UserTypes]
           ([UserTypeCode]
		   ,[UserType]
           ,[RoleDescription]
           ,[isResponsibleFor]
           ,[isActive])
     VALUES
           ('SA',
           'Super Admin',
           'SuperAdmins are the DataBase Administrators.',
		   'Full Control Over Database.',
           1)
GO
INSERT INTO [dbo].[UserTypes]
           ([UserTypeCode]
		   ,[UserType]
           ,[RoleDescription]
           ,[isResponsibleFor]
           ,[isActive])
     VALUES
           ('ADMN',
           'Admin',
           'Admins are the controlling, monitoring Authority of AASHRAY.',
		   'Admins are entitled to manage Database and Apps on behalf of AASHRAY. They are responsible for Verifying Authorities, NGO and Users',
           1)
GO
INSERT INTO [dbo].[UserTypes]
           ([UserTypeCode]
		   ,[UserType]
           ,[RoleDescription]
           ,[isResponsibleFor]
           ,[isActive])
     VALUES
           ('ATHRTY',
           'Authorities',
           'Authorities are Government or Non- Government entities.',
		   'Authorities are resposible for Identifying threats, help people in danger, rescue them, respond to emergencies, assure safety to the AASHRAY community, and provide assistance in times of need.',
           1)
GO
INSERT INTO [dbo].[UserTypes]
           ([UserTypeCode]
		   ,[UserType]
           ,[RoleDescription]
           ,[isResponsibleFor]
           ,[isActive])
     VALUES
           ('NGO',
		   'Non Government Organization',
           'NGOs are group of people who belongs to a specific Organisation and willing to make a difference without expecting anything in return from the AASHRAY',
           'NGO will provide assistance, Rescue Missions, Rehabiliation Camps, Medical Assistance, Food and Water Supply, Find compatilble shelters from Users, Offer shelters to Victims, Guests, Manage victims.',
           1)
GO
INSERT INTO [dbo].[UserTypes]
           ([UserTypeCode]
		   ,[UserType]
           ,[RoleDescription]
           ,[isResponsibleFor]
           ,[isActive])
     VALUES
           ('USR',
           'User',
		   'Users are help providers, help seekers, or part of NGO/Authorities',
           'Users are the individuals who offer helps(shelter, food, clothings, medicines etc), Find compatilble shelters from other Users, Offer shelters to Victims, can provide assistance',
           1)
GO
INSERT INTO [dbo].[UserTypes]
           ([UserTypeCode]
		   ,[UserType]
           ,[RoleDescription]
           ,[isResponsibleFor]
           ,[isActive])
     VALUES
           ('GST',
           'GUEST',
		   'GUESTS are users who have arrived to the platform but have not Shared any Information with AASHRAY Admins.',
           'GUEST are usually victims, looking for help, rescue. They can contact the Authorities, NGOs for help in times of need (Natural calamity, Disaster and in case of any unfortunate events).',
           1)
GO

