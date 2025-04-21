---
title: "String Methods"
date: 2023-09-20T14:04:37+03:00
tags: [string]
---

## `toLowerCase` and `toUpperCase`

```javascript
const king = 'Avi Biter';
king.toLowerCase(); // 'avi biter'
king.toUpperCase(); // 'AVI BITER'
```

## `trim`

```javascript
const s1 = 'Shimi Tavoro';
s1.trim(); // 'Shimi Tavoro'

const s2 = '   Shimi Tavoro';
s2.trim(); // 'Shimi Tavoro'

const s3 = '   Shimi Tavoro  ';
s3.trim(); // 'Shimi Tavoro'
```

## `includes`

```javascript
const str = 'what is a woman?';
str.includes('woman'); // true
str.includes('catapult'); // false
str.includes('a wom'); // true
```

## `indexOf`

```javascript
const str = 'ABCDEFG';
str.indexOf('A'); // 0
str.indexOf('BC'); // 1
str.indexOf('EFG'); // 4
```

## `replace` and `replaceAll`

```javascript
const s1 = 'what is a woman?';
s1.replace('woman', 'catapult'); // 'what is a catapult?'

const s2 = 'avi avi avi';
s2.replace('avi', 'PITA'); // 'PITA avi avi'
s2.replaceAll('avi', 'PITA'); // 'PITA PITA PITA'
```

## `concat`

```javascript
const s1 = 'AAA', s2 = 'ZZZ';
s1.concat(s2); // 'AAAZZZ'
```

## `slice`

```javascript
          // 0123456789
const str = 'ABCDEFGHIJ';
str.slice(2); // 'CDEFGHIJ'
str.slice(0, 2); // 'AB'
str.slice(1, 3); // 'BC'
str.slice(2, 5); // 'CDE'
```

## `split`

```javascript
const s1 = 'AAA@BB@CCCC';
s1.split('@'); // ['AAA', 'BB', 'CCCC']
```

```javascript
const s2 = 'nisim%shlomo%david';
s2.split('%'); // ['nisim', 'shlomo', 'david']
```

```javascript
const s3 = 'AAA BB CCCC D EEEEEE';
s3.split(' '); // ['AAA', 'BB', 'CCCC', 'D', 'EEEEEE']
```

```javascript
const s4 = 'AAAshimi tavoriBBshimi tavoriCCCC';
s4.split('shimi tavori'); // ['AAA', 'BB', 'CCCC']
```
