import { describe, expect, it } from "vitest";
import { greet } from "./index.js";

describe("greet", () => {
  it("returns a greeting containing the given name", () => {
    expect(greet("Ada")).toBe("Hello, Ada!");
  });

  it("returns a defined, non-crashing greeting for an empty name", () => {
    expect(greet("")).toBe("Hello, !");
  });
});
