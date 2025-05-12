export function titleToSlug(title: string): string {
  return title
    .toLocaleLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .split(" ")
    .filter(Boolean)
    .join("-")
    .trim();
}
