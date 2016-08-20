import compose from './index.js';

import test from 'tape';

const add1 = (n) => n + 1;
const half = (n) => n/2;
const square = (n) => n*n;


test("compose", (t) => {
    t.equal(
        compose(square, half, add1)(9),
        25,
        "it composes functions and executes right-to-left"
    );

    t.end();
})
