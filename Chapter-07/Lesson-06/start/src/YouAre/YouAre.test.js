import { render, screen } from "@testing-library/react";
import { YouAre } from "./YouAre";

test("Should include users role when rendered", async () => {
  render(<YouAre id={1} />);

  expect(await screen.findByText(/Administrator/)).toBeInTheDocument();
});
