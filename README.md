<p align="center">
  <img alt="partic11e logo" height="70" src="./partic11e-banner.png" />
</p>

<p align="center">
  partic11e is a collection of easy-to-use utility and feature libraries for creating anything you want.
</p>

<h1 align="center">partic11e - exceptions<h1>

<p align="center">
  The exceptions module of the partic11e library provides a collection of commonly required exception for application development.
</p>

<p align="center">
  <!-- Project links -->
</p>

<p align="center">
  <sub>Built with ❤ by IntegerEleven and <a href="https://github.com/partic11e/exceptions/graphs/contributors">contributors</a></sub>
</p>

<p align="center">
  <!-- Badges -->
  <a href="CODE_OF_CONDUCT.md">
    <img alt="Contributor Covenant" src="https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg?style=flat-square" />
  </a>
  <a href="https://github.com/partic11e/exceptions/commits/main">
    <img alt="Last GitHub commit" src="https://img.shields.io/github/last-commit/partic11e/exceptions.svg?style=flat-square" />
  </a>
  <a href="https://github.com/partic11e/exceptions/releases">
    <img alt="GitHub release (latest SemVer)" src="https://img.shields.io/github/v/release/partic11e/exceptions?style=flat-square" />
  </a>
</p>

<!-- TOC -->

## Table of contents

- [Features](#features)
  - ...
- [Installation](#installation)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Features

[(to top)](#table-of-contents)

- ...

## Installation

[(to top)](#table-of-contents)

To install, you simply need to re-export the library features with your
`deps.ts` file.

```ts
export { TimeoutException } from "https://denopkg.com/partic11e/exceptions/mod.ts";
```

and then import them from your `deps.ts` file into the files they are needed.

```ts
import { TimeoutException } from "../deps.ts";
```

You can specify a specific release or branch in the re-export:

**Export from a specific release**\
`export { TimeoutException } from "https://denopkg.com/partic11e/exceptions@v0.1.0-alpha/mod.ts"`

**Export from a specific branch**\
`export { TimeoutException } from "https://denopkg.com/partic11e/exceptions@dev-fix-06145/mod.ts"`

**Export the latest release**\
`export { TimeoutException } from "https://denopkg.com/partic11e/exceptions@latest/mod.ts"`

> **Note that if no version is specified in the re-export, then it will pull
> from the main branch, which as we always release on a merge with the main.**

## Examples

[(to top)](#table-of-contents)

```ts
import { TimeoutException } from "../deps.ts";

const ex0 = new TimeoutException();
console.log(ex0.message); //  An operation timed out.

const ex1 = new TimeoutException({
  operationName: "FetchData"
  operationTimeout: 10,
  cause: ex0
});
console.log(ex1.message); //  The operation "operationName" timed out after operationTimeout seconds.
console.log(ex1.data);    //  { operationName, operationTimeout}
console.log(ex1.cause);   //  ex0

const ex2 = new TimeoutException("An operation took too long...");
console.log(ex2.message); //  An operation took too long...

const ex3 = new TimeoutException("An operation took too long...", {  
  operationName: "FetchData"
  operationTimeout: 10
});
console.log(ex3.message); //  An operation took too long...
console.log(ex3.data);    //  { operationName, operationTimeout}
```

## Contributing

[(to top)](#table-of-contents)

Contributions are welcome! Take a look at our contributing guidelines to get
started.

## License

[(to top)](#table-of-contents)

The MIT License (MIT) 2022 &middot; IntegerEleven. Refer to [LICENSE](./LICENSE)
for details.
