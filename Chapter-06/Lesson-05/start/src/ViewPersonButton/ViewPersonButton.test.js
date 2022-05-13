import { render, screen } from "@testing-library/react";
import { ViewPersonButton } from "./ViewPersonButton";
import userEvent from "@testing-library/user-event";

test("Hovering over button shows persons name", async () => {
  const user = userEvent.setup();
  
  render(<ViewPersonButton personId={1} />);
});
