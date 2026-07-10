export function filterItemsByPath<T extends { name: string }>(items: T[], pathItems: string[]) {
  const allowedNames = new Set(pathItems);
  return items.filter((item) => allowedNames.has(item.name));
}
