---
layout: "./../../layouts/post.layout.astro"
title: "PHP Learning Notes"
date: "2024-02-10 00:30:00"
description: 'Explore essential links, insightful reads, and comprehensive code snippets on the "1. Important Links" page. From core developer resources to in-depth articles on PHP, this page is a treasure trove for both beginners and seasoned developers. Dive into topics like string manipulation, arrays, loops, and classes with practical examples.'
keywords: "Important Links, PHP Developer Resources, PHP Documentation, W3 Schools PHP, Codecademy PHP, PHP Echo vs Print, Include External PHP, PHP Notes, True/False in PHP, PHP Environment Path for Windows, PHP Code Snippets, External PHP Inclusion, String Concatenation in PHP, PHP Variables, PHP Arrays, Deleting Array Element in PHP, Foreach Loop in PHP, PHP Random Character, PHP Array Length, Sorting Arrays in PHP, Associative Arrays in PHP, String Related Functions in PHP, PHP Classes, Checking Existence in PHP, Calling Constants in PHP, Static Methods in PHP, Capitalize First Letter in PHP."
images: [{ url: "php-learning-notes-0001.png", alt: "PHP Learning Notes" }]
---

## 1. Important Links

- Developer: http://php.net/
- Documentation: http://php.net/docs.php
- W3 Schools: http://www.w3schools.com/php/default.asp
- Codeacademy: https://www.codecademy.com/learn/learn-php

### Interesting Reads

Echo vs Print (Stack Overflow)

- [Reference: Comparing PHP's print and echo](http://stackoverflow.com/questions/7094118/reference-comparing-phps-print-and-echo)
- [How are echo and print different in PHP?](http://stackoverflow.com/questions/234241/how-are-echo-and-print-different-in-php)

Include External PHP

- [include external php files](http://stackoverflow.com/questions/14079459/include-external-php-files)

## 2. Notes

### 2.1. True/False

| False  | True            |
| ------ | --------------- |
| 0      | 1 or greater    |
| `null` | `object`, `$[]` |
| ""     | "a"             |

### 2.2. Env Path (for Windows)

- Add paths to the end of the PATH env

## 3. Code Snippets

### 3.1. External PHP

```php
<?php
    include "yourfile.php";
?>
```

Other options:

- `include 'yourfile.php';`
- `include_once 'yourfile.php';`
- `require 'yourfile.php';`
- `require_once 'yourfile.php';`

Understanding the difference between `require` and `include` According to the PHP manual, `require` and `include` "are identical in every way except how they handle failure." However, further reading of the manual suggests another very subtle difference that impacts performance. When you use the `require` keyword, the named file is read in, parsed, and compiled when the file using the `require` keyword is compiled. When a file containing the `include` keyword is compiled, the named file is not read in, parsed, and compiled initially. Only when that line of code is executed is the file read, parsed and compiled. Only use the `require` keyword if you know you will always need that named file in the current script. If you might use its functions, use `include` instead. PHP opens up all files that are `require`d, but only opens `include`d files as needed. Additionally, you should also consider using `require`\_once and `include`\_once in place of `require` and `include` respectively. In practice, it is more likely that you actually want the functionality provided by the `require`\_once and `include`\_once functions, even though it is much more common to use the `require` and `include` keywords respectively.

### 3.2. String Concatenation

`.` (dot) in PHP does the same as `+` (plus) in JavaScript: concatenates strings.

```php
<?php
	echo "Hello" . " " . " World!";
?>
```

### 3.3. Variables

```php
$myNumber = 0;
$myString = "Hello World";
```

### 3.4. Arrays

```php
$tens = array(10, 20, 30, 40, 50);
echo $tens[2]; //output: 30
echo $tens{2}; //output: 30
```

### 3.5. Deleting an Array Element

```php
$languages = array("HTML/CSS",
"JavaScript", "PHP", "Python", "Ruby");

// remove "Python"
unset($languages[3]);

foreach($languages as $lang
{
  print "<p>$lang</p>";
}
```

### 3.6. Foreach Loop

```php
$sentence = array("I'm ", "learning ", "PHP!");

foreach ($sentence as $word)
 {
  echo $word;
}
```

### 3.7. Print a Random Character

```php
$name = "Alieos";
$randChar = rand(0, strlen($name) - 1);
print substr($name, $randChar, 1);
```

### 3.8. Print Length of Array

```php
$colours = array("Red", "Blue", "Yellow", "Green", "Purple");
print count($colours);
```

### 3.9. Sorting & Joining Arrays

```php
sort() - sort in ascending order
$the_array = array(1, 2, 23, 45, 12, "a", "bottle", 15, "trouble", "beer");
sort($the_array);
print join(",", $the_array);


rsort() - sort in descending order
$the_array = array(1, 2, 23, 45, 12, "a", "bottle", 15, "trouble", "beer");
rsort($the_array);
print join(",", $the_array);
```

### 3.10. Associative Arrays

```php
// This is an array using integers as the indices.
// Add 'BMW' as the last element in the array!
$car = array(2012, 'blue', 5);

// This is an associative array.
// Add the make => 'BMW' key/value pair!
$assocCar = array('year' => 2012,
		   'colour' => 'blue',
		   'doors' => 5);
```

### 3.11. String Related Functions

Function: `strlen($string);`

Explanation: Gets the length of the string.

Example:

```php
$a_word = "Text";
print strlen($name); //4
```

Function: `strtoupper($string);`

Explanation: Sets the whole string to UPPERCASE.

Example:

```php
$a_word = "Text";
print strtoupper($a_word); //TEXT
```

Function: `strtolower($string);`

Explanation: Sets the whole string to lowercase.

Example:

```php
$a_word = "Text";
print strtolower($a_word). //text
```

Function: `substr($string, $startChar, $noOfChar);`

Explanation: Gets a substring of, the character in your string to start at, and how many characters you want after your starting character.

Example:

```php
$a_word = "Text";
print substr($a_word, 2, 3); //xt
```

### 3.12. Classes

```php
class Person
{
	public $isAlive = true;
	public $lastname;
	public $firstname;
	public $age;
}

$person = new Person();
echo $person->isAlive; //1
```

### 3.13. Checking Existence

```php
class Person
{
	public $isAlive = true;

	function __construct($name)
	{
	  $this->name = $name;
	}

	public function dance()
	{
	return "I'm dancing!";
	}
}

$me = new Person("Shane");
if (is_a($me, "Person"))
{
	echo "I'm a person, ";
}
if (property_exists($me, "name"))
{
	echo "I have a name, ";
}
if (method_exists($me, "dance"))
{
	echo "and I know how to dance!";
}
```

### 3.14. Calling Constants and Statics

```php
class King
{
	const status = "Royalty";

	public static function proclaim()
	{
		echo "A kingly proclamation!";
	}
}
// ...and call the method below!

echo King::status;
echo King::proclaim();
```

### 3.15. Capitalize First Letter

```php
ucfirst(strtolower($quote['quote_status']))
```
