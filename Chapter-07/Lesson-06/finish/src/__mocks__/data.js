export async function getUser(id) {
  return new Promise((resolve) =>
    resolve({
      id,
      name: "Bob",
    })
  );
}

export async function getUserRole(id) {
  return new Promise((resolve) =>
    resolve({
      role: "Administrator",
    })
  );
}
