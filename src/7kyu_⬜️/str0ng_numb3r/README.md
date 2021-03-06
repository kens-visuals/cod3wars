# Description

**_Strong number_** is the number that _the sum of the factorial of its digits is equal to the number itself_.

## **_For example_**: **_145_**, since

```js
1! + 4! + 5! = 1 + 24 + 120 = 145
```

So, **_145_** is a **_Strong number_**.

---

# Task

**_Given_** a number, **_find if it is Strong or not_**.

---

# Notes

- **_Number_** _passed is always_ **_Positive_**.
- **_Return_** _the result as_ **_String_**

---

# Input >> Output Examples

```
strong_num(1) ==> return "STRONG!!!!"

```

## **_Explanation_**:

Since , **_the sum of its digits' factorial of (1) is equal to number itself (1)_** , **_Then_** its a **_Strong_** .

---

```js
strong_num(123) ==> return "Not Strong !!"
```

## **_Explanation_**:

Since **_the sum of its digits' factorial of 1! + 2! + 3! = 9 is not equal to number itself (123)_** , **_Then_** it's **_Not Strong_** .

---

```js
strong_num(2)  ==>  return "STRONG!!!!"
```

## **_Explanation_**:

Since **_the sum of its digits' factorial of 2! = 2 is equal to number itself (2)_** , **_Then_** its a **_Strong_** .

---

```js
strong_num(150) ==> return "Not Strong !!"
```

## **_Explanation_**:

Since **_the sum of its digits' factorial of 1! + 5! + 0! = 122 is not equal to number itself (150)_**, **_Then_** it's **_Not Strong_** .
