const initialState = {
    eventos: [],
    evento: null,  // Evento seleccionado por ID
    error: null,
};

export const eventoReducer = (state = initialState, action) => {
    switch (action.type) {
        // Acción para obtener todos los eventos
        case 'FETCH_EVENTOS_SUCCESS':
            return { ...state, eventos: action.payload };

        // Acción para manejar error al obtener eventos
        case 'FETCH_EVENTOS_FAILURE':
            return { ...state, error: action.error };

        // Acción para agregar un nuevo evento
        case 'ADD_EVENTO_SUCCESS':
            return { ...state, eventos: [...state.eventos, action.payload] };

        // Acción para obtener un solo evento por su ID
        case 'GET_EVENTO_SUCCESS':
            return { ...state, evento: action.payload };

        // Acciones para manejar errores generales (agregar, editar, eliminar)
        case 'ADD_EVENTO_FAILURE':
        case 'EDIT_EVENTO_FAILURE':
        case 'DELETE_EVENTO_FAILURE':
            return { ...state, error: action.error };

        // Acción para editar un evento: reemplaza el evento en la lista de eventos
        case 'EDIT_EVENTO_SUCCESS':
            return {
                ...state,
                eventos: state.eventos.map((evento) =>
                    evento.id === action.payload.id ? action.payload : evento
                ),
            };

        // Acción para eliminar un evento: filtra el evento eliminado de la lista
        case 'DELETE_EVENTO_SUCCESS':
            return {
                ...state,
                eventos: state.eventos.filter((evento) => evento.id !== action.payload),
            };

        default:
            return state;
    }
};
