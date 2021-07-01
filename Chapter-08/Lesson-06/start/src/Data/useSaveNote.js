import React from "react";
import { addNote } from "../data/notesData";

export function useSaveNote() {
    const [saveResult, setSaveResult] = React.useState(undefined);

    const handleSubmit = (note) => async (e) => {
        e.preventDefault()
        const result = await addNote(note);
        setSaveResult(result.ok ? "success" : "error");
    }

    return {
        handleSubmit,
        saveResult
    }
}