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

  const columns = screen
    .getAllByRole("columnheader")
    .map((cell) => cell.textContent);
  expect(columns).toStrictEqual(["Field 1", "Field 2"]);
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
  const cells = screen.getAllByRole("cell").map((cell) => cell.textContent);
  expect(cells).toStrictEqual(["A", "1", "B", "2"]);
});

test("Heading & cell alignment is left if not defined", () => {
  render(
    <Table
      data={[{ field1: "A" }]}
      columns={[{ name: "field1", caption: "Field 1" }]}
    />
  );

  const column = screen.getByRole("columnheader");
  const cell = screen.getByRole("cell");

  expect(column.style.textAlign).toBe("left");
  expect(cell.style.textAlign).toBe("left");
});

test("Heading & cell alignment is correct when defined", () => {
  render(
    <Table
      data={[{ field1: "A" }]}
      columns={[{ name: "field1", caption: "Field 1", align: "center" }]}
    />
  );

  const column = screen.getByRole("columnheader");
  const cell = screen.getByRole("cell");

  expect(column.style.textAlign).toBe("center");
  expect(cell.style.textAlign).toBe("center");
});
