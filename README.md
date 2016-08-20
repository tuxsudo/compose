# Compose

Compose functions.

```
import compose from '@tuxsudo/compose';

const add1 = (n) => n + 1;
const half = (n) => n / 2;
const square = (n) => n * n;

const math = compose(square, half, add1);
math(9); // 25
```
