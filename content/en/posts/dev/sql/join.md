---
title: "Join"
date: 2023-11-21T23:04:52-05:00
---

`soldiers`

| soldier_id | first_name | last_name |   phone    | base_id |
|:----------:|:----------:|:---------:|:----------:|:-------:|
|     1      |    John    |   Smith   | 555-555-55 |    1    |
|     2      |    Jane    |    Doe    | 555-555-56 |    2    |
|     3      |  Michael   |  Johnson  | 555-555-57 |    1    |
|     4      |   Nisim    |   Cohen   | 555-555-58 |  null   |

`bases`

| base_id |    name    |  location  |
|:-------:|:----------:|:----------:|
|    1    | Fort Knox  | Washington |
|    2    | West Point |   Texas    |
|    3    |   Base X   | California |
|    4    |   Base Y   |   Navada   |
|    5    |   Base Z   |  Ashkelom  |

we want to see all soldiers names and their base name and location

```sql
SELECT *
FROM soldier
JOIN base
ON soldier.base_id = base.base_id;
```

# More Specific

```sql
SELECT
	soldier.first_name,
	soldier.last_name,
	base.base_name
FROM soldier
JOIN base
ON soldier.base_id = base.base_id;
```

# Tables Aliases

```sql
SELECT
	s.first_name,
	s.last_name,
	b.base_name
FROM soldier AS s
JOIN base AS b
ON s.base_id = b.base_id;
```

# INNER

| first_name | last_name | base_name  |  location  |
|:----------:|:---------:|:----------:|:----------:|
|    John    |   Smith   | Fort Knox  | Washington |
|  Michael   |  Johnson  | Fort Knox  | Washington |
|    Jane    |    Doe    | West Point |   Texas    |

# LEFT JOIN

| first_name | last_name | base_name  |  location  |
|:----------:|:---------:|:----------:|:----------:|
|    John    |   Smith   | Fort Knox  | Washington |
|  Michael   |  Johnson  | Fort Knox  | Washington |
|    Jane    |    Doe    | West Point |   Texas    |
|   Nisim    |   Cohen   |    null    |    null    |

# RIGHT JOIN

| first_name | last_name | base_name  |  location  |
|:----------:|:---------:|:----------:|:----------:|
|    John    |   Smith   | Fort Knox  | Washington |
|  Michael   |  Johnson  | Fort Knox  | Washington |
|    Jane    |    Doe    | West Point |   Texas    |
|    null    |   null    |   Base X   | California |
|    null    |   null    |   Base Y   |   Navada   |
|    null    |   null    |   Base Z   |  Ashkelom  |

# FULL JOIN

| first_name | last_name | base_name  |  location  |
|:----------:|:---------:|:----------:|:----------:|
|    John    |   Smith   | Fort Knox  | Washington |
|  Michael   |  Johnson  | Fort Knox  | Washington |
|    Jane    |    Doe    | West Point |   Texas    |
|   Nisim    |   Cohen   |    null    |    null    |
|    null    |   null    |   Base X   | California |
|    null    |   null    |   Base Y   |   Navada   |
|    null    |   null    |   Base Z   |  Ashkelom  |

you can add `WHERE`{.sql} clause and/or `ORDER BY`{.sql} clause

```sql
SELECT s.first_name, s.last_name, b.base_name
FROM soldier AS s
JOIN base AS b
ON s.base_id = b.base_id;
WHERE condition(s)
ORDER BY column_name(s);
```

Self Join

## `soldier`

| id |   name   | commander_id |
|:--:|:--------:|:------------:|
| 1  |  nisim   |     null     |
| 2  |  shlomo  |      1       |
| 3  |  david   |      1       |
| 4  |  bilbi   |      2       |
| 5  | gargamel |      2       |
| 6  |   avi    |      3       |
| 7  |  gimel   |      3       |

```sql
SELECT
s.name AS 'soldier name',
c.name AS 'commander name'
FROM soldier AS s
JOIN soldier AS c
ON s.commander_id = c.id;
```

Query Result

| soldier name | commander name |
|:------------:|:--------------:|
|    shlomo    |     nisim      |
|    david     |     nisim      |
|    bilbi     |     shlomo     |
|   gargamel   |     shlomo     |
|     avi      |     david      |
|    gimel     |     david      |

```sql
SELECT
s.name AS 'soldier name',
c.name AS 'commander name'
FROM soldier AS s
LEFT JOIN soldier AS c
ON s.commander_id = c.id;
```

Query Result

| `soldier name` | `commander name` |
|:--------------:|:----------------:|
|     nisim      |       null       |
|     shlomo     |      nisim       |
|     david      |      nisim       |
|     bilbi      |      shlomo      |
|    gargamel    |      shlomo      |
|      avi       |      david       |
|     gimel      |      david       |
