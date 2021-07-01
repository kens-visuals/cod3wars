# Description

_Now that the competition gets tough it will_ **_Sort out the men from the boys_** .

**_Men_** are the **_Even numbers_** and **_Boys_** are the **_odd_**

---

# Task

**_Given_** an _array/list [] of n integers_ , **_Separate_** _The even numbers from the odds_ , or **_Separate_** **_the men from the boys_**

---

# Notes

- **_Return_** _an array/list where_ **_Even numbers_** **_come first then odds_**
- Since , **_Men are stronger than Boys_** , _Then_ **_Even numbers_** in **_ascending order_** While **_odds in descending_** .
- **_Array/list_** size is _at least \*\*\_4_\*\*\_ .
- **_Array/list_** numbers could be a _mixture of positives , negatives_ .
- **_Have no fear_** , _It is guaranteed that no Zeroes will exists_ .
- **_Repetition_** of numbers in _the array/list could occur_ , So **_(duplications are not included when separating)_**.

---

# Input >> Output Examples:

```js
menFromBoys ({7, 3 , 14 , 17}) ==> return ({14, 17, 7, 3})
```

## **_Explanation_**:

**_Since_** , `{ 14 }` is the **_even number_** here , So it **_came first_** , **_then_** _the odds in descending order_ `{17 , 7 , 3}` .

---

```js
menFromBoys ({-94, -99 , -100 , -99 , -96 , -99 }) ==> return ({-100 , -96 , -94 , -99})
```

## **_Explanation_**:

- **_Since_** , `{ -100, -96 , -94 }` is the **_even numbers_** here , So it **_came first_** in _ascending order _, **_then_** _the odds in descending order_ `{ -99 }`
- **_Since_** , **_(Duplications are not included when separating)_** , _then_ you can see **_only one (-99)_** _was appeared in the final array/list_ .

---

```js
menFromBoys ({49 , 818 , -282 , 900 , 928 , 281 , -282 , -1 }) ==> return ({-282 , 818 , 900 , 928 , 281 , 49 , -1})
```

## **_Explanation_**:

- **_Since_** , `{-282 , 818 , 900 , 928 }` is the **_even numbers_** here , So it **_came first_** in _ascending order_ , **_then_** _the odds in descending order_ `{ 281 , 49 , -1 }`
- **_Since_** , **_(Duplications are not included when separating)_** , _then_ you can see **_only one (-282)_** _was appeared in the final array/list_ .
