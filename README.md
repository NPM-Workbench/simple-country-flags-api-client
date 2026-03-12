![api-banner-1](https://github.com/user-attachments/assets/5055a53c-6464-45dc-8612-a1ec53cb66da)
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

###  📘 Contributing
Contributions, suggestions, and improvements are welcome.<br/>
Feel free to open issues or pull requests.

### ❤️ Support
Like this project? Support it with a github star, it would mean a lot to me! Cheers and Happy Coding.
