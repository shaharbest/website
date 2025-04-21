---
title: "Date"
date: 2023-11-15T05:36:24+02:00
description: "Date In JavaScript"
---

```javascript
const d1 = new Date('1987-3-25');
d1.toString(); // Wed Mar 25 1987 00:00:00 GMT+0200 (Israel Standard Time)
```

```javascript
const d1 = new Date('1987-3');
d1.toString(); // Sun Mar 01 1987 00:00:00 GMT+0200 (Israel Standard Time)
```

```javascript
const d1 = new Date('1987');
d1.toString(); // Thu Jan 01 1987 02:00:00 GMT+0200 (Israel Standard Time)
```

# Today

```javascript
const today = new Date();
today.toString(); // Thu Feb 09 2023 17:09:43 GMT+0200 (Israel Standard Time)
```

```javascript
const today = new Date(0);
today.toString(); // Thu Jan 01 1970 02:00:00 GMT+0200 (Israel Standard Time)
```

# Date and Time Seperated

```javascript
today.toDateString(); // Thu Feb 09 2023
```

```javascript
today.toTimeString(); // 17:09:43 GMT+0200 (Israel Standard Time)
```

# UTC

```javascript
today.toUTCString(); // Thu, 09 Feb 2023 15:09:43 GMT
```

[countries locale code list](https://saimana.com/list-of-country-locale-code/)

```javascript
today.toLocaleString('en-IL'); // '09/02/2023, 17:09:43'

today.toLocaleString('en-US'); // '2/9/2023, 5:09:43 PM'

today.toLocaleString('ar-EG'); // in arabic

today.toLocaleString(); // according to what configured in your machine
```

```javascript
d1.getDate();
d1.getMonth();
d1.getFullYear();
d1.getHours();
d1.getMinutes();
d1.getSeconds();
```

# Week

* nisimDate in Sunday
* shlomoDate in Monday
* davidDate in Saturday

```javascript
nisimDate.getDay(); // 0
shlomoDate.getDay(); // 1
davidDate.getDay(); // 6
```

| Value | Day Name  |
|:-----:|:---------:|
|   0   |  Sunday   |
|   1   |  Monday   |
|   2   |  Tuesday  |
|   3   | Wednesday |
|   4   | Thursday  |
|   5   |  Friday   |
|   6   |  Saurday  |

* nisimDate in Sunday
* shlomoDate in Monday
* davidDate in Saturday

```javascript
nisimDate.getDay(); // 0
shlomoDate.getDay(); // 1
davidDate.getDay(); // 6

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

days[nisimDate.getDay()]; // Sun
days[shlomoDate.getDay()]; // Mon
days[davidDate.getDay()]; // Sat
```
