# Description

**_Balanced number_** is the number that \* **_The sum of_** all digits to the **_left of the middle_** digit(s) and the sum of all digits to the **_right of the middle_** digit(s) are **_equal_\***.

---

# Task

**_Given_** a number, **_Find if it is balanced or not_** .

---

# Notes

- _If_ the **_number has an odd number of digits_** then **_there is only one middle digit_**, e.g. `92645` has middle digit `6`; **_otherwise_**, there are **_two middle digits_** , e.g. `1301` has middle digits `3` and `0`
- **_The middle digit(s)_** should **_not_** be considered when _determining whether a number is balanced or not_, **_e.g_** `413023` is a **_balanced number because the left sum and right sum are both_** `5`.
- **_Number_** _passed is always_ **_Positive_** .
- **_Return_** _the result as_ **_String_**

---

# Input >> Output Examples

```js
(balanced-num 7) ==> return "Balanced"
```

## **_Explanation_**:

- **_Since_** , **_The sum of_** _all digits to the_ **_left of the middle_** digit (0)
- and **_the sum of_** _all digits to the_ **_right of the middle_** digit (0) are **_equal_** , **_then_** _It's_ **_Balanced_**

---

```js
(balanced-num 295591) ==> return "Not Balanced"
```

## **_Explanation_**:

- **_Since_** , **_The sum of_** _all digits to the_ **_left of the middle_** digits (11)
- and **_the sum of_** _all digits to the_ **_right of the middle_** digits (10) are **_Not equal_** , **_then_** _It's_ **_Not Balanced_**
- **_Note_** : **_The middle digit(s)_** _are_ **_55_** .

---

```js
(balanced-num 959) ==> return "Balanced"
```

## **_Explanation_**:

- **_Since_** , **_The sum of_** _all digits to the_ **_left of the middle_** digits (9)
- and **_the sum of_** _all digits to the_ **_right of the middle_** digits (9) are **_equal_** , **_then_** _It's_ **_Balanced_**
- **_Note_** : **_The middle digit_** _is_ **_5_** .

---

```js
(balanced-num 27102983) ==> return "Not Balanced"
```

## **_Explanation_**:

- **_Since_** , **_The sum of_** _all digits to the_ **_left of the middle_** digits (10)
- and **_the sum of_** _all digits to the_ **_right of the middle_** digits (20) are **_Not equal_** , **_then_** _It's_ **_Not Balanced_**
- **_Note_** : **_The middle digit(s)_** _are_ **_02_** .
