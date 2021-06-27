# Description

**_Several people_** are standing in _a row divided into two teams_.  
The **_first person_** goes into **_team 1_**, **_the second_** goes into **_team 2_**, **_the third_** goes into **_team 1_**, and so on.

---

# Task

**_Given_** _an array of positive integers (the weights of the people)_, **_return_** _a new array/tuple of two integers_, **_where_** **_the first_** one is the **_total weight of team 1_**, and **_the second_** one is the **_total weight of team 2_**.

---

# Notes

- **_Array size_** is _at least 1_.
- **_All numbers_** will be **positive**.

---

# Input >> Output Examples

```cpp
rowWeights([13, 27, 49])  ==>  return (62, 27)
```

## **_Explanation_**:

**_The first element_** `62` is _the total weight of team 1_, and **_the second element_** `27` is _the total weight of team 2_.

---

```cpp
rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
```

## **_Explanation_**:

**_The first element_** `120` is _the total weight of team 1_, and **_the second element_** `140` is _the total weight of team 2_.

---

```cpp
rowWeights([80])  ==>  return (80, 0)
```

## **_Explanation_**:

**_The first element_** `80` is _the total weight of team 1_, and **_the second element_** `0` is _the total weight of team 2_.
