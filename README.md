<div align="center" style="display: flex; flex-direction: column; align-items: center;gap: 0rem">
  <a target="_blank" rel="noopener noreferrer" href="https://raw.githubusercontent.com/rzl-zone/ts-types-plus/main/logo-circle.png">
    <img src="https://raw.githubusercontent.com/rzl-zone/ts-types-plus/main/logo-circle.png" align="middle" alt="RzlZone Logo" width="110" style="max-width: 100%;">
  </a>
</div>

<h1 align="center"><strong>TS Types Plus (Rzl Zone)</strong></h1>

<p align="center"> 
  <i>A lightweight, modern collection of TypeScript types and interfaces for Node.js & browser projects (via bundlers like Webpack/Vite).</i><br/>
  <i>Provides reusable types to enhance type safety and improve code maintainability.</i><br/>
  <strong><i>Built with ❤️ by <a href="https://github.com/rzl-app" target="_blank" rel="nofollow noreferrer noopener">@rzl-app</a>.</i></strong>
</p>

<div align="center">

<p>
<a href="https://npmjs.com/package/@rzl-zone/ts-types-plus" target="_blank" rel="nofollow noreferrer noopener">
  <img src="https://img.shields.io/npm/v/@rzl-zone/ts-types-plus?logo=npm&label=Latest%20Version&color=4CAF50&logoColor=CB3837&style=flat-rounded" alt="Latest Version on NPM">
</a>
<a href="https://npmjs.com/package/@rzl-zone/ts-types-plus" target="_blank" rel="nofollow noreferrer noopener">
  <img src="https://img.shields.io/npm/dt/@rzl-zone/ts-types-plus?logo=npm&label=Total%20Downloads&color=007EC6&logoColor=CB3837&style=flat-rounded" alt="NPM Total Downloads">
</a>
<a href="https://npmjs.com/package/@rzl-zone/ts-types-plus" target="_blank" rel="nofollow noreferrer noopener">
  <img src="https://img.shields.io/npm/dw/@rzl-zone/ts-types-plus?logo=npm&label=Weekly%20Downloads&color=CB3837&logoColor=CB3837&style=flat-rounded" alt="NPM Weekly Downloads">
</a>
<a href="https://nodejs.org/en/" target="_blank" rel="nofollow noreferrer noopener">
  <img src="https://img.shields.io/badge/Node.js-18.18.0%2B-green.svg?logo=node.js&color=339933&style=flat-rounded" alt="Node.js">
</a>
<a href="https://typescriptlang.org" target="_blank" rel="nofollow noreferrer noopener">
  <img src="https://img.shields.io/badge/TypeScript-5.9.0%2B-green.svg?logo=typescript&color=3178C6&style=flat-rounded" alt="TypeScriot">
</a>
<a href="https://github.com/rzl-zone/ts-types-plus/blob/main/CONTRIBUTING.md" target="_blank" rel="nofollow noreferrer noopener">
  <img src="https://img.shields.io/badge/PRs-Welcome-brightgreen.svg?color=28A745" alt="PRs Welcome">
</a>
<a href="https://github.com/rzl-zone/ts-types-plus/blob/main/LICENSE.md" target="_blank" rel="nofollow noreferrer noopener">
  <img src="https://img.shields.io/badge/License-MIT-blue.svg?color=3DA639" alt="GitHub license">
</a>
<a href="https://github.com/rzl-zone/ts-types-plus" target="_blank" rel="nofollow noreferrer noopener">
  <img src="https://img.shields.io/badge/Repo-on%20GitHub-181717?logo=github" alt="GitHub">
</a>
<a href="https://github.com/orgs/rzl-zone/repositories" target="_blank" rel="nofollow noreferrer noopener">
  <img src="https://img.shields.io/badge/Org-rzl--zone-24292e?logo=github&style=flat-rounded" alt="Repo on GitHub">
</a>
</p>

</div>

---
 
<h2 id="table-of-contents">📚 <strong>Table of Contents</strong></h2>

- 💻 [Requirements](#requirements)
- ⚙️ [Installation](#installation)
- ✨ [Features](#features)
- 💎 [Detailed Features](#detailed-features)
  - [Full documentation](#detailed-features--full-documentation)
  - [Hint Autocomplete](#detailed-features--hint-autocomplete-setup)
- 🔥 [Usage](#usage)
- ❤️ [Sponsor](#sponsor-this-package)
- 📜 [Changelog](#changelog)
- 🤝 [Contributing](#contributing)
- 🔒 [Security](#security)
- 🙌 [Credits](#credits)
- 📄 [License](#license)

---

<h2 id="requirements">💻 <strong>Requirements</strong></h2>

- **Node.js `≥18.18.0`**  
  This package uses modern TypeScript features, so Node.js 18.18.0 or higher is required.

- **Supported environments:**
  - ✅ Node.js (18.18.0+).  
  - ✅ TypeScript (5.9.0+).  
  - ✅ Modern browsers (via bundlers like Webpack / Vite).  

- **Recommended minimum tsconfig settings for full TypeScript support:**
  - `"strict": true`
  - `"target": "es2022"`
  - `"module": "es2022"`

> ℹ️ Note: If you’re using TypeScript and compiling from source, make sure your `tsconfig.json` minimum supports `"target": "es2022"` and `"module": "es2022"` or higher also set `"strict": true` for full compatibility. Lower targets or strict is false, may cause type issues (like `any`).



---

<h2 id="installation">⚙️ <strong>Installation</strong></h2>

#### *With NPM*

```bash
npm install @rzl-zone/ts-types-plus@latest
```

#### *With Yarn*

```bash
yarn add @rzl-zone/ts-types-plus@latest
```

#### *With PNPM*

```bash
pnpm add @rzl-zone/ts-types-plus@latest
```

---

<h2 id="features">✨ <strong>Features</strong></h2>

- 📝 Written in **TypeScript** — fully typed & type-safe.  
- ⚡ Lightweight & easy to include in projects.  
- 📦 Compatible with **Node.js** & modern browsers (via bundlers).  
- ❤️ Designed for maintainable and readable code.  
- 🧩 Contains useful TypeScript types like `OmitStrict`, `PartialOnly`, etc.

---

<h2 id="detailed-features">💎 <strong>Detailed Features</strong></h2>

  <h3 id="detailed-features--full-documentation">
    <strong>
      Full documentation <a href="https://rzlzone.vercel.app/docs/ts-types-plus" target="_blank" rel="nofollow noreferrer noopener">Ts Types Plus</a> is 
        <strong>currently under construction 🏗️</strong>.
    </strong>
  </h3>

  #### For now, explore the examples or dive into the source — all utilities are documented via **TSDoc** and typed properly.
  
  ```ts
  import type { | } from "@rzl-zone/ts-types-plus";
  ```
  #### Place your cursor inside { } then press Ctrl+Space to see all available types with full TSDoc hints.
  ---
  <h3 id="detailed-features--hint-autocomplete-setup">
    <strong>
      Hint: Autocomplete Setup (Step by Step).
    </strong> 
  </h3>

  #### Make TypeScript & VSCode automatically provide autocomplete for `@rzl-zone/ts-types-plus` without needing triple-slash references in every file:

  - 1️⃣ **Install @rzl-zone/ts-types-plus.**

    - Make sure the package is installed:

      ```bash
      npm install @rzl-zone/ts-types-plus
      # or
      yarn add @rzl-zone/ts-types-plus
      # or
      pnpm add @rzl-zone/ts-types-plus
      ```

  - 2️⃣ **Create a types folder.**

    - Inside your project root, make a folder called `types`:

      ```pgsql
      project-root/
        ├─ src/
        ├─ types/
        │  └─ index.d.ts
        └─ tsconfig.json 
      ```

  - 3️⃣ **Add the global reference file.**

    - Create `types/index.d.ts` with this content:

      ```ts
      /// <reference types="@rzl-zone/ts-types-plus" />
      ```

      - This tells TypeScript to include the types from `@rzl-zone/ts-types-plus` globally.
      - You can add more references here if needed, for example:

      ```ts
      /// <reference types="@rzl-zone/ts-types-plus" /> 

      // eg more references (if needed):
      /// <reference types="node" />
      /// <reference types="react" />
      ```

  - 4️⃣ **Update tsconfig.json.**

    - Make sure not to override "types" (or leave it empty) so TypeScript automatically picks up your types folder:

      ```jsonc
      // tsconfig.json
      {
        "compilerOptions": { 
          "strict": true,
          "typeRoots": ["./types", "./node_modules/@types"],
          // other your config...
        },
        "include": ["src", "types"],
        // other your config...
      }
      ```
      - `typeRoots` tells TS where to look for global type definitions.
      - The `types` folder comes first, so your references override or add to the default `@types` packages.
    
  #### **Now, all types from `@rzl-zone/ts-types-plus` are globally available, and you don’t need `"types": ["@rzl-zone/ts-types-plus"]` in tsconfig.json.**
---

<h2 id="usage">🔥 <strong>Usage</strong></h2>

### **Easy to use, just import on your code base.**

```ts
import type { OmitStrict } from "@rzl-zone/ts-types-plus";

type OtherType = {
  includeProps: string;
  omittingProps: string;
}

// Fully strict TS omit that requires the keys to exist in target
type MyType = OmitStrict<OtherType, "omittingProps">;
// ➔ MyType = { includeProps: string; }
```

---

<h2 id="sponsor-this-package">❤️ <strong>Sponsor this package</strong></h2>

**Help support development:**  
***[👉 Become a sponsor](https://github.com/sponsors/rzl-app).***

---

<h2 id="changelog">📝 <strong>Changelog</strong></h2>

**See [CHANGELOG](CHANGELOG.md).**

---

<h2 id="contributing">🤝 <strong>Contributing</strong></h2>

**See [CONTRIBUTING](CONTRIBUTING.md).**

---

<h2 id="security">🔒 <strong>Security</strong></h2>

**Please report issues to [rzlzone.dev@gmail.com](mailto:rzlzone.dev@gmail.com).**

---

<h2 id="credits">🙌 <strong>Credits</strong></h2>

**- [Rzl App](https://github.com/rzl-app).**  
**- [All Contributors](../../contributors).**

---

<h2 id="license">📜 <strong>License</strong></h2>

**The MIT License (MIT).**  
*Please see **[License File](LICENSE.md)** for more information.*

---

✅ **Enjoy using `@rzl-zone/ts-types-plus`?**  
*Star this repo [⭐](https://github.com/rzl-zone/ts-types-plus) and share it with other TypeScript developers!*

---
