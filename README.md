<h1 align="center">
  key-for-id
</h1>

<p align="center">
  <a href="https://travis-ci.org/jxshco/key-for-id"><img src="https://travis-ci.org/jxshco/key-for-id.svg?branch=master" alt="travis"></a>
  <a href="https://www.npmjs.com/package/key-for-id"><img src="https://img.shields.io/npm/v/key-for-id.svg" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/key-for-id"><img src="https://img.shields.io/npm/dt/key-for-id.svg" alt="npm downloads"></a>
  <a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="Standard - JavaScript Style Guide"></a>
</p>

<p align="center">Find the key for a specific value in an array</p>

## Table of Contents

- Quick start
  - [Install](#install)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Licence](#usage)

## Install

Add key-for-id to your project using npm or yarn.

Install (NPM):
```bash
$ npm install key-for-id --save
```

Install (Yarn):
```bash
$ yarn add key-for-id
```

## Usage

Import KeyForID into Your Project

```js
import KeyForID from 'key-for-id'
```

Pass An Array as the first parameter, the key as the second and the value your searching for as the third.
```js
let people = [{name: 'Josh'}, {name: 'Steven'}, {name: 'Sarah'}]
let index = KeyForID(people, 'name', 'Sarah') // 2

```

## Contributing

Pull requests for new features, bug fixes, and suggestions are welcome!

## License

[MIT](https://github.com/jxshco/key-for-id/blob/master/LICENSE)
