# Partify

Partify is a library for generating particle effect when clicking in a selected area.

## Install

```shell
npm install partify
```

## Usage

```js
import Partify from "partify";

const partify = new Partify("#container", "🌟");
partify.init();
```

## Options

| Option             | Type               | Default   | Description                                                      |
| ------------------ | ------------------ | --------- | ---------------------------------------------------------------- |
| `limit`            | `number`           | `35`      | Maximum number of the particle that will appear.                 |
| `velocityX`        | `[number, number]` | `[0, 30]` | Range of particle X axis speed.                                  |
| `velocityY`        | `[number, number]` | `[0, 10]` | Range of particle Y axis speed.                                  |
| `fadeOutAnimation` | `boolean`          | `false`   | Apply fade out animation when the particle is going to disappear |

## References

Inspired from [rainbow.me](https://rainbow.me/)
