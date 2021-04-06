import { render, screen } from "@testing-library/react";
import { Hello } from "./Hello";
import * as data from "./data";

test("Should include users name when rendered", async () => {
  const safe = data.getUser;
  data.getUser = (id) => {
    return new Promise((resolve) =>
      resolve({
        id,
        name: "Bob",
      })
    );
  };

  render(<Hello id={1} />);

  expect(await screen.findByText(/Bob/)).toBeInTheDocument();

  data.getUser = safe;
});
