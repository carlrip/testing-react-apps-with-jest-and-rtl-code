const endpointRoot = "http://localhost:4001";

export async function getNotes() {
  const response = await fetch(`${endpointRoot}/notes`);
  if (!response.ok) {
    return [];
  }
  const data = await response.json();
  return data;
}

export async function addNote(
  note
) {
  const response = await fetch(
    new Request(`${endpointRoot}/notes`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ note }),
    })
  );
  if (!response.ok) {
    return { ok: false };
  }
  const data = await response.json();
  return { ok: true };
}
