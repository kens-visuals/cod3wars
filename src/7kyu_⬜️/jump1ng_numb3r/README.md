# Description

**_Jumping number_** is the number that _All adjacent digits in it differ by 1_.

---

# Task

**_Given_** a number, **_find if it is Jumping or not_**.

---

# Warm-up (Highly recommended)

# [Playing With Numbers Series](https://www.codewars.com/collections/playing-with-numbers)

---

# Notes

- **_Number_** _passed is always_ **_Positive_** .
- **_Return_** _the result as_ **_String_** .
- **_The difference between_** _‘9’ and ‘0’_ is **_not considered as 1_** .
- **_All single digit numbers_** are considered as **_Jumping numbers_**.

---

# Input >> Output Examples

```js
jumpingNumber(9) ==> return "Jumping!!"
```

## **_Explanation_**:

- It's **_single-digit number_**

---

```js
jumpingNumber(79) ==> return "Not!!"
```

## **_Explanation_**:

- _Adjacent digits_ **_don't differ by 1_**

---

```js
jumpingNumber(23) ==> return "Jumping!!"
```

## **_Explanation_**:

- _Adjacent digits_ **_differ by 1_**

---

```js
jumpingNumber(556847) ==> return "Not!!"
```

## **_Explanation_**:

- _Adjacent digits_ **_don't differ by 1_**

---

```js
jumpingNumber(4343456) ==> return "Jumping!!"
```

## **_Explanation_**:

- _Adjacent digits_ **_differ by 1_**

---

```js
jumpingNumber(89098) ==> return "Not!!"
```

## **_Explanation_**:

- _Adjacent digits_ **_don't differ by 1_**

---

```js
jumpingNumber(32) ==> return "Jumping!!"
```

## **_Explanation_**:

- _Adjacent digits_ **_differ by 1_**
