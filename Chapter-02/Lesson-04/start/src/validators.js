export function isEmail(email) {
  const regex = new RegExp(/^[^@\s]+@[^@\s.]+\.[^@.\s]+$/);
  return regex.test(email);
}

export function isUrl(url) {
  const regex = new RegExp(
    /(https?:\/\/)?([\w\-])+\.{1}([a-zA-Z]{2,63})([\/\w-]*)*\/?\??([^#\n\r]*)?#?([^\n\r]*)/
  );
  return regex.test(url);
}
