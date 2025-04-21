---
title: "Table Structure"
date: 2023-11-22T19:30:55+02:00
---

* tables
* columns
* rows/entries

---

# Primary Key

* unique
* help differentiate between entries
* help identify an entry

---

| EmployeeID |    Name     | Salary  | Department |
|:----------:|:-----------:|---------|:----------:|
|    `1`     |  John Doe   | `50000` |     IT     |
|    `2`     | Jane Smith  | `60000` |     HR     |
|    `3`     | Bob Johnson | `65000` |  Finance   |

---

**surrogate key**
: has no mapping to anything in the real world

**natural key**
: has a purpose in the real world

---

# Example For Surrogate Key

| VehicleRegistrationNumber |   Make    |  Model  | Year |
|:-------------------------:|:---------:|:-------:|:----:|
|          ABC123           |   Ford    | Mustang | 2020 |
|          DEF456           | Chevrolet | Camaro  | 2019 |
|          GHI789           |   Tesla   | Model S | 2018 |

---

# Foreign Key

Value stored that link us to a row in a different table.

This value is a primary key in the other table.

---

# Example For Foreign Key

| OrderID | CustomerID | OrderDate    | TotalAmount |
|:-------:|:----------:|:------------:|:-----------:|
|    1    |     3      |  2021-01-01  |     100     |
|    2    |     2      |  2021-01-02  |     200     |
|    3    |     1      |  2021-01-03  |     150     |

---

the "other" table could be the same one.

like the supervisor of an employee.

---

# Example

| EmployeeID | ManagerID |     Name      | Salary | Department  |
|:----------:|:---------:|:-------------:|:------:|:-----------:|
|     1      |   null    |  John Smith   | 80000  |     CEO     |
|     2      |     1     |   Jane Doe    | 60000  |     CFO     |
|     3      |     1     |  Bob Johnson  | 70000  |     CTO     |
|     4      |     2     | Michael Brown | 55000  | Accounting  |
|     5      |     3     |  Emily Davis  | 75000  | Engineering |
|     6      |     5     | David Miller  | 62000  | Engineering |

---

# composite key

a key that need 2 attributes

only together they identify each row

the combination of the two only show up only once

---

# Example

| EmployeeID | ProjectID |    Name     | Salary |
|:----------:|:---------:|:-----------:|--------|
|     1      |     1     |  John Doe   | 50000  |
|     1      |     2     |  John Doe   | 50000  |
|     2      |     1     | Jane Smith  | 60000  |
|     3      |     2     | Bob Johnson | 65000  |
