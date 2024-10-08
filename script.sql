USE [eventos]
GO
/****** Object:  User [evento]    Script Date: 3/10/2024 8:17:51 ******/
CREATE USER [evento] FOR LOGIN [evento] WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [db_owner] ADD MEMBER [evento]
GO
ALTER ROLE [db_accessadmin] ADD MEMBER [evento]
GO
ALTER ROLE [db_securityadmin] ADD MEMBER [evento]
GO
ALTER ROLE [db_ddladmin] ADD MEMBER [evento]
GO
ALTER ROLE [db_backupoperator] ADD MEMBER [evento]
GO
ALTER ROLE [db_datareader] ADD MEMBER [evento]
GO
ALTER ROLE [db_datawriter] ADD MEMBER [evento]
GO
ALTER ROLE [db_denydatareader] ADD MEMBER [evento]
GO
ALTER ROLE [db_denydatawriter] ADD MEMBER [evento]
GO
/****** Object:  Table [dbo].[Eventos]    Script Date: 3/10/2024 8:17:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Eventos](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [nvarchar](255) NOT NULL,
	[FechaEvento] [datetime] NOT NULL,
	[Lugar] [nvarchar](255) NULL,
	[Descripcion] [nvarchar](1000) NULL,
	[Precio] [decimal](18, 2) NOT NULL,
	[EstaActivo] [bit] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Eventos] ADD  DEFAULT ((1)) FOR [EstaActivo]
GO
