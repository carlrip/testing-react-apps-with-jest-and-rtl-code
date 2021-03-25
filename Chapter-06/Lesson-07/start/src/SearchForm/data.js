const data = ["Apple", "Pear", "Banana", "Strawberry", "Orange", "Kiwi"];

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function search(criteria = "") {
  await wait(300);
  return data.filter((item) =>
    item.toLowerCase().includes(criteria.toLowerCase())
  );
}
