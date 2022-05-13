import { render, screen } from "@testing-library/react";
import { SearchForm } from "./SearchForm";
import userEvent from "@testing-library/user-event";

test("Submitting a search with no criteria should render validation error", async () => {
  const user = userEvent.setup();

  render(<SearchForm />);
  await user.click(screen.getByText("Search"));
  expect(
    await screen.findByText("You must enter some search criteria")
  ).toBeInTheDocument();
});

test("Submitting a search with criteria should render correct results", async () => {
  const user = userEvent.setup();

  render(<SearchForm />);

  screen.getByPlaceholderText("Enter search criteria").focus();
  await user.keyboard("app");

  await user.click(screen.getByText("Search"));
  
  expect(await screen.findByText("Apple")).toBeInTheDocument();
});

test("Search indicator should show during search request", async () => {
  const user = userEvent.setup();

  render(<SearchForm />);

  screen.getByPlaceholderText("Enter search criteria").focus();
  await user.keyboard("app");

  await user.click(screen.getByText("Search"));
  
  expect(screen.getByText("Searching ...")).toBeInTheDocument();
  await screen.findByText("Apple");
  expect(screen.queryByText("Searching ...")).not.toBeInTheDocument();
});

test("Submitting a search with criteria that does not match should render not found message", async () => {
  const user = userEvent.setup();

  render(<SearchForm />);

  screen.getByPlaceholderText("Enter search criteria").focus();
  await user.keyboard("unknown");

  await user.click(screen.getByText("Search"));
  
  expect(await screen.findByText("None found")).toBeInTheDocument();
});

test("Clicking Clear button should clear criteria and results", async () => {
  const user = userEvent.setup();

  render(<SearchForm />);

  screen.getByPlaceholderText("Enter search criteria").focus();

  await user.keyboard("app");

  await user.click(screen.getByText("Search"));
  
  await screen.findByText("Apple");
  
  await user.click(screen.getByText("Clear"));
  
  expect(
    await screen.findByPlaceholderText("Enter search criteria")
  ).toHaveDisplayValue("");
  expect(screen.queryByText("Apple")).not.toBeInTheDocument();
});
