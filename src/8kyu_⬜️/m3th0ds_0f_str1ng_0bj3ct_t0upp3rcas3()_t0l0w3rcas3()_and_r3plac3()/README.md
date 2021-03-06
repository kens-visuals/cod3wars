# Description

This time we learn three string methods used to change the contents of the string:`toUpperCase()` `toLowerCase()` and `replace()`. Their usage:

```javascript
stringObject.toUpperCase();
stringObject.toLowerCase();
stringObject.replace(substring / regexp, replacement);
```

`toUpperCase()` and `toLowerCase()` usage is very simple. No parameters accepted. It can convert all the characters in the string to uppercase or lowercase.

Like so:

```javascript
const str = "My name is John";
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// output:
MY NAME IS JOHN
my name is john
```

The following is a classic usage. Capitalize the first letter of a sentence:

```javascript
const str = "this is an example.";
const result = str[0].toUpperCase() + str.slice(1);
console.log(result);

// output:
This is an example.
```

The example below is to capitalize the first letter of all the words in the sentence. We used the `split()` and `join()` that we learned last time.

```javascript
const str = "this is an example.";
const words = str.split(" ");
for (let i = 0; i < words.length; i++){
  words[i] = words[i][0].toUpperCase() + words[i].slice(1);
}
console.log(words.join(" "));

// output:
This Is An Example.
```

It seems a bit complicated. Let's learn new method to improve it.

`replace()` can replace the text specified(parameter 1) in the string with parameter 2. For example:

```javascript
const str = "this is an example.";
const result = str.replace("this","that");
console.log(result);

// output:
that is an example.
```

Let's use replace() to improve the example above (capitalized the first letter):

```javascript
const str = "this is an example.";
const words = str.split(" ");
for (let i = 0; i < words.length; i++){
  words[i] = words[i].replace(words[i][0], words[i][0].toUpperCase());
}
console.log(words.join(" "));

// output:
This Is An Example.
```

If the parameter 1 of `replace()` is a regular expression, it will be more simple(We don't even need to split the string):

```javascript
const str = "this is an example.";
const result = str.replace(/\b\w/g, x => x.toUpperCase());
console.log(result);

// output:
This Is An Example.
```

This code uses a regular expression and an arrow function. This allows us to achieve a more powerful role in the code. All of these will be learning in the future lesson. We need to do now is to learn the basics.

Another point needs to pay attention: If `replace()` uses a regular expression as parameter 1, and all the characters that match the regular expression are replaced(The regular expression uses a global matching option g). If we use a string as a parameter 1, only the first match(from left to right) of the string is replaced.

Like so:

```javascript
const str = "example";
const result = str.replace("e","@");
console.log(result);

// output:
@xample
```

As you can see, the second "e" will not be replaced.

Ok, lesson is over. let's do some task.

# Task

Coding in function `alienLanguage`, function accept 1 parameter:`str`. `str` is a sentence.

We translate the sentence into an alien language according to the following rules:

Each word in the sentence is separated by spaces. The last letter of each word in the sentence turns to lowercase, and the other letters are capitalized. Looks very strange? Because this is the form of alien language ;-)

For example:

```
alienLanguage("My name is John") should return "My NAMe Is JOHn"
alienLanguage("this is an example") should return "THIs Is An EXAMPLe"
alienLanguage("Hello World") should return "HELLo WORLd"
```

A small hint: The first conversion of the entire string will make the code easier
