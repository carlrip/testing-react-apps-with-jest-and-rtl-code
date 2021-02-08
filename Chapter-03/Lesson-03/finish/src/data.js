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

const companies = [
  {
    id: 1,
    name: "Dibbert Group",
  },
  {
    id: 2,
    name: "Littel, Schulist and Rice",
  },
];

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getPerson(id) {
  await wait(200);
  const found = people.filter((p) => p.id === id);
  return found.length === 0 ? null : found[0];
}

export async function getCompany(id) {
  await wait(200);
  const found = companies.filter((p) => p.id === id);
  return found.length === 0 ? undefined : found[0];
}
