---
title: "Insert Update Delete"
date: 2023-11-21T23:10:04-05:00
description: "Insert Update and Delete Queries in SQL"
---

* Insert
* Update
* Delete

# Insert

```sql
INSERT INTO student VALUES(1, 'Nisim', 'Math');
INSERT INTO student VALUES(2, 'Shlomo', 'Biology');
```

NULL Value

```sql
INSERT INTO student VALUES(3, 'David', NULL);
```

Not All Values

```sql
INSERT INTO student(student_id, name)
VALUES(4, 'Gargamel');
```

# Update

Comparison Operators

| Operator |      Description      |
|:--------:|:---------------------:|
|   `=`    |        equals         |
|   `<>`   |      not equals       |
|   `>`    |     greater than      |
|   `<`    |       less than       |
|   `>=`   | greater than or equal |
|   `<=`   |  less than or equal   |

All Rows

```sql
UPDATE student
SET major = 'Music';
```

Single Row

```sql
UPDATE student
SET major = 'Music'
WHERE student_id = 2;
```

Several Rows

```sql
UPDATE student
SET major = 'Bio'
WHERE major = 'Biology';
```

Compound Conditional

```sql
UPDATE student
SET major = 'Math & Computer'
WHERE major = 'Math' OR major = 'Computer';
```

Multiple Changes

```sql
UPDATE student
SET name = 'Avi', major = 'undecided'
WHERE student_id = 2;
```

# Delete

All Entries

```sql
DELETE FROM student;
```

A Single Entry

```sql
DELETE FROM student
WHERE student_id = 4;
```

Multiple Entries

```sql
DELETE FROM student
WHERE major = 'Biology';
```
