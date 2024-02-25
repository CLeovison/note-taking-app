import { createContext, useContext, useReducer } from 'react';
// add curly braces to the noteReducer import
import { noteReducer } from '../hooks/noteReducer'; 

export const NoteContext = createContext();

export const NoteContextProvider = ({ children }) => {
    const [notes, dispatch] = useReducer(noteReducer, []);

    return (
        <NoteContext.Provider value={{ notes, dispatch }}>
            {children}
        </NoteContext.Provider>
    );
};
