import React from "react"
import { getNotes } from "./notesData";

export function useGetNotes() {
    const [notesLoading, setNotesLoading] = React.useState(true);
    const [notes, setNotes] = React.useState([]);
    React.useEffect(() => {
      let unloaded = false;
      async function get() {
        const fetchedNotes = await getNotes();
        if (!unloaded) {
          setNotes(fetchedNotes);
          setNotesLoading(false);
        }
      }
      get();

      return () => {
        unloaded = true;
      }
    }, []);

    return {
        notes,
        notesLoading
    }
}