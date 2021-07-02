# Description

A **_Tidy number_** _is a number whose_ **_digits are in non-decreasing order_**.

---

# Task

**_Given_** a number, **_find if it is Tidy or not_**.

---

# Notes

- **_Number_** _passed is always_ **_Positive_**.
- **_Return_** _the result as_ a **_Boolean_**

---

# Input >> Output Examples

```js
tidyNumber (12) ==> return (true)
```

## **_Explanation_**:

**_The number's digits_** `{ 1 , 2 }` are _in non-Decreasing Order_ (i.e) _1 <= 2_ .

---

```js
tidyNumber (32) ==> return (false)
```

## **_Explanation_**:

**_The Number's Digits_** `{ 3, 2}` are **_not in non-Decreasing Order_** (i.e) _3 > 2_ .

---

```js
tidyNumber (1024) ==> return (false)
```

## **_Explanation_**:

**_The Number's Digits_** `{1 , 0, 2, 4}` are **_not in non-Decreasing Order_** as _0 <= 1_ .

---

```js
tidyNumber (13579) ==> return (true)
```

## **_Explanation_**:

**_The number's digits_** `{1 , 3, 5, 7, 9}` are _in non-Decreasing Order_ .

---

```js
tidyNumber (2335) ==> return (true)
```

## **_Explanation_**:

**_The number's digits_** `{2 , 3, 3, 5}` are _in non-Decreasing Order_ , **_Note_** _3 ⇐ 3_
