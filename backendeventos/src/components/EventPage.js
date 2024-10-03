import React from 'react';
import EventForm from './EventForm';
import EventList from './EventList';
import { Container, Row, Col } from 'react-bootstrap';

const EventPage = () => {
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <EventList />  {/* Aquí se muestra la lista de eventos */}
                </Col>
                <Col md={6}>
                    <EventForm />  {/* Aquí se muestra el formulario de agregar eventos */}
                </Col>
            </Row>
        </Container>
    );
};

export default EventPage;
