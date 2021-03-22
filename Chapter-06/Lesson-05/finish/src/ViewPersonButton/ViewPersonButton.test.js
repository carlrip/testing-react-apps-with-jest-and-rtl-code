import { render, screen } from "@testing-library/react";
import { ViewPersonButton } from "./ViewPersonButton";
import userEvent from "@testing-library/user-event";

test("Hovering over button shows persons name", async () => {
  render(<ViewPersonButton personId={1} />);

  userEvent.hover(screen.getByText("View"));

  expect(await screen.findByText("Bill Peters")).toBeInTheDocument();

  userEvent.unhover(screen.getByText("View"));
  expect(screen.queryByText("Bill Peters")).not.toBeInTheDocument();
});
