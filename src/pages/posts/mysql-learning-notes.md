---
layout: "./../../layouts/post.layout.astro"
title: "MySQL Learning Notes"
date: "2024-02-10 21:50:00"
description: "Unlock the potential of Angular with insightful syntax notes, covering string interpolation, property binding, event binding, two-way binding, and structural directives. Discover the <ng-content> tag to retain inner HTML content and explore the powerful EventEmitter for seamless communication between components. Elevate your Angular skills with practical examples and custom naming techniques, ensuring a robust and efficient development experience."
keywords: "Angular Learning, Angular Syntax, Angular String Interpolation, Angular Property Binding, Angular Event Binding, Angular Two-way Binding, Angular Structural Directives, Angular ng-content, Angular EventEmitter, Angular Development, TypeScript, Angular Event Handling, Angular Custom Naming, Angular Tips, Angular Tricks, Dav/Devs Tech Blog, Web Development, Frontend Development."
images: [{ url: "mysql-learning-notes-0001.png", alt: "MySQL Learning Notes" }]
---

## 1. Important & Useful Links

| Website             | URL/Link                                 |
| ------------------- | ---------------------------------------- |
| Developer’s Website | http://www.mysql.com/                    |
| Documentation       | https://dev.mysql.com/doc/               |
| W3 Schools          | http://www.w3schools.com/sql/default.asp |
| Codecademy          | https://www.codecademy.com               |

## 2. Notes

### 2.1. Keys

| Keyword         | Key         | Description                                                  |
| --------------- | ----------- | ------------------------------------------------------------ |
| `KEY`           | Unique Key  | Each value MUST be unique and cannot be NULL                 |
| `PRIMARY KEY`   | Primary Key | A type of Unique Key where only ONE can exist in a table.    |
| `FOREIGN KEY`   | Foreign Key | A key which is linked to a Primary Key OUTSIDE of the table. |
| `PARTITION KEY` | ???         |                                                              |

## 3. Code Snippets

### 3.1. Select Everything from a Database

Code:

```sql
SELECT * FROM celebs;
```

Explanation:

`SELECT`: List<br>
`*`: everything<br>
`FROM`: requested<br>
`celebs`: Databade

### 3.2. Create Table

Code:

```sql
CREATE TABLE celebs(id INTEGER, name TEXT, age INTEGER);
```

Explanation:

`CREATE`: Create something<br>
`TABLE`: of type `TABLE`<br>
`celebs`: the name of the Table<br>
`(id INTEGER, name TEXT, age INTEGER)`: Columns of the Table

### 3.3. Insert Data

```sql
INSERT INTO celebs(id, name, age) VALUES (1, "Justin Biber", 21);
SELECT * FROM celebs;
```

### 3.4. Select a Particular Column

```sql
SELECT name FROM celebs;
```

### 3.5. Edit Existing Data

```sql
UPDATE celebs
SET age = 22
WHERE id = 1;

SELECT * FROM celebs;
```

### 3.6. Edit Table

```sql
ALTER TABLE celebs ADD COLUMN twitter_handle TEXT;
SELECT * FROM celebs;
```

### 3.7. Delete Row with an Empty Cell

```sql
DELETE FROM celebs WHERE twitter_handle IS NULL;
```

### 3.8. Queries

Code:

```sql
SELECT name, imdb_rating FROM movies;
```

Explanation:

`SELECT DISTINCT` specifies that the statement is going to be a query that returns unique values in the specified column(s).

### 3.9. Filtering Data

Code:

```sql
SELECT * FROM movies WHERE imdb_rating > 8;
```

Explanation:

The way to filter queries in `SQL` is to use the `WHERE` clause.

```sql
SELECT * FROM movies
ORDER BY imdb_rating DESC
LIMIT 3;
```

### 3.10. Wildcards

Code:

```sql
SELECT * FROM movies WHERE name LIKE "Se_en";
```

```sql
SELECT * FROM movies WHERE name LIKE "a%";
```

Explanation:

`_`: wild character<br>
`%`: matches zero or more missing letters in the pattern.

### 3.11. Between

```sql
SELECT * FROM movies WHERE name BETWEEN "A" AND "J";
```

```sql
SELECT * FROM movies WHERE year BETWEEN 1990 AND 2000;
```

### 3.12. `COUNT()`

```sql
SELECT COUNT(*) FROM fake_apps;
```

### 3.13. Some Functions

`COUNT`: Takes the name of a column(s) as an argument and counts the number of rows where the value(s) is not NULL.
`GROUP BY`: Is a clause used with aggregate functions to combine data from one or more columns.<br>
`SUM()`: Takes the column name as an argument and returns the sum of all the values in that column.<br>
`MAX()`: Takes the column name as an argument and returns the largest value in that column.<br>
`MIN()`: Takes the column name as an argument and returns the smallest value in that column.<br>
`AVG()`: Takes a column name as an argument and returns the average value for that column.<br>
`ROUND()`: Takes two arguments, a column name and the number of decimal places to round the values in that column.

### 3.14. JOIN Data from Different Tables

```sql
SELECT * FROM albums JOIN artists ON albums.artist_id = artists.id;
```

### 3.15. LEFT JOIN

Code:

```sql
SELECT * FROM albums LEFT JOIN artists ON albums.artist_id = artists.id;
```

Explanation:

The `LEFT` table is simply the first table that appears in the statement. Here, the left table is albums. Likewise, the right table is the second table that appears. Here, artists is the right table.

### 3.16. Aliases

Code:

```sql
SELECT
	albums.name AS "Album",
  albums.year,
  artists.name AS "Artist"
FROM
 	albums
JOIN artists ON
	albums.artist_id = artists.id
WHERE
	albums.year > 1980;
```

Explanation:

`AS` is a keyword in `SQL` that allows you to rename a column or table using an alias.
