import { rAF } from "@hr-element/utils";
import { describe, expect, it } from "vitest";
import { Loading } from "./service";

describe("Loading", () => {
  it("should creat Loading instance", () => {
    const instance = Loading();
    expect(instance).toBeTruthy();
  });

  it("should render mask", async () => {
    Loading();
    await rAF();
    expect(document.querySelector(".hr-loading__mask")).toBeTruthy();
  });

  it("should close Loading and remove it from DOM", async () => {
    const instance = Loading();

    await rAF();
    expect(document.querySelector(".hr-loading")).toBeTruthy();
    instance.close();
    await rAF();

    expect(document.querySelector(".hr-loading")).toBeFalsy();
  });
});
