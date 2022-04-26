function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function post(details) {
  await wait(300);
  console.log(details);
}
