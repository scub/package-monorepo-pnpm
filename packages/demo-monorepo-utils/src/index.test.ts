import { describe, expect, it } from "vitest";
import { toTitleCase, addNumbers } from "./index.js";

describe("toTitleCase", () => {
  it("capitalizes the first letter of every word", () => {
    expect(toTitleCase("hello world")).toBe("Hello World");
  });

  it("returns an empty string unchanged", () => {
    expect(toTitleCase("")).toBe("");
  });

  it("collapses repeated internal spaces instead of producing empty words", () => {
    expect(toTitleCase("hello   world")).toBe("Hello World");
  });

  it("trims leading and trailing spaces", () => {
    expect(toTitleCase("  hello  world  ")).toBe("Hello World");
  });
});

describe("addNumbers", () => {
  it("adds two numbers", () => {
    expect(addNumbers(1,2)).toBe(3);
  });
});