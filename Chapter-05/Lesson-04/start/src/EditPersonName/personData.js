const people = [
  {
    id: 0,
    firstName: "Herman",
    lastName: "Vandervort",
    email: "herman.vandervort@somewhere.com",
    scores: [8, 4, 7],
  },
  {
    id: 1,
    firstName: "German",
    lastName: "Howey",
    email: "german.howe@somewhere.com",
    scores: [4, 9, 2],
  },
  {
    id: 2,
    firstName: "Lavina",
    lastName: "Bayer",
    email: "lavina.bayer@somewhere.com",
    scores: [3, 4, 9],
  },
];

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getPerson(id) {
  await wait(100);
  return people.filter((p) => p.id === id)[0];
}

export async function updateName(name) {
  await wait(100);
  people.forEach((person) => {
    if (person.id === name.id) {
      person.firstName = name.firstName;
      person.lastName = name.lastName;
    }
  });
}
