import { render, screen, act } from "@testing-library/react";
import { SearchForm } from "./SearchForm";
import userEvent from "@testing-library/user-event";

test("Submitting a search with no criteria should render validation error", async () => {
  render(<SearchForm />);
  userEvent.click(screen.getByText("Search"));
  expect(
    await screen.findByText("You must enter some search criteria")
  ).toBeInTheDocument();
});

test("Submitting a search with criteria should render correct results", async () => {
  render(<SearchForm />);
  userEvent.type(screen.getByPlaceholderText("Enter search criteria"), "app");
  userEvent.click(screen.getByText("Search"));
  expect(await screen.findByText("Apple")).toBeInTheDocument();
});

test("Search indicator should show during search request", async () => {
  render(<SearchForm />);
  userEvent.type(screen.getByPlaceholderText("Enter search criteria"), "app");
  userEvent.click(screen.getByText("Search"));
  expect(screen.getByText("Searching ...")).toBeInTheDocument();
  await screen.findByText("Apple");
  expect(screen.queryByText("Searching ...")).not.toBeInTheDocument();
});

test("Submitting a search with criteria that does not match should render not found message", async () => {
  render(<SearchForm />);
  userEvent.type(
    screen.getByPlaceholderText("Enter search criteria"),
    "unknown"
  );
  userEvent.click(screen.getByText("Search"));
  expect(await screen.findByText("None found")).toBeInTheDocument();
});

test("Clicking Clear button should clear criteria and results", async () => {
  render(<SearchForm />);
  userEvent.type(screen.getByPlaceholderText("Enter search criteria"), "app");
  userEvent.click(screen.getByText("Search"));
  await screen.findByText("Apple");
  await act(async ()=> {
    userEvent.click(screen.getByText("Clear"));
  });
  userEvent.click(screen.getByText("Clear"));
  expect(
    screen.getByPlaceholderText("Enter search criteria")
  ).toHaveDisplayValue("");
  expect(screen.queryByText("Apple")).not.toBeInTheDocument();
});
