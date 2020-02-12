export default function isOnlyAllowedChars(string: string): boolean {
  const allowedCharacters = /^[a-zßäáàâçéèêëìíîïöœüúûù´`^¨ -]*$/i;
  if (string.match(allowedCharacters)) return true;
  return false;
}
