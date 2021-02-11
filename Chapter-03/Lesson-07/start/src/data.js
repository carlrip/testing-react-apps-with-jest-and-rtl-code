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
  {
    id: 3,
    firstName: "Sue",
    lastName: "Peel",
  },
];

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getPerson(id) {
  await wait(200);
  const found = people.filter((p) => p.id === id);
  return found.length === 0 ? "Person Not Found" : found[0];
}

export async function searchPeople(criteria) {
  await wait(200);
  const found = people.filter(
    (p) =>
      p.firstName.toLowerCase().indexOf(criteria.toLowerCase()) > -1 ||
      p.lastName.toLowerCase().indexOf(criteria.toLowerCase()) > -1
  );
  return found;
}
