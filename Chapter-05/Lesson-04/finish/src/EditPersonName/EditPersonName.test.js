import { render, screen } from "@testing-library/react";
import { EditPersonName } from "./EditPersonName";

test("firstName contains correct default value", async () => {
  render(<EditPersonName id={0} />);
  //expect(await screen.findByLabelText("First name")).toHaveValue("Herman");
  //expect(await screen.findByPlaceholderText("Enter first name")).toHaveValue(
  //  "Herman"
  //);
  //expect(await screen.findByDisplayValue("Herman")).toBeInTheDocument();

  expect(await screen.findByTestId("firstName")).toHaveValue("Herman");
});
