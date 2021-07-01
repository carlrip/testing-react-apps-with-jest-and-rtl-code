import { renderHook, act } from "@testing-library/react-hooks";
import { useNoteField } from "./useNoteField";

test("Note state should return empty string initially", () => {
  const { result } = renderHook(() => useNoteField());
  expect(result.current.note).toBe("");
});

test("handleNoteChange should update the note state and note returns updated state", () => {
  const { result } = renderHook(() => useNoteField());

  act(() => {
    result.current.handleNoteChange({ currentTarget: { value: "test" } });
  });

  expect(result.current.note).toBe("test");
});
