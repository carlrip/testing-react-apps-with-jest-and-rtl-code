import { useForm } from "./useForm";
import { renderHook, act } from "@testing-library/react-hooks";

test("values should be empty object when first rendered", () => {
  const { result } = renderHook(() => useForm());
  expect(result.current.values).toStrictEqual({});
});

test("values should be updated when field changes", () => {
  const { result } = renderHook(() => useForm());
  act(() => {
    const field = result.current.register("field");
    field.onChange({ target: { value: "test" } });
  });
  expect(result.current.values.field).toBe("test");
});

test("submit callback should be called when form submitted", () => {
  const { result } = renderHook(() => useForm());
  const onSubmit = jest.fn();
  act(() => {
    const field = result.current.register("field");
    field.onChange({ target: { value: "test" } });
  });
  act(() => {
    result.current.handleSubmit(onSubmit)({ preventDefault: jest.fn() });
  });
  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onSubmit).toHaveBeenCalledWith({ field: "test" });
});
