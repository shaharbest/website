---
title: "Aggregate Functions"
date: 2023-11-27T12:25:45-05:00
---

Functions: SUM, AVG, MAX, MIN, COUNT.

```sql
SELECT * FROM singers;
```

|  NAME  | SALARY |
|:------:|:------:|
| nisim  |  100   |
| shlomo |  300   |
| david  |  200   |
| sason  |  100   |

## SUM

```sql
SELECT SUM(SALARY) FROM singers;
```

| SUM(SALARY) |
|:-----------:|
|     700     |

## AVG

```sql
SELECT AVG(SALARY) FROM singers;
```

| AVG(SALARY) |
|:-----------:|
|     175     |

## MAX 🦾

```sql
SELECT MAX(SALARY) FROM singers;
```

| MAX(SALARY) |
|:-----------:|
|     300     |

## MIN

```sql
SELECT MIN(SALARY) FROM singers;
```

| MIN(SALARY) |
|:-----------:|
|     100     |

## COUNT

```sql
SELECT COUNT(*) FROM singers;
```

| COUNT(*) |
|:--------:|
|    4     |

--------------------

# GROUP BY

```sql
SELECT * FROM actors;
```

|   NAME    | SALARY | TEAM_ID |
|:---------:|:------:|:-------:|
|   nisim   |  100   |    A    |
|  shlomo   |  300   |    A    |
|   david   |  200   |    A    |
|   sason   |  100   |    A    |
| gilgamesh |  100   |    A    |
|   shrek   |  150   |    B    |
|   fiona   |  325   |    B    |
|  donkey   |   50   |    B    |
|  farkwad  |  9000  |    B    |

## SUM

```sql
SELECT TEAM_ID, SUM(SALARY)
FROM actors
GROUP BY TEAM_ID;
```

| TEAM_ID | SUM(SALARY) |
|:-------:|:-----------:|
|    A    |     800     |
|    B    |    9525     |

## AVG

```sql
SELECT TEAM_ID, AVG(SALARY)
FROM actors
GROUP BY TEAM_ID;
```

| TEAM_ID | AVG(SALARY) |
|:-------:|:-----------:|
|    A    |     160     |
|    B    |   2381.25   |

## MAX

```sql
SELECT TEAM_ID, MAX(SALARY)
FROM actors
GROUP BY TEAM_ID;
```

| TEAM_ID | MAX(SALARY) |
|:-------:|:-----------:|
|    A    |     300     |
|    B    |    9000     |

## MIN

```sql
SELECT TEAM_ID, MIN(SALARY)
FROM actors
GROUP BY TEAM_ID;
```

| TEAM_ID | MIN(SALARY) |
|:-------:|:-----------:|
|    A    |     100     |
|    B    |     50      |

## COUNT

```sql
SELECT TEAM_ID, COUNT(*)
FROM actors
GROUP BY TEAM_ID;
```

| TEAM_ID | COUNT(SALARY) |
|:-------:|:-------------:|
|    A    |       5       |
|    B    |       4       |

## HAVING Clause

filtering rows **after** aggragation.

```sql
SELECT TEAM_ID, SUM(SALARY)
FROM actors
GROUP BY TEAM_ID;
```

| TEAM_ID | SUM(SALARY) |
|:-------:|:-----------:|
|    A    |     800     |
|    B    |    9525     |

```sql
SELECT TEAM_ID, SUM(SALARY)
FROM actors
GROUP BY TEAM_ID
HAVING SUM(SALARY) > 1000;
```

| TEAM_ID | SUM(SALARY) |
|:-------:|:-----------:|
|    B    |    9525     |

## Column Alias

use column alias to make it easier

```sql
SELECT
	TEAM_ID,
	SUM(SALARY) AS SALARY_SUM
FROM actors
GROUP BY TEAM_ID
HAVING SALARY_SUM > 1000;
```


## ORDER

```sql
SELECT TEAM_ID, SUM(SALARY)
FROM actors
GROUP BY TEAM_ID
ORDER BY TEAM_ID;
```

```sql
SELECT TEAM_ID, SUM(SALARY)
FROM actors
GROUP BY TEAM_ID
ORDER BY TEAM_ID DESC;
```
