# Description

**_Given_** _an array of integers_ , **_Find_** **_the maximum product_** _obtained from multiplying 2 adjacent numbers in the array_.

---

# Notes

- **_Array/list_** size is _at least 2_.
- **_Array/list_** numbers could be a _mixture of positives, negatives also zeroes_ .

---

# Input >> Output Examples

```js
adjacentElementsProduct([1, 2, 3]); ==> return 6
```

## **_Explanation_**:

- **_The maximum product_** _obtained from multiplying_ `2 * 3 = 6`, and **_they're adjacent numbers in the array_**.

---

```cpp
adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50
```

## **_Explanation_**:

**_Max product_** obtained _from multiplying_ `5 * 10 = 50` .

---

```cpp
adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])  ==>  return -14
```

## **_Explanation_**:

- **_The maximum product_** _obtained from multiplying_ `-2 * 7 = -14`, and **_they're adjacent numbers in the array_**.
