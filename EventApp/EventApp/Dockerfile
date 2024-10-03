# Etapa 1: Construcción de la aplicación (build)
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos el archivo .csproj y restauramos las dependencias
COPY EventosAPI.csproj ./  
RUN dotnet restore

# Copiamos el resto de los archivos del proyecto
COPY . ./

# Publicamos la aplicación en el directorio /app/publish
RUN dotnet publish -c Release -o /app/publish

# Etapa 2: Creación del contenedor final (runtime)
FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base

# Establecemos el directorio de trabajo en el contenedor
WORKDIR /app

# Copiamos los archivos publicados desde la etapa de build
COPY --from=build /app/publish ./

# Exponemos el puerto 80 para que la aplicación sea accesible
EXPOSE 80

# Definimos el comando que se ejecutará al iniciar el contenedor
ENTRYPOINT ["dotnet", "EventosAPI.dll"]
