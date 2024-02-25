import { useContext } from "react";
import { NoteContext } from "../Context/NoteContextProvider";

export const useNotes = () => useContext(NoteContext);

