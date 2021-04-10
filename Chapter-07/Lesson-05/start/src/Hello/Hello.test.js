import { render, screen } from "@testing-library/react";
import { Hello } from "./Hello";
import * as data from "./data";

jest.mock("./data");

beforeEach(() => {
  data.getUser.mockResolvedValue({
    id: 0,
    name: "",
  });
});
afterEach(() => {
  jest.resetAllMocks();
});

test("Should include users name when rendered", async () => {
  data.getUser.mockResolvedValue({
    id: 1,
    name: "Bob",
  });

  render(<Hello id={1} />);

  expect(await screen.findByText(/Bob/)).toBeInTheDocument();
  expect(data.getUser).toHaveBeenCalled();
  expect(data.getUser).toHaveBeenCalledTimes(1);
  expect(data.getUser).toHaveBeenCalledWith(1);
});

test("Should include users role when rendered", async () => {
  console.log(data.getUser(1));
  data.getUserRole.mockResolvedValue({
    role: "Administrator",
  });

  render(<Hello id={1} />);

  expect(await screen.findByText(/Administrator/)).toBeInTheDocument();
  expect(data.getUserRole).toHaveBeenCalled();
  expect(data.getUserRole).toHaveBeenCalledTimes(1);
  expect(data.getUserRole).toHaveBeenCalledWith(1);
});
