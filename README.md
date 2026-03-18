![api-banner-1](https://github.com/user-attachments/assets/5055a53c-6464-45dc-8612-a1ec53cb66da)
![npm](https://img.shields.io/npm/v/simple-country-flags-api-client)
![downloads](https://img.shields.io/npm/dw/simple-country-flags-api-client)
![license](https://img.shields.io/npm/l/simple-country-flags-api-client)
![NPM Unpacked Size](https://img.shields.io/npm/unpacked-size/simple-country-flags-api-client)
# simple-country-flags-api-client
🇺🇳 simple-country-flags-api-client is a tiny TypeScript/JavaScript helper that generates type‑safe image URLs for country flags from https://flagsapi.com/ and exposes a curated, strongly‑typed list of supported countries for UI dropdowns and selectors.

### 📦 Installation
```console
npm install --save simple-country-flags-api-client
```

### 📚 Features
1. Type-safe flag URL builder for FlagsAPI
2. Curated list of all supported country codes and names
3. Strict typing for flag sizes and styles
4. Works in both Node.js and client side environments
5. Zero runtime dependencies, lightweight and fast
6. Sizes Accepted: 16, 24, 32, 48 and 64. Flag Styles: "flat" or "shiny"

### 🔤 Example Usage
```javascript
/* node modules 
import React from "react";
import { getFlagIcon, getSupportedCountries } from "simple-country-flags-api-client";

/* create: a select list of options */
export function CountrySelect() {
  /* get: data */
  const countries = getSupportedCountries();
  /* render - select dropdown */ 
  return (
    <select>
      {countries.map((country) => (
        <option key={country.code} value={country.code}>
          {country.name}
        </option>
      ))}
    </select>
  );
}

/* create a flag-icon component */
export function CountryFlag({ code }: { code: string }) {
  const url = getFlagIcon({ countryCode: code, size: 32, style: "flat" });
  return <img src={url} alt={`${code} flag`} />;
}
```

### 📗 Test Coverage
```console
PASS  src/get-supported-countries/test/index.test.ts
  getSupportedCountries
    ✓ returns an array with length greater than zero
    ✓ ensures each item has "name" and "code" string properties
    ✓ ensures each "code" is exactly 2 characters long
    ✓ ensures each code is uppercase
    ✓ ensures there are no duplicate codes

PASS  src/get-flag-icon/test/index.test.ts
  getFlagIcon
    ✓ returns the URL based on the input params
    ✓ returns a URL that contains "https://flagsapi.com" as a substring
    ✓ returns a flat 16px URL in /style/size.png order
    ✓ returns a shiny 64px URL in /style/size.png order
```
```console
-------------------------|---------|----------|---------|---------|-------------------
File                     | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-------------------------|---------|----------|---------|---------|-------------------
All files                |     100 |      100 |     100 |     100 |                   
 get-flag-icon           |     100 |      100 |     100 |     100 |                   
  index.ts               |     100 |      100 |     100 |     100 |                   
 get-supported-countries |     100 |      100 |     100 |     100 |                   
  index.ts               |     100 |      100 |     100 |     100 |                   
-------------------------|---------|----------|---------|---------|-------------------
Test Suites: 2 passed, 2 total
Tests:       9 passed, 9 total
```

###  📘 Contributing
Contributions, suggestions, and improvements are welcome.<br/>
Feel free to open issues or pull requests.

### ❤️ Support
Like this project? Support it with a github star, it would mean a lot to me! Cheers and Happy Coding.
