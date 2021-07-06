import { waitFor } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { useGetNotes } from "./useGetNotes";

test("Should return loading true initially", async () => {
  jest.spyOn(window, "fetch");
  fetch.mockResolvedValue(
    new Response(
      JSON.stringify([
        {
          id: 1,
          note: "This is an important note.",
        },
      ]),
      { status: 200 }
    )
  );

  const { result } = renderHook(() => useGetNotes());
  expect(result.current.notesLoading).toBe(true);

  await waitFor(() => {
    expect(result.current.notes).toStrictEqual([
      {
        id: 1,
        note: "This is an important note.",
      },
    ]);
  });

  fetch.mockRestore();
});

test("Should return notes and loading false after loaded", async () => {
  jest.spyOn(window, "fetch");
  fetch.mockResolvedValue(
    new Response(
      JSON.stringify([
        {
          id: 1,
          note: "This is an important note.",
        },
      ]),
      { status: 200 }
    )
  );

  const { result } = renderHook(() => useGetNotes());

  await waitFor(() => {
    expect(result.current.notes).toStrictEqual([
      {
        id: 1,
        note: "This is an important note.",
      },
    ]);
  });

  expect(result.current.notesLoading).toBe(false);

  fetch.mockRestore();
});
