import { render, screen } from "@testing-library/react";
import { SearchForm } from "./SearchForm";
import userEvent from "@testing-library/user-event";

test("Submitting a search with no criteria should render validation error", async () => {
  render(<SearchForm />);
  // TODO
});

test("Submitting a search with criteria should render correct results", async () => {
  render(<SearchForm />);
  // TODO
});

test("Search indicator should show during search request", async () => {
  render(<SearchForm />);
  // TODO
});

test("Submitting a search with criteria that does not match should render not found message", async () => {
  render(<SearchForm />);
  // TODO
});

test("Clicking Clear button should clear criteria and results", async () => {
  render(<SearchForm />);
  // TODO
});
