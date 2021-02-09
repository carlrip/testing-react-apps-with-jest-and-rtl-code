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

export async function searchPeople(criteria) {
  await wait(200);
  const found = people.filter(
    (p) =>
      p.firstName.toLowerCase().indexOf(criteria.toLowerCase()) > -1 ||
      p.lastName.toLowerCase().indexOf(criteria.toLowerCase()) > -1
  );
  return found;
}

export async function searchCompanies(criteria) {
  await wait(200);
  const found = companies.filter(
    (p) => p.name.toLowerCase().indexOf(criteria.toLowerCase()) > -1
  );
  return found;
}
