# Description

Your task is to write a higher order function for chaining together a list of unary functions. In other words, it should return a function that does a left fold on the given functions.

```js
chained([a, b, c, d])(input);
```

Should yield the same result as

```js
d(c(b(a(input))));
```
