// src/components/EventList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteEvento } from '../redux/actions/eventoActions';
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';

const EventList = () => {
    const dispatch = useDispatch();
    const eventos = useSelector((state) => state.eventoReducer.eventos);

    const handleDelete = (id) => {
        dispatch(deleteEvento(id));
    };

    return (
        <div>
            <h2>Lista de Eventos</h2>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Fecha</th>
                    <th>Lugar</th>
                    <th>Precio</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {eventos && eventos.map((evento) => (
                    <tr key={evento.id}>
                        <td>{evento.id}</td>
                        <td>{evento.nombre}</td>
                        <td>{new Date(evento.fechaEvento).toLocaleDateString()}</td>
                        <td>{evento.lugar}</td>
                        <td>{evento.precio}</td>
                        <td>
                            {/* Botón de editar */}
                            <Link to={`/eventos/editar/${evento.id}`}>
                                <Button variant="warning" className="me-2">Editar</Button>
                            </Link>
                            {/* Botón de eliminar */}
                            <Button variant="danger" onClick={() => handleDelete(evento.id)}>
                                Eliminar
                            </Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
};

export default EventList;
