import { waitFor } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";
import { useSaveNote } from "./useSaveNote";

test("handleSubmit submits the note and saveResult returns result of submission", async () => {
    jest.spyOn(window, "fetch");
    fetch.mockResolvedValue(
        new Response(JSON.stringify({}), { status: 200 })
    );

    const { result } = renderHook(() => useSaveNote());

    act(() => {
        result.current.handleSubmit("note test")({ preventDefault: () => {} });
    });

    await waitFor(() => {
        expect(result.current.saveResult).toBe("success");
    });
    expect(fetch).toHaveBeenCalledTimes(1);

    fetch.mockRestore();
});
