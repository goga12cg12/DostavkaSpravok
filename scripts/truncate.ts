export function truncate(str: string, n?: number) {
  if (!str) return "";
  // Remove whitespaces
  let trimmed = str.trim();
  // Truncate if necessary
  if (n !== undefined && trimmed.length > n) {
    trimmed = trimmed.substr(0, n);
  }
  return trimmed;
}
