---
title: "Normalize"
date: 2023-11-21T21:57:09-05:00
---

DB normalization
: process of structuring a relational DB according to normal forms.

## Motivation In Minimum Words

* reduce redundancy
* improve integrity

## Motivation For Us Developers

* Easier to insert, update and delete anything.
* Save us to redefine the db frequently.
* Save us from caring about our application objectives (decouple).

## First Rules

* All rows must be unique.
* Each cell contain a single value (not a list).
* Single value can't be split down further.

---

## Problem 1

Not all rows uniquly identifiable.

`orders` table

|  customer_name  | order                    |
|:---------------:|--------------------------|
| **Nisim Cohen** | **burger, fries, coke**  |
|   Shlomo Levi   | nuggets, lemonade, fries |
| **Nisim Cohen** | **burger, fries, coke**  |

## Solution

Add id as primary key.

`orders` table

| order_id | customer_name | order                    |
|:--------:|:-------------:|--------------------------|
|   101    |  Nisim Cohen  | burger, fries, coke      |
|   102    |  Shlomo Levi  | nuggets, lemonade, fries |
|   103    |  Nisim Cohen  | burger, fries, coke      |

---

## Problem 2

order column contain multiple values.

| order_id | customer_name | order                    |
|:--------:|:-------------:|--------------------------|
|   101    |  Nisim Cohen  | burger, fries, coke      |
|   102    |  Shlomo Levi  | nuggets, lemonade, fries |
|   103    |  Nisim Cohen  | burger, fries, coke      |

## Solution

create seperate table of order items.

| order_id | customer_name |
|:--------:|:-------------:|
|   101    |  Nisim Cohen  |
|   102    |  Shlomo Levi  |
|   103    |  Nisim Cohen  |

| order_id | item     |
|:--------:|----------|
|   101    | burger   |
|   101    | fries    |
|   101    | coke     |
|   102    | nuggets  |
|   102    | lemonade |
|   102    | fries    |
|   103    | burger   |
|   103    | fries    |
|   103    | coke     |

---

## Problem 3

`customer_name` is divisable.

| order_id | customer_name |
|:--------:|:-------------:|
|   101    |  Nisim Cohen  |
|   102    |  Shlomo Levi  |
|   103    |  Nisim Cohen  |

## Solution

divide `customer_name` into two columns.

| order_id | customer_fname | customer_lname |
|:--------:|:--------------:|:--------------:|
|   101    |     Nisim      |     Cohen      |
|   102    |     Shlomo     |      Levi      |
|   103    |     Nisim      |     Cohen      |

---

# Another Rule

Each non-primary-key column is fully dependent on the PK

## Problem

`employee` table

| emp_id |  emp_name   | dept_name | dept_location |
|:------:|:-----------:|:---------:|:-------------:|
|  101   |    Nisim    |   Sales   |   New York    |
|  102   |   Shlomo    |   Sales   |   New York    |
|  103   |    David    |    IT     | San Francisco |

## Solution

`employee` table

| emp_id |  emp_name   | dept_id |
|:------:|:-----------:|:-------:|
|  101   |    Nisim    |   201   |
|  102   |   Shlomo    |   201   |
|  103   |    David    |   202   |

`department` table

| dept_id | dept_name | dept_location |
|:-------:|:---------:|:-------------:|
|   201   |   Sales   |   New York    |
|   202   |    IT     | San Francisco |

---

# Real World

## Entities

* Student
* Class
* School
* Product
* Order
* Store

## Relationships Types

* One to Many
* Many to Many

---

# One To Many

* An order can be done by one customer.
* A customer have many orders.

`customers` table

| customer_id |  name  |
|:-----------:|:------:|
|     100     | Nisim  |
|     101     | Shlomo |
|     102     | David  |

`orders` table

| order_id | total_price |
|:--------:|:-----------:|
|   200    |     150     |
|   201    |     40      |
|   202    |     70      |

How will the tables convey this relationship?

## Solution

`customers` table

| customer_id |  name  |
|:-----------:|:------:|
|     100     | Nisim  |
|     101     | Shlomo |
|     102     | David  |

`orders` table

| order_id | total_price | customer_id |
|:--------:|:-----------:|:-----------:|
|   200    |     150     |     101     |
|   201    |     40      |     101     |
|   202    |     70      |     102     |

---

# Many to Many

`students` table

| student_id | student_name |
|:----------:|:------------:|
|    100     |    Nisim     |
|    101     |    Shlomo    |
|    102     |    David     |

`courses` table

| course_id | course_name |
|:---------:|:-----------:|
|    200    |   Biology   |
|    201    |    Math     |
|    202    |  Computers  |

## Bad Implementation

`students` table

| student_id | student_name |   courses_ids   |
|:----------:|:------------:|:---------------:|
|    100     |    Nisim     | "200, 201, 202" |
|    101     |    Shlomo    |      "201"      |
|    102     |    David     |   "201, 202"    |

`courses` table

| course_id | course_name |   student_ids   |
|:---------:|:-----------:|:---------------:|
|    200    |   Biology   |      "100"      |
|    201    |    Math     | "100, 101, 102" |
|    202    |  Computers  |   "100, 102"    |

## Good Implementation

A third table. you can call this solution by one of the following:

* Bridge Table
* Joining Table
* Junction Table

`students` table

| student_id | student_name |
|:----------:|:------------:|
|    100     |    Nisim     |
|    101     |    Shlomo    |
|    102     |    David     |

`courses` table

| course_id | course_name |
|:---------:|:-----------:|
|    200    |   Biology   |
|    201    |    Math     |
|    202    |  Computers  |

`students_courses` table (the bridge table)

| student_id | course_id |
|:----------:|:---------:|
|    100     |    200    |
|    100     |    201    |
|    100     |    202    |
|    101     |    201    |
|    102     |    201    |
|    102     |    202    |
