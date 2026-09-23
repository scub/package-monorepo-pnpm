import { greet } from "@dancingyetis/demo-monorepo-core";

export function buildGreeting(name = "World"): string {
  return greet(name);
}
