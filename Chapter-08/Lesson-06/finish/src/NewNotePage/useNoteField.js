import React from "react";

export function useNoteField() {
    const [note, setNote] = React.useState("");

    function handleNoteChange(e) {
        setNote(e.currentTarget.value);
    }

    return {
        note, handleNoteChange
    }
}