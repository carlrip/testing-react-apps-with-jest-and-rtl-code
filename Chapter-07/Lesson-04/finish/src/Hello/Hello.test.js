import { render, screen } from "@testing-library/react";
import { Hello } from "./Hello";
import * as data from "./data";

test("Should include users name when rendered", async () => {
  jest.spyOn(data, "getUser").mockResolvedValue({ id: 1, name: "Bob" });

  render(<Hello id={1} />);

  expect(await screen.findByText(/Bob/)).toBeInTheDocument();
  expect(data.getUser).toHaveBeenCalled();
  expect(data.getUser).toHaveBeenCalledTimes(1);
  expect(data.getUser).toHaveBeenCalledWith(1);

  data.getUser.mockClear();
  await data.getUser(2);
  expect(data.getUser).toHaveBeenCalledTimes(1);

  data.getUser.mockReset();
  console.log(await data.getUser(3));

  data.getUser.mockRestore();
});
