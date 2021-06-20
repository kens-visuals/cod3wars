This time, we learn about two useful methods of Number objects: `toString()` and `toLocaleString()`. The basic usage of the two methods is to convert a number into a string, look at this:

```javascript
let num = 111;

let a = num.toString(),
  b = num.toLocaleString(),
  c = num + "";

console.log([a, b, c]); // put them to an array, we can see the quotes
// output: [ '111', '111', '111' ]
```

We can see, if you just want to translate a number into a string representation, in the general case the results obtained in these ways is the same. I love to use the last one, because I'm lazy ;-)

But these two methods have other uses as well.

When used, `toLocaleString()` converted a number to a string, the results obtained are in the order of the local numeric format(I don't have this experience, it is always the same as toString() in my here).

And toString() of Number object has a more special usage: According to the base output different strings.

```javascript
NumberObject.toString(radix);
```

`radix` is optional parameter. If ignored it, the output will be the default decimal. If not, like this:

```javascript
let num = 111;

let a = num.toString(2),
    b = num.toString(8),
    c = num.toString(16),

console.log([a,b,c])
//output: [ '1101111', '157', '6f' ]

```

They are converted to binary, octal and hexadecimal.

Ok, lesson is over. let's us do some task with `Number .toString()`.

# Task

Coding in function `colorOf`. Function accepts 3 parameters: `r` `g` `b`. It means value of color red, green, and blue. The value range is 0-255.

Use `toString(16)` to convert numbers `r g b` to `hex` string form. At last, combine them to a web color code and return it.

The color code should start with "#" and then use 2 characters per color.

For example:

```
colorOf(255,0,0) should return "#ff0000"
colorOf(0,111,0) should return "#006f00"
colorOf(1, 2 ,3) should return "#010203"
```
