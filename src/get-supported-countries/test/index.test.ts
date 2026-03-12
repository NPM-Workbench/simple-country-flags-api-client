/* app imports */
import { getSupportedCountries } from "../index.js";

describe("getSupportedCountries", () => {
  /* #1 */
  it("returns an array with length greater than zero", () => {
    const countries = getSupportedCountries();

    expect(Array.isArray(countries)).toBe(true);
    expect(countries.length).toBeGreaterThan(0);
  });

  /* #2 */
  it('ensures each item has "name" and "code" string properties', () => {
    const countries = getSupportedCountries();

    countries.forEach((country) => {
      expect(country).toHaveProperty("name");
      expect(country).toHaveProperty("code");
      expect(typeof country.name).toBe("string");
      expect(typeof country.code).toBe("string");
    });
  });

  /* #3 */
  it('ensures each "code" is exactly 2 characters long', () => {
    const countries = getSupportedCountries();

    countries.forEach((country) => {
      expect(country.code).toHaveLength(2);
    });
  });

  /* #4 */
  it("ensures each code is uppercase", () => {
    const countries = getSupportedCountries();

    countries.forEach((country) => {
      expect(country.code).toBe(country.code.toUpperCase());
    });
  });

  /* #5 */
  it("ensures there are no duplicate codes", () => {
    const countries = getSupportedCountries();
    const codes = countries.map((country) => country.code);
    const uniqueCodes = new Set(codes);

    expect(uniqueCodes.size).toBe(codes.length);
  });
});

