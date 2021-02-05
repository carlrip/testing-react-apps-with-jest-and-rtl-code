const names = ["Bill", "Jane"];

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getName(id) {
  await wait(200);
  return names.length <= id ? null : names[id];
}
