/* app imports */
import { getFlagIcon } from "../index.js";

describe("getFlagIcon", () => {
  /* #1 */
  it("returns the URL based on the input params", () => {
    const url = getFlagIcon({
      countryCode: "BE",
      size: 64,
      style: "flat",
    });

    expect(url).toBe("https://flagsapi.com/BE/flat/64.png");
  });

  /* #2 */
  it('returns a URL that contains "https://flagsapi.com" as a substring', () => {
    const url = getFlagIcon({
      countryCode: "US",
      size: 32,
      style: "shiny",
    });

    expect(url).toContain("https://flagsapi.com");
  });

  /* #3 */
  it("returns a flat 16px URL in /style/size.png order", () => {
    const url = getFlagIcon({
      countryCode: "IN",
      size: 16,
      style: "flat",
    });

    expect(url).toBe("https://flagsapi.com/IN/flat/16.png");
  });

  /* #4 */
  it("returns a shiny 64px URL in /style/size.png order", () => {
    const url = getFlagIcon({
      countryCode: "JP",
      size: 64,
      style: "shiny",
    });

    expect(url).toBe("https://flagsapi.com/JP/shiny/64.png");
  });
});

