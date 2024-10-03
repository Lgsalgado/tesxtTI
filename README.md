# Proyecto de Eventos

Este proyecto es una aplicación de gestión de eventos, donde el backend está construido utilizando **.NET Core 6**, el frontend con **React**, y la base de datos es **SQL Server**. La aplicación permite crear, leer, actualizar y eliminar eventos a través de una API RESTful.

## Tecnologías utilizadas

### Backend
- **.NET Core 6**: El backend está construido con .NET Core 6, una plataforma moderna y eficiente para el desarrollo de aplicaciones backend.
- **API RESTful**: La API expone varios endpoints para interactuar con los eventos y manejar la lógica de negocio.
- **SQL Server**: La base de datos utilizada es SQL Server, que almacena la información de los eventos.

### Frontend
- **React**: El frontend está desarrollado con React, una biblioteca popular de JavaScript para construir interfaces de usuario interactivas.
- **Redux**: Se utiliza para el manejo del estado global de la aplicación.
- **Bootstrap**: Para el diseño y la maquetación del frontend, utilizando Bootstrap.

### Base de Datos
- **SQL Server**: La base de datos que almacena la información de los eventos, como el nombre del evento, fecha, lugar, descripción, precio y si el evento está activo o no.

## Descripción del Proyecto

### Backend
El backend está construido con **.NET Core 6** y proporciona una API RESTful que permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre los eventos.

Endpoints principales:
- `GET /api/Eventos`: Obtiene todos los eventos.
- `POST /api/Eventos`: Crea un nuevo evento.
- `PUT /api/Eventos`: Actualiza un evento existente.
- `DELETE /api/Eventos`: Elimina un evento.

### Frontend
El frontend es una aplicación construida con **React** y permite a los usuarios:
- Crear nuevos eventos.
- Ver la lista de eventos.
- Editar eventos existentes.
- Eliminar eventos.

El estado de la aplicación es gestionado con **Redux** para asegurar que los datos entre las vistas se mantengan sincronizados.

### Base de Datos
La base de datos de SQL Server contiene una tabla `Eventos` que almacena los siguientes campos:
- `Id`: Identificador único del evento.
- `Nombre`: Nombre del evento.
- `FechaEvento`: Fecha y hora del evento.
- `Lugar`: Ubicación del evento.
- `Descripcion`: Descripción del evento.
- `Precio`: Precio del evento.
- `EstaActivo`: Estado de actividad del evento (Activo/Inactivo).

