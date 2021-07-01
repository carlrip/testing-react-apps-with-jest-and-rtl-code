import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { App } from "../App";
import { HomePage } from "./HomePage";

test("Should render correct page title", async () => {
  jest.spyOn(window, "fetch");
  fetch.mockResolvedValue(
    new Response(JSON.stringify([
      {
        "id": 1,
        "note": "This is an important note."
      }
    ]), { status: 200 })
  );

  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );

  expect(await screen.findByText("Notes")).toBeInTheDocument();

  fetch.mockRestore();
});

test("Should render loading message when data is being fetched", async () => {
  jest.spyOn(window, "fetch");
  fetch.mockResolvedValue(
    new Response(JSON.stringify([
      {
        "id": 1,
        "note": "This is an important note."
      }
    ]), { status: 200 })
  );

  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );

  expect(screen.getByText("Loading notes ...")).toBeInTheDocument();

  await screen.findByText(/important note/);

  expect(screen.queryByText("Loading notes ...")).not.toBeInTheDocument();
  expect(fetch).toHaveBeenCalledTimes(1);

  fetch.mockRestore();
});

test("Should render correct data in notes table", async () => {
  jest.spyOn(window, "fetch");
  fetch.mockResolvedValue(
    new Response(JSON.stringify([
      {
        "id": 1,
        "note": "This is an important note."
      }
    ]), { status: 200 })
  );

  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );

  await waitForElementToBeRemoved(() => screen.queryByText("Loading notes ..."));

  const cells = screen.getAllByRole("cell").map((cell) => cell.textContent);

  expect(cells).toStrictEqual(["1", "This is an important note."]);
  expect(fetch).toHaveBeenCalledTimes(1);

  fetch.mockRestore();
});

test("Should open New Note page when Add button is clicked", async () => {
  jest.spyOn(window, "fetch");
  fetch.mockResolvedValue(
    new Response(JSON.stringify([
      {
        "id": 1,
        "note": "This is an important note."
      }
    ]), { status: 200 })
  );

  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  userEvent.click(screen.getByText("Add new note"));

  expect(await screen.findByText("New Note")).toBeInTheDocument();
  
  fetch.mockRestore();
});
