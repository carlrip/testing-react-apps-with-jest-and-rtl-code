import { render } from "react-dom";
import { act } from "react-dom/test-utils";
import { ErrorMessage } from "./ErrorMessage";

test("Should render correct message when message prop passed", () => {
  const container = document.createElement("div");
  document.body.appendChild(container);

  act(() => {
    render(<ErrorMessage message="test" />, container);
  });

  const div = document.querySelector(".save-error");

  expect(div.textContent).toBe("test");

  div.remove();
});
