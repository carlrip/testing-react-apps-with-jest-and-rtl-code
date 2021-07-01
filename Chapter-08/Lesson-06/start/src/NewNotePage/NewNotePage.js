import React from "react";
import { Link } from "react-router-dom";
import { Page } from "../common/Page";
import { useNoteField } from "./useNoteField";
import { useSaveNote } from "../data/useSaveNote";
import { SuccessMessage } from "../Common/SuccessMessage";
import { ErrorMessage } from "../Common/ErrorMessage";
import css from "./NewNotePage.module.css";

export function NewNotePage() {

  const { note, handleNoteChange } = useNoteField();
  const { handleSubmit, saveResult } = useSaveNote();

  return (
    <Page title="New Note">
      <form onSubmit={handleSubmit(note)} noValidate className={css.form}>
        <div className={css.row}>
          <label htmlFor="note">Note</label>
          <textarea
            id="note"
            name="note"
            value={note}
            onChange={handleNoteChange}
            disabled={saveResult === "success"}
          />
        </div>
        <button type="submit" disabled={note === "" || saveResult === "success"}>Save</button>
        {saveResult === "success" && (
          <SuccessMessage message="The note was successfully added" />
        )}
        {saveResult === "error" && (
          <ErrorMessage message="There was a problem adding this note" />
        )}
      </form>
      <Link to="/" className={css.homelink}>
        Go to home
      </Link>
    </Page>
  );
}
