---
title: "Basic Selection"
date: 2023-11-21T22:01:25-05:00
description: "Basic Selection in SQL"
---

query all students

```sql
SELECT * FROM student;
```

selected columns

```sql
SELECT name, major
FROM student;
```

column prefix (will be helpful with "join queries")

```sql
SELECT student.name, student.major
FROM student;
```

# Order

Ascending

```sql
SELECT * FROM student
ORDER BY name;
```

Descending

```sql
SELECT *
FROM student
ORDER BY name DESC;
```

Order by column not selected

```sql
SELECT name, major
FROM student
ORDER BY student_id DESC;
```

Multiple order categories

```sql
SELECT * FROM student
ORDER BY major, student_id;
```

# Limit

```sql
SELECT * FROM student
LIMIT 2;
```

With order

```sql
SELECT * FROM student
ORDER BY student_id DESC
LIMIT 2;
```

# Where Clause

| operator |    meaning    |
|:--------:|:-------------:|
|   `=`    |     equal     |
|   `>`    |    greater    |
|   `<`    |    smaller    |
|   `>=`   | greater equal |
|   `<=`   | smaller equal |
|   `<>`   |    unequal    |

```sql
SELECT * FROM student
WHERE student_id = 2;
```

```sql
WHERE student_id > 2;
```

```sql
WHERE major = 'Biology';
```

```sql
WHERE major = 'Biology' OR major = 'Math';
```

```sql
WHERE major <> 'Biology';
```

```sql
WHERE major <> 'Biology' AND student_id > 2;
```

`IN` word

```sql
SELECT * FROM student
WHERE major IN ('Biology', 'Computer', 'Music');
```

```sql
SELECT * FROM student
WHERE name IN ('Gila', 'Sason', 'Simha');
```
