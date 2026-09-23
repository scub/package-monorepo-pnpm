export function toTitleCase(input: string): string {
  return input
    .toLowerCase()
    .split(/\s+/)
    .filter((word) => word.length > 0)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

export function addNumbers(x: number, y: number): number {
  return x + y
}