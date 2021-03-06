import { render, screen } from "@testing-library/react";
import { PersonPage } from "./PersonPage";

// test("Should render person name when data has loaded", async () => {
//   render(<PersonPage id={0} />);
//   expect(
//     await screen.findByText("Herman Vandervort", undefined, {
//       timeout: 5000,
//     })
//   ).toBeInTheDocument();
// });

test("Should render person name when data has loaded", async () => {
  render(<PersonPage id={0} />);
  expect(
    await screen.findAllByText("Herman Vandervort", undefined, {
      timeout: 5000,
    })
  ).toHaveLength(2);
});
