const domains = ["somewhere.com", "somewhereelse.com"];

export function validEmailDomain(email: string) {
  const domain = getDomain(email);
  const exists = domains
    .map((d) => d.toLowerCase())
    .includes(domain.toLowerCase());
  return exists;
}

function getDomain(email: string) {
  return email.split("@")[1];
}
