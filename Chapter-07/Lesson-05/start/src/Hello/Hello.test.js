import { render, screen } from "@testing-library/react";
import { Hello } from "./Hello";
import * as data from "./data";

test("Should include users name when rendered", async () => {
  render(<Hello id={1} />);

  expect(await screen.findByText(/Bob/)).toBeInTheDocument();
  expect(data.getUser).toHaveBeenCalled();
  expect(data.getUser).toHaveBeenCalledTimes(1);
  expect(data.getUser).toHaveBeenCalledWith(1);
});
