export const noteReducer = (state, action) => {
    switch (action.type) {
    case 'ADD_NOTE':
    return [...state, { id: Date.now(), title: action.title, content: action.content }];
    case 'DELETE_NOTE':
    return state.filter(note => note.id !== action.id);
    case 'EDIT_NOTE':
    return state.map(note => note.id === action.id ? { ...note, title: action.title, content: action.content } : note);
    default:
    throw new Error(`Unhandled action type: ${action.type}`);
    }
   }
