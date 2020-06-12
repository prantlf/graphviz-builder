# GraphViz Source Script Builder

[![npm](https://img.shields.io/npm/v/graphviz-builder)](https://www.npmjs.com/package/graphviz-builder#top)
[![Build Status](https://travis-ci.org/prantlf/graphviz-builder.svg?branch=master)](https://travis-ci.org/prantlf/graphviz-builder)
[![codecov](https://codecov.io/gh/prantlf/graphviz-builder/branch/master/graph/badge.svg)](https://codecov.io/gh/prantlf/graphviz-builder)
[![Dependency Status](https://david-dm.org/prantlf/graphviz-builder.svg)](https://david-dm.org/prantlf/graphviz-builder)
[![devDependency Status](https://david-dm.org/prantlf/graphviz-builder/dev-status.svg)](https://david-dm.org/prantlf/graphviz-builder#info=devDependencies)
[![All Contributors](https://img.shields.io/badge/all_contributors-10-orange.svg?style=flat-square)](#contributors)

Generates the source graph script as input for Graphviz (`dot`), which in turn can generate the graph image.

This project originated as a fork of [node-graphviz] to offer an easy integration to web browsers and JavaScript and TypeScript environments like [Node.js] and [Deno]. Features:

* UMD build output for web browsers and ESM build output for environments supporting ES6 modules.
* TypeScript type declarations (typings).
* No dependencies, including [Node.js] bult-in modules.
* [Faster](perf/README.md) implementation of attributes using `Map`.
* [API] compatibility with [node-graphviz], except for the removed graph image generation.

Related tools:

* [graphviz-cli] - command-line tool for generating graph images from the source scripts
* [graphviz-webcomponent] - WebComponent for web browsers to display graph images from the source scripts in HTML pages on-the-fly

## Synopsis

```js
var graphvizBuilder = require('graphviz-builder');

// Create digraph G
var g = graphvizBuilder.digraph("G");

// Add node (ID: Hello)
var n1 = g.addNode( "Hello", {"color" : "blue"} );
n1.set( "style", "filled" );

// Add node (ID: World)
g.addNode( "World" );

// Add edge between the two nodes
var e = g.addEdge( n1, "World" );
e.set( "color", "red" );

// Print the dot script
console.log( g.to_dot() );
```

## Installation

Make sure that you have installed [Node.js]. Use your favourite package manager ([NPM], [Yarn] or [PNPM]) to add the `graphviz-builder` module to your project. Add `-D` on the command line if you use a bundler:

```
npm i graphviz-builder
yarn add graphviz-builder
pnpm i graphviz-builder
```

If you write a plain HTML page, insert the `graphviz-builder` script pointing wither to CDN or to the local filesystem:

```html
<script src=https://unpkg.com/graphviz-builder@0.0.1/dist/index.min.js></script>
<script src=node_modules/graphviz-builder/dist/index.min.js></script>
```

## Usage

If you write source code for [Node.js] or for a web application bundler, you can refer to the locally installed `graphviz-builder` module:

```js
import { digraph } from 'graphviz-builder';
// Create digraph G
const g = digraph('G');
// Add node (ID: Hello)
const n1 = g.addNode('Hello', { color: 'blue' });
n1.set('style', 'filled');
// Add node (ID: World)
g.addNode('World');
// Add edge between the two nodes
const e = g.addEdge(n1, 'World');
e.set('color', 'red');
// Print the dot script
console.log(g.to_dot());
```

If you write source code for [Deno], refer to the full URL of `graphviz-builder`:

```js
import { digraph } from 'https://unpkg.com/graphviz-builder@0.0.1/dist/index.min.mjs';
// ...the same code from the Node.js example above
```

If you write a plain HTML page, insert the `graphviz-builder` script pointing wither to CDN or to the local filesystem. The AMD module name (and the windows global) is `graphvizBuilder`.:

```html
<script src=https://unpkg.com/graphviz-builder@0.0.1/dist/index.min.js></script>
<script src=node_modules/graphviz-builder/dist/index.min.js></script>
<script>
const { digraph } = window.graphvizBuilder
// ...the same code from the Node.js example above
</script>
```

See the complete [API] description for more information.

## License

Copyright (c) 2020 Ferdinand Prantl
Copyright (c) 2010-2019 Gregoire Lejeune

Licensed under the MIT license.

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://lejeun.es"><img src="https://avatars1.githubusercontent.com/u/15168?v=4" width="100px;" alt=""/><br /><sub><b>Gregoire Lejeune</b></sub></a><br /><a href="https://github.com/prantlf/graphviz-builder/commits?author=glejeune" title="Code">💻</a> <a href="https://github.com/prantlf/graphviz-builder/commits?author=glejeune" title="Documentation">📖</a> <a href="#example-glejeune" title="Examples">💡</a></td>
    <td align="center"><a href="https://tinysubversions.com"><img src="https://avatars3.githubusercontent.com/u/266454?v=4" width="100px;" alt=""/><br /><sub><b>Darius Kazemi</b></sub></a><br /><a href="https://github.com/prantlf/graphviz-builder/commits?author=dariusk" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/SebastienElet"><img src="https://avatars0.githubusercontent.com/u/541937?v=4" width="100px;" alt=""/><br /><sub><b>Sébastien ELET</b></sub></a><br /><a href="https://github.com/prantlf/graphviz-builder/commits?author=SebastienElet" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/papandreou"><img src="https://avatars3.githubusercontent.com/u/373545?v=4" width="100px;" alt=""/><br /><sub><b>Andreas Lind</b></sub></a><br /><a href="https://github.com/prantlf/graphviz-builder/commits?author=papandreou" title="Code">💻</a></td>
    <td align="center"><a href="http://www.blakmatrix.com"><img src="https://avatars3.githubusercontent.com/u/91209?v=4" width="100px;" alt=""/><br /><sub><b>Farrin Reid</b></sub></a><br /><a href="https://github.com/prantlf/graphviz-builder/commits?author=blakmatrix" title="Code">💻</a></td>
    <td align="center"><a href="https://pahen.se"><img src="https://avatars3.githubusercontent.com/u/353888?v=4" width="100px;" alt=""/><br /><sub><b>Patrik Henningsson</b></sub></a><br /><a href="https://github.com/prantlf/graphviz-builder/commits?author=pahen" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/pooriaazimi"><img src="https://avatars2.githubusercontent.com/u/814637?v=4" width="100px;" alt=""/><br /><sub><b>Pooria Azimi</b></sub></a><br /><a href="https://github.com/prantlf/graphviz-builder/commits?author=pooriaazimi" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://twitter.com/BridgeAR"><img src="https://avatars2.githubusercontent.com/u/8822573?v=4" width="100px;" alt=""/><br /><sub><b>Ruben Bridgewater</b></sub></a><br /><a href="https://github.com/prantlf/graphviz-builder/commits?author=BridgeAR" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/mathieuravaux"><img src="https://avatars1.githubusercontent.com/u/38495?v=4" width="100px;" alt=""/><br /><sub><b>Mathieu Ravaux</b></sub></a><br /><a href="https://github.com/prantlf/graphviz-builder/commits?author=mathieuravaux" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/prantlf"><img src="https://avatars3.githubusercontent.com/u/733193?s=460&v=4" width="100px;" alt=""/><br /><sub><b>Ferdinand Prantl</b></sub></a><br /><a href="https://github.com/prantlf/graphviz-builder/commits?author=prantlf" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors] specification. Contributions of any kind welcome!

[all-contributors]: https://github.com/kentcdodds/all-contributors#readme
[node-graphviz]: http://github.com/glejeune/node-graphviz#readme
[graphviz-cli]: https://github.com/prantlf/graphviz-cli#readme
[graphviz-webcomponent]: https://github.com/prantlf/graphviz-webcomponent#readme
[Node.js]: https://nodejs.org/
[Deno]: https://deno.land/
[NPM]: https://docs.npmjs.com/cli/npm
[Yarn]: https://classic.yarnpkg.com/docs/cli/
[PNPM]: https://pnpm.js.org/pnpm-cli
[API]: API.md
