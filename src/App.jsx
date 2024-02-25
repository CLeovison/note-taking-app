import React from "react";
import { NoteContextProvider } from "./Context/NoteContextProvider";
import NoteTaking from "./components/NoteTaking";

export default function App() {
  return (
    <>
      <NoteContextProvider>
        <NoteTaking />
      </NoteContextProvider>
    </>
  );
}
