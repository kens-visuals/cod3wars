# Description

A **number** is called **_Automorphic number_** if and only if _its square ends in the same digits as the number itself_.

---

# Task

**_Given_** a **number,** _determine if it Automorphic or not_ .

---

# Warm-up (Highly recommended)

# [Playing With Numbers Series](https://www.codewars.com/collections/playing-with-numbers)

---

# Notes

- The **_number_** passed to the function is **_positive_**

---

# Input >> Output Examples

```
autoMorphic (25) -->> return "Automorphic"
```

## **_Explanation_**:

- `25` squared is `625` , **_Ends with the same number's digits, which are 25_** .

---

```
autoMorphic (13) -->> return "Not!!"
```

## **_Explanation_**:

- `13` squared is `169` , **_Not ending with the same number's digits which are 69_** .

---

```
autoMorphic (76) -->> return "Automorphic"
```

## **_Explanation_**:

- `76` squared is `5776` , **_Ends with the same number's digits which are 76_** .

---

```
autoMorphic (225) -->> return "Not!!"
```

## **_Explanation_**:

- `225` squared is `50625` , **_Not ending with the same number's digits which are 225_** .

---

```
autoMorphic (625) -->> return "Automorphic"
```

## **_Explanation_**:

- `625` squared is `390625` , **_Ends with the same number's digits which are 625_** .

---

```
autoMorphic (1) -->> return "Automorphic"
```

## **_Explanation_**:

- `1` squared is `1` , **_Ends with the same number's digits which are 1_** .

---

```
autoMorphic (6) -->> return "Automorphic"
```

## **_Explanation_**:

- `6` squared is `36` , **_Ends with the same number's digits which are 6_**
