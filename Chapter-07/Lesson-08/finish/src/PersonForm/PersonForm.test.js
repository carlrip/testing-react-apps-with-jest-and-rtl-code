import { render, screen } from "@testing-library/react";
import { PersonForm } from "./PersonForm";
import userEvent from "@testing-library/user-event";

test("Should render success message when form successfully submitted", async () => {
  const user = userEvent.setup();

  jest.spyOn(window, "fetch");
  fetch.mockResolvedValue(
    new Response(JSON.stringify({ id: 1 }), { status: 200 })
  );

  render(<PersonForm />);

  screen.getByLabelText("Name").focus();
  await user.keyboard("Fred");

  screen.getByLabelText("Score").focus();
  await user.keyboard("10");

  await user.click(screen.getByText("Save"));

  expect(await screen.findByText(/successfully added/i)).toBeInTheDocument();

  fetch.mockRestore();
});

test("Should render error message when invalid form submitted", async () => {
  const user = userEvent.setup();
  jest.spyOn(window, "fetch");
  fetch.mockResolvedValue(
    new Response(JSON.stringify({ errors: { Name: "Invalid name" } }), {
      status: 400,
    })
  );

  render(<PersonForm />);

  screen.getByLabelText("Name").focus();
  await user.keyboard("Fred");

  screen.getByLabelText("Score").focus();
  await user.keyboard("10");

  await user.click(screen.getByText("Save"));

  expect(await screen.findByText(/problem/i)).toBeInTheDocument();

  fetch.mockRestore();
});
