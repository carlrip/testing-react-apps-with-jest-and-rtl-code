import React from "react";
import { render, screen } from "@testing-library/react";
import { Table } from "./Table";

test("headings are rendered with the columns passed in", () => {
  render(
    <Table
      data={[
        { field1: "A", field2: 1 },
        { field1: "B", field2: 2 },
      ]}
      columns={[
        { name: "field1", caption: "Field 1" },
        { name: "field2", caption: "Field 2" },
      ]}
    />
  );
  // TODO - check correct column headings are rendered
});

test("cells are rendered with the data passed in", () => {
  render(
    <Table
      data={[
        { field1: "A", field2: 1 },
        { field1: "B", field2: 2 },
      ]}
      columns={[
        { name: "field1", caption: "Field 1" },
        { name: "field2", caption: "Field 2" },
      ]}
    />
  );
  // TODO - check correct cell values are rendered
});

test("Heading & cell alignment is left if not defined", () => {
  render(
    <Table
      data={[{ field1: "A" }]}
      columns={[{ name: "field1", caption: "Field 1" }]}
    />
  );
  // TODO - check column alignment is correct
});

test("Heading & cell alignment is correct when defined", () => {
  render(
    <Table
      data={[{ field1: "A" }]}
      columns={[{ name: "field1", caption: "Field 1", align: "center" }]}
    />
  );
  // TODO - check column alignment is correct
});
