# Description

**_Given_** an _array/list [] of integers_, **_find_** **_The maximum difference_** _between the successive elements in its sorted form_.

---

# Notes

- **_Array/list_** size is _at least 3_.
- **_Array/list's numbers_** Will be **mixture of positives and negatives also zeros\_**
- **_Repetition_** of numbers in _the array/list could occur_.
- **_The Maximum Gap_** is _computed Regardless the sign_.

---

# Input >> Output Examples

```js
maxGap ({13,10,5,2,9}) ==> return (4)
```

## **_Explanation_**:

- **_The Maximum Gap_** _after sorting the array is_ `4` , _The difference between_ `9 - 5 = 4`.

---

```js
maxGap ({-3,-27,-4,-2}) ==> return (23)
```

## **_Explanation_**:

- **_The Maximum Gap_** _after sorting the array is_ `23` _The difference between_ `|-4- (-27) | = 23`
- **_Note_** : _Regardless, the sign of negativity_.

---

```js
maxGap ({-7,-42,-809,-14,-12}) ==> return (767)
```

## **_Explanation_**:

- **_The Maximum Gap_** _after sorting the array is_ `767` , _The difference between_ `| -809- (-42) | = 767` .
- **_Note_** : _Regardless, the sign of negativity_.

---

```js
maxGap ({-54,37,0,64,640,0,-15}) //return (576)
```

## **_Explanation_**:

- **_The Maximum Gap_** _after sorting the array is_ `576`, _The difference between_ `| 64 - 640 | = 576`.
- **_Note_** : _Regardless, the sign of negativity_.
