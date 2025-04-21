---
title: "Basic Tables Definition"
date: 2023-11-22T16:46:44+02:00
description: "Basic Tables Definition in SQL"
---

SQL
: a language to interact with RDBMS

RDBMS
: a software application we use to create and maintain a relational db

RDBMS don't speak english.
They speak in SQL.

There are small differences between the SQL of different RDBMS-es:

* MySQL
* Postgres
* Oracle
* Microsoft SQL Server
* MariaDB
* SQLite

| Name | Initials                   |             Purpose              |
|:----:|:--------------------------:|:--------------------------------:|
| DQL  | Data Query Language        |          Fetching Data           |
| DML  | Data Manipulation Language |    Insert, Update and Delete     |
| DDL  | Data Definition Language   |          Define Schemas          |
| DCL  | Data Control Language      | Determine Access and Permissions |

# Comments

```sql
-- this is a comment
SELECT name, age FROM employee;
/*
comment in
multiple lines
*/
```

# Basic Rules

* We prefer to write reserved words in uppercase.
* Any command end with a semi colon.

# Main Data Types

| Type         | Description                                 |
|:------------:|:-------------------------------------------:|
| INT          | integer                                     |
| DECIMAL(M,N) | M - total of digits, N - digits after point |
| VARCHAR(N)   | string, N - max num of characters           |
| BLOB         | large data like images                      |
| DATE         | YYYY-MM-DD                                  |
| TIMESTAMP    | YYYY-MM-DD HH:MM:SS                         |

# Creating DB

```sql
CREATE DATABASE school;
```

# Use DB

needed before refering any tables

```sql
USE school;
```

# Creating a Table

```sql
CREATE TABLE student (
	student_id INT PRIMARY KEY,
	name VARCHAR(20),
	major VARCHAR(20)
);
```

equivalent to

```sql
CREATE TABLE student (
	student_id INT,
	name VARCHAR(20),
	major VARCHAR(20),
	PRIMARY KEY(student_id)
);
```

Changing the definition of a table after it was created:

```sql
ALTER TABLE student ADD gpa DECIMAL(3, 2);
```

```sql
ALTER TABLE student DROP COLUMN gpa;
```


# Columns Constraints

* `NOT NULL`
* `UNIQUE`

# Not Null

```sql
CREATE TABLE student (
	student_id INT,
	name VARCHAR(20) NOT NULL,
	major VARCHAR(20),
	PRIMARY KEY(student_id)
);
```

# Unique

```sql
CREATE TABLE company (
	company_id INT,
	name VARCHAR(20) UNIQUE,
	PRIMARY KEY(company_id)
);
```

# Default

```sql
CREATE TABLE student (
	student_id INT,
	name VARCHAR(20),
	major VARCHAR(20) DEFAULT 'undecided',
	PRIMARY KEY(student_id)
);
```

# Auto

```sql
CREATE TABLE student (
	student_id INT AUTO_INCREMENT,
	name VARCHAR(20),
	major VARCHAR(20),
	PRIMARY KEY(student_id)
);
```

# List All Tables

```sql
SHOW TABLES;
```

# List Table Definition

```sql
DESCRIBE student;
```

# Droping Table

```sql
DROP TABLE student;
```
