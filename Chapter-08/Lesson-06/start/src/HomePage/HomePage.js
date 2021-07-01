import React from "react";
import { useHistory } from "react-router-dom";
import { Page } from "../common/Page";
import { Table } from "../common/Table";
import { useGetNotes } from "../data/useGetNotes";
import css from "./HomePage.module.css";

export function HomePage() {
  const { notes, notesLoading } = useGetNotes();

  const history = useHistory();

  function handleAdd() {
    history.push("/new");
  }

  return (
    <Page title="Notes">
      {notesLoading && <div>Loading notes ...</div>}
      <button onClick={handleAdd} className={css.addbutton}>
        Add new note
      </button>
      <Table
        columns={[
          { name: "id", caption: "ID", align: "left" },
          { name: "note", caption: "Note", align: "left" },
        ]}
        data={notes}
        keyColumnName="id"
      ></Table>
    </Page>
  );
}
