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

export function searchPeople(criteria) {
  const found = people.filter(
    (p) =>
      p.firstName.toLowerCase().indexOf(criteria.toLowerCase()) > -1 ||
      p.lastName.toLowerCase().indexOf(criteria.toLowerCase()) > -1
  );
  if (found.length === 0) {
    throw Error("No people found");
  }
  return found;
}

export async function searchPeopleAsync(criteria) {
  await wait(200);
  const found = people.filter(
    (p) =>
      p.firstName.toLowerCase().indexOf(criteria.toLowerCase()) > -1 ||
      p.lastName.toLowerCase().indexOf(criteria.toLowerCase()) > -1
  );
  if (found.length === 0) {
    throw Error("No people found");
  }
  return found;
}
