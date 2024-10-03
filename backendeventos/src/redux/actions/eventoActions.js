import axios from 'axios';
const API_URL = 'https://localhost:7068/api';

console.log("API_URL:", API_URL);
// Acción para listar todos los eventos
export const fetchEventos = () => async (dispatch) => {
    try {
        const response = await axios.get(`${API_URL}/Eventos`);
        dispatch({ type: 'FETCH_EVENTOS_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'FETCH_EVENTOS_FAILURE', error });
    }
};

// Acción para agregar un evento
export const addEvento = (evento) => async (dispatch) => {
    try {
        const response = await axios.post(`${API_URL}/Eventos`, evento);
        dispatch({ type: 'ADD_EVENTO_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'ADD_EVENTO_FAILURE', error });
    }
};

// Acción para obtener un evento por su ID
export const getEventoById = (id) => async (dispatch) => {
    try {
        const response = await axios.get(`${API_URL}/Eventos/${id}`);
        dispatch({ type: 'GET_EVENTO_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'GET_EVENTO_FAILURE', error });
    }
};

// Acción para editar un evento por su ID
export const editEvento = (id, evento) => async (dispatch, getState) => {
    try {
        const response = await axios.put(`${API_URL}/Eventos/${id}`, evento);
        dispatch({ type: 'EDIT_EVENTO_SUCCESS', payload: response.data });

        // Actualizar el estado global con el evento editado
        const eventos = getState().eventoReducer.eventos;
        const updatedEventos = eventos.map((e) =>
            e.id === id ? response.data : e
        );

        dispatch({ type: 'FETCH_EVENTOS_SUCCESS', payload: updatedEventos });

    } catch (error) {
        dispatch({ type: 'EDIT_EVENTO_FAILURE', error });
    }
};


// Acción para eliminar un evento por su ID
export const deleteEvento = (id) => async (dispatch) => {
    try {
        await axios.delete(`${API_URL}/Eventos/${id}`);
        dispatch({ type: 'DELETE_EVENTO_SUCCESS', payload: id });
    } catch (error) {
        dispatch({ type: 'DELETE_EVENTO_FAILURE', error });
    }
};
