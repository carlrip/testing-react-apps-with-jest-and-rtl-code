import { render, screen } from "@testing-library/react";
import { EditPersonName } from "./EditPersonName";

test("firstName contains correct default value", async () => {
  render(<EditPersonName id={0} />);
});
