export async function getUser(id) {
  const response = await fetch(`https://some-server/users/${id}`);
  const data = await response.json();
  return data;
}
