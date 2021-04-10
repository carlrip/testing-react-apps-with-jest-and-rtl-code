import { render, screen } from "@testing-library/react";
import { Hello } from "./Hello";

jest.mock("../data");

test("Should include users name when rendered", async () => {
  render(<Hello id={1} />);

  expect(await screen.findByText(/Bob/)).toBeInTheDocument();
});
