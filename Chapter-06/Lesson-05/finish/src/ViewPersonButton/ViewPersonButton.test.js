import { render, screen } from "@testing-library/react";
import { ViewPersonButton } from "./ViewPersonButton";
import userEvent from "@testing-library/user-event";

test("Hovering over button shows persons name", async () => {
  const user = userEvent.setup();
  render(<ViewPersonButton personId={1} />);

  await user.hover(screen.getByText("View"));

  expect(await screen.findByText("Bill Peters")).toBeInTheDocument();

  await user.unhover(screen.getByText("View"));
  
  expect(screen.queryByText("Bill Peters")).not.toBeInTheDocument();
});
