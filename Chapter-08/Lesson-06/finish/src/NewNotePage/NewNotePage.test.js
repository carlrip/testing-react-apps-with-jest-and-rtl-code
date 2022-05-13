import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NewNotePage } from "./NewNotePage";
import { App } from "../App";

test("Should render correct page title", () => {
  render(
    <MemoryRouter>
      <NewNotePage />
    </MemoryRouter>
  );

  expect(screen.getByText("New Note")).toBeInTheDocument();
});


test("Should render success message when save is successful", async () => {
  const user = userEvent.setup();

  jest.spyOn(window, "fetch");
  fetch.mockResolvedValue(
    new Response(JSON.stringify({}), { status: 200 })
  );

  render(
    <MemoryRouter>
      <NewNotePage />
    </MemoryRouter>
  );

  (await screen.findByLabelText("Note")).focus();
  await user.keyboard("Test");

  await user.click(await screen.findByText("Save"));

  expect(await screen.findByText("The note was successfully added")).toBeInTheDocument();
  expect(fetch).toHaveBeenCalledTimes(1);

  fetch.mockRestore();
});

test("Should render error message when save is not successful", async () => {
  const user = userEvent.setup();

  jest.spyOn(window, "fetch");
  fetch.mockResolvedValue(
    new Response(JSON.stringify({}), { status: 500 })
  );

  render(
    <MemoryRouter>
      <NewNotePage />
    </MemoryRouter>
  );

  (await screen.findByLabelText("Note")).focus();
  await user.keyboard("Test");

  await user.click(await screen.findByText("Save"));

  expect(
    await screen.findByText("There was a problem adding this note")
  ).toBeInTheDocument();
  expect(fetch).toHaveBeenCalledTimes(1);

  fetch.mockRestore();
});

test("Should open home page when home link is pressed", async () => {
  const user = userEvent.setup();
  render(
    <MemoryRouter initialEntries={["/new"]}>
      <App />
    </MemoryRouter>
  );

  await user.click(await screen.findByText("Go to home"));

  expect(await screen.findByText("Notes")).toBeInTheDocument();
});
