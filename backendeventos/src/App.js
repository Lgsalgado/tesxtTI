// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventPage from './components/EventPage';
import EventForm from './components/EventForm';
import EventList from './components/EventList';

function App() {
    return (
        <Router>
            <div className="App">
                {/* Aquí puedes agregar un Header o cualquier otro componente global */}
                <Routes>
                    {/* Ruta para la página principal de eventos donde se muestran la lista de eventos y el formulario */}
                    <Route path="/eventos" element={<EventPage />} />

                    {/* Ruta para el formulario de agregar un nuevo evento */}
                    <Route path="/eventos/agregar" element={<EventForm />} />

                    {/* Ruta para editar un evento existente */}
                    <Route path="/eventos/editar/:id" element={<EventForm />} />

                    {/* Ruta por defecto o cualquier otra que necesites */}
                    <Route path="/" element={<EventPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
