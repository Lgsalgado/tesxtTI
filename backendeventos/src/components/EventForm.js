import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEvento, editEvento, getEventoById } from '../redux/actions/eventoActions';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

const EventForm = () => {
    const [nombre, setNombre] = useState('');
    const [fechaEvento, setFechaEvento] = useState('');
    const [lugar, setLugar] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [estaActivo, setEstaActivo] = useState(true); // Si la API requiere el campo `EstaActivo`

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const evento = useSelector((state) => state.eventoReducer.evento);

    useEffect(() => {
        if (id) {
            dispatch(getEventoById(id));
        }
    }, [id, dispatch]);

    useEffect(() => {
        if (evento) {
            setNombre(evento.nombre);
            setFechaEvento(evento.fechaEvento ? new Date(evento.fechaEvento).toISOString().slice(0, 10) : ''); // Formato YYYY-MM-DD
            setLugar(evento.lugar);
            setDescripcion(evento.descripcion);
            setPrecio(evento.precio);
            setEstaActivo(evento.estaActivo);
        }
    }, [evento]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEvento = {
            id,
            nombre,
            fechaEvento,
            lugar,
            descripcion,
            precio,
            estaActivo
        };

        if (id) {
            dispatch(editEvento(id, newEvento));
        } else {
            dispatch(addEvento(newEvento));
        }
        navigate('/');
    };

    return (
        <div>
            <h2>{id ? 'Editar Evento' : 'Agregar Evento'}</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="nombre">
                    <Form.Label>Nombre del Evento</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="fechaEvento">
                    <Form.Label>Fecha del Evento</Form.Label>
                    <Form.Control
                        type="date"
                        placeholder="Ingrese fecha"
                        value={fechaEvento}
                        onChange={(e) => setFechaEvento(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="lugar">
                    <Form.Label>Lugar del Evento</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese lugar"
                        value={lugar}
                        onChange={(e) => setLugar(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="descripcion">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese descripción"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="precio">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Ingrese precio"
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="estaActivo">
                    <Form.Check
                        type="checkbox"
                        label="Evento Activo"
                        checked={estaActivo}
                        onChange={(e) => setEstaActivo(e.target.checked)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    {id ? 'Guardar Cambios' : 'Agregar Evento'}
                </Button>
            </Form>
        </div>
    );
};

export default EventForm;
