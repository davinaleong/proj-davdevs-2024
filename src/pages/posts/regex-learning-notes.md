---
layout: "./../../layouts/post.layout.astro"
title: "RegEx Learning Notes"
date: "2024-02-10 05:53:00"
description: "Master the art of Regular Expressions (Regex) with in-depth learning notes on Dav/Devs tech blog. Uncover essential links, explore date patterns, dive into number validations, and unravel word-based regex for precise text matching. Elevate your regex skills with practical examples and valuable insights."
keywords: "Regex Learning, Regular Expressions, Regex Tutorial, Regex Debugger, Regex Patterns, Date Patterns in Regex, Number Validation in Regex, Hex Colour Regex, UUID Regex, Word-based Regex, Bible Verse Matching, Regex Examples, Regex Flowchart, Debuggex, Regex Mastery, Dav/Devs Tech Blog, Tech Learning Notes."
images: [{ url: "regex-learning-notes-0001.png", alt: "RegEx Learning Notes" }]
---

## 1. Important Links

- Tutorial: https://regexone.com/
- Flowchart generator/Regex Debugger: https://www.debuggex.com/r/7jAhBMayS28ezOAN/4

## 2. Patterns

### 2.1. Dates

#### 2.1.1. Basic Date Pattern

```
^[0-9]{2}-[0-9]{2}-[0-9]{4}$
```

#### 2.1.2. Pattern: _dd-mm-yyyy_

Example: _02-01-2016_

Generic

```
^[0-2][0-9]-[0-9][12]-\d{4}$|^[3][01]-[0-9][12]-\d{4}$
```

Accommodate dots and spaces

```
^[0-2]\d[-|\.|\/]\d[12][-|\.|\/]\d{4}$|^[3][01][-|\.|\/]\d[12][-|\.|\/]\d{4}$
```

#### 2.1.3. Pattern: _dd-mmm-yyyy_

Example: _02 Jan 2016_

More refined

```
^(([0-9])|([0-2][0-9])|([3][0-1]))\ (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\ \d{4}$
```

Accommodate dots and dashes, check for February

```
^(([0,1,2][0-9]|3[0,1])[\ \-](Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[\ \-]\d{4})|(([0,1,2][0-9])[\ \-]Feb[\ \-]\d{4})$
```

#### 2.1.4. Pattern: _yyyy-mm-dd hh:ii:ss_

Example: _02 Jan 2016 23:59:59_

Generic

```
^\d{4}-[0-1][1-2]-[0-3]\d [0-2]\d:[0-5]\d:[0-5]\d$
```

### 2.2. Numbers

#### 2.2.1. Decimals

Generic

```
^\d+\.?\d+$
```

With negative numbers

```
^-?\d+\.?\d+$
```

Complex Numbers

```
^-?\e?\d+\.?\d+$
```

#### 2.2.2. Hex Colour

With Hex

```
^#[0-9|a-f]{6}$
```

Without Hex

```
^[0-9|a-f]{6}$
```

#### 2.2.3. UUID

```
^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$
```

## 3. Words

### 3.1. Other

> Sample:
>
> Other<br>
> Others<br>
> other<br>
> others

```
^[o|O]ther[s]?$
```

### 3.2. None

> Sample:
>
> None<br>
> NONE<br>
> none

```
[N|n][O|o][N|n][E|e]
```

## 4. Bible

> Sample:
>
> John 6<br>
> matthew 7:10<br>
> genesis 10:10-11

```
^(\w+) (\d+):?(\d+)?-?(\d+)?
```
