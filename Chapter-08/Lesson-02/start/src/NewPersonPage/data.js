const endpointRoot = "https://some-server";

export async function addPerson(person) {
  const response = await fetch(
    new Request(`${endpointRoot}/people`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...person,
      }),
    })
  );
  if (!response.ok) {
    return { ok: false };
  }
  const data = await response.json();
  return { ok: true, id: data.id };
}
