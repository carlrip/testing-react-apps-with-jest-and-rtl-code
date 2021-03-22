const people = [
  {
    id: 1,
    firstName: "Bill",
    lastName: "Peters",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Sheers",
  },
];

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getPersonSummary(id) {
  await wait(200);
  const found = people.filter((p) => p.id === id);
  return found.length === 0 ? "" : `${found[0].firstName} ${found[0].lastName}`;
}
