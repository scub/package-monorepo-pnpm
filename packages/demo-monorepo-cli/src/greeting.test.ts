import { describe, expect, it } from "vitest";
import { buildGreeting } from "./greeting.js";

describe("buildGreeting", () => {
  it("delegates to demo-monorepo-core's greet", () => {
    expect(buildGreeting("Grace")).toBe("Hello, Grace!");
  });

  it("defaults to a greeting for World when no name is given", () => {
    expect(buildGreeting()).toBe("Hello, World!");
  });
});
