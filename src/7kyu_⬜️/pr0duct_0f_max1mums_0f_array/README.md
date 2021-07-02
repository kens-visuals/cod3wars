# Description

**_Given_** an _array/list [] of integers_, **_Find the product of the k maximal_** numbers.

---

### Notes

- **_Array/list_** size is _at least 3_.
- **_Array/list's numbers_** _Will be_ **_mixture of positives, negatives and zeros_**
- **_Repetition_** of numbers in _the array/list could occur_.

---

### Input >> Output Examples

```js
maxProduct ({4, 3, 5}, 2) ==>  return (20)
```

#### _Explanation_:

- **_Since_** _the size (k) equal 2_, then **_the subsequence of size 2_** which gives* \*\*\_product of maxima*\*_ is `5 _ 4 = 20`

---

```js
maxProduct ({8, 10 , 9, 7}, 3) ==>  return (720)
```

#### _Explanation_:

- **_Since_** _the size (k) equal 3_, then **_the subsequence of size 3_** which gives* \*\*\_product of maxima*\*_ is `8 _ 9 \* 10 = 720`.

---

```js
maxProduct ({10, 8, 3, 2, 1, 4, 10}, 5) ==> return (9600)
```

#### _Explanation_:

- **_Since_** _the size (k) equal 5_, then **_the subsequence of size 5_** which gives* \*\*\_product of maxima*\*_ is `10 _ 10 _ 8 _ 4 \* 3 = 9600`.

---

```js
maxProduct ({-4, -27, -15, -6, -1}, 2) ==> return (4)
```

#### _Explanation_:

- **_Since_** _the size (k) equal 2_, then **_the subsequence of size 2_** which gives* \*\*\_product of maxima*\*_ is `-4 _ -1 = 4`.

---

```js
maxProduct ({10, 3, -1, -27} , 3)  return (-30)
```

#### _Explanation_:

- **_Since_** _the size (k) equal 3_, then **_the subsequence of size 3_** which gives* \*\*\_product of maxima*\*_ is `10 _ 3 \* -1 = -30`.
