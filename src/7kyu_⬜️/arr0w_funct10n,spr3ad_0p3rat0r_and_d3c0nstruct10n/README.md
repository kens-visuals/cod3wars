# Description
OK, my warriors! Now that you beat the big BOSS, you can unlock three new skills. (Does it sound like we're playing an RPG? ;-)

## The Arrow Function (JS only)

The first skill is the arrow function. Let's look at some examples to see how it works:

```javascript
//a normal function:
function plus(a,b){
  return a + b;
}

//or we can write like this:
const plus = function(a,b){
  return a+b;
}

//now, wo can use arrow function write it:
const plus = (a,b) => a + b;
```

As you can see, its syntax is:

```javascript
(parameters) => {statement} or expression
```

If only one parameter exists on the left side of the arrow, the bracket can be omitted. If only one expression exists on the right side of the arrow, the curly braces can also be omitted. The example below shows a function with the () and {} omitted.

```javascript
const add = x => x + 1;
```

If the right side of the arrow is a complex statement, you must use curly braces:

```javascript
const pushElement = (arr, el1, el2) => {
  arr.push(el1);
  arr.push(el2);
  return arr;
}
console.log( pushElement([1],2,3) );

// output:
[ 1, 2, 3 ]
```

So far, our examples have used function assignment. However, an arrow function can also be used as a parameter to a function call, as well. When used as a parameter, the arrow function does not require a name. Let's rewrite the string.replace() example we saw from a previous training using our new skill:

```javascript
const str = "abababab";
console.log( str.replace(/a/g, x => x.toUpperCase()) );

// output:
AbAbAbAb
```

String.replace takes a regular expression and a function. The function is invoked on each substring matching the regex, and return the string replacement of that match. In this case, the arrow function takes the matched string as the parameter `x`, and returns the uppercased value of `x`.

In the soon to learn the arrayObject and its methods, there are many applications on the arrow function, which is the reason we first learn the arrow function. The arrow function has more complex usage and usage restrictions, but we don't need to learn to be so deep, so we only learn the contents of the above.

## The Spread Operator

The second skill is the `spread operator`. The spread operator allows an expression to be expanded in places where multiple arguments (for function calls) or multiple elements (for array literals) are expected.

It looks like this: ...obj. It can be used in three places:

1. In function calls:

```javascript
function plus(a,b,c,d,e){
  return a + b + c + d + e;
}
const arg1 = [1,2,3,4,5];
const arg2 = [2,3];
console.log(plus(...arg1));
console.log(plus(1,...arg2,4,5));

// output:
15
15
```

`...arg1` spreads all the elements in arg1 into individual parameters to plus(). In JavaScript, it's also possible to use the spread operator in the middle of a parameter list, as was done with `...arg2`.

2. Creating array literals (JS and Ruby):

```javascript
const a = [1,2,3]
const b = [...a,4,5]
console.log(b);

// output:
[ 1, 2, 3, 4, 5 ]
```

`...a` spreads out the array's elements, making them individual elements in b.

3. Used for `deconstruction`. destructuring is also a new member of ES6. It is the third skill we learn in this training.

First, let's look at a simple example of destructuring:

```javascript
const [a,b] = [1,2];   // the old method is const a = 1,b = 2;
console.log(a);
console.log(b);

// output:
1
2
```

Destructuring allows us to assign variables in a sentence-like form. Here's a slightly more complicated example:

```javascript
// Exchange the values of the two variables
const [a,b] = [1,2]

// classic method:
let c = a;    // defined c to help us
a = b;
b = c;

// deconstruction method:
let [a,b] = [1,2];
[b,a] = [a,b];
console.log(a);
console.log(b);

// output:
2
1
```

With destructuring, we don't need a temporary variable to help us exchange the two values.

You can use the spread operator for destructuring like this:

```javascript
const [a, ...b] = [1,2,3,4,5];
console.log(a);
console.log(b);

// output:
1
[ 2, 3, 4, 5 ]
```

Please note: the spread operator must be the last variable: 
`[...a,b] = [1,2,3,4,5]` does not work.

`a` was assigned to the first element of the array, and`b`was initialized with the remaining elements in the array.

Note: If you see an ellipse ... in the argument list in a function declaration, it is not a spread operator, it is a structure called rest parameters. The rest parameter syntax allows us to represent an indefinite number of arguments as an array, like this:

```javascript
function plus(...num){
  let rs = 0
  for (const x of num) rs += x;
  return rs;
}
console.log(plus(1,2));
console.log(plus(3,4,5));

// output:
3
12
```

The rest parameter must be the last argument in the function definition argument list.

In the next example, we use a rest parameter to collect all the values passed to mul() after the first into an array. We then multiply each of them by the first parameter and return that array:

```javascript
function mul(a,...b){
  for (let i = 0; i < b.length; i++) b[i] *= a;
  return b;
}
console.log(mul(2,1,1,1));
console.log(mul(2,1,2,3,4));

// output:
[2,2,2]
[2,4,6,8]
```

Ok, the lesson is over. Did you get it all? Let's do a task, now.

# Task

Create a function `shuffleIt`. The function accepts two or more parameters. The first parameter arr is an array of numbers, followed by an arbitrary number of numeric arrays. Each numeric array contains two numbers, which are indices for elements in arr (the numbers will always be within bounds). For every such array, swap the elements. Try to use all your new skills: arrow functions, the spread operator, destructuring, and rest parameters.

Example:

```
shuffleIt([1,2,3,4,5],[1,2]) should return [1,3,2,4,5]
shuffleIt([1,2,3,4,5],[1,2],[3,4]) should return [1,3,2,5,4]
shuffleIt([1,2,3,4,5],[1,2],[3,4],[2,3]) should return [1,3,5,2,4]
```