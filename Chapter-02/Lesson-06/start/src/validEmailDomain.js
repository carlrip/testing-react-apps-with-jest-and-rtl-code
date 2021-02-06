const domains = ["somewhere.com", "somewhereelse.com"];

export function validEmailDomain(email) {
  const domain = getDomain(email);
  const exists = domains.includes(domain);
  return exists;
}

function getDomain(email) {
  return email.split("@")[1];
}
