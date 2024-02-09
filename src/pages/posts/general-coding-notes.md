---
layout: "./../../layouts/post.layout.astro"
title: "General Coding Notes"
date: "2024-02-10 07:00:00"
description: 'Elevate your coding practices with comprehensive notes on coding conventions, styles, and essential techniques. Learn the art of meaningful variable and function naming, follow coding styles, create default file headers, and implement copyright statements. Explore platform-dependent compilation in Unity, handle "Not Implemented" scenarios, and master the ternary operator for concise code. Elevate your coding standards with practical examples and valuable insights.'
keywords: "Coding Conventions, Code Styles, Variable Naming, Function Naming, Meaningful Names, Coding Techniques, File Headers, Copyright Statements, Platform-Dependent Compilation, Unity Coding, Not Implemented Exception, Ternary Operator, Code Organization, Coding Standards, Dav/Devs Coding Notes, Programming Best Practices."
images: [{ url: "general-coding-notes-0001.png", alt: "General Coding Notes" }]
---

## 1. Coding Conventions

Give variables and functions meaningful names.

| Wrong             | Correct              |
| ----------------- | -------------------- |
| `int a = 100;`    | `int health = 100;`  |
| `function b() {}` | `function main() {}` |

Variable name conventions:

This eases the identification of variables’ data types and scope regardless of the IDE a person uses.

Constants in FULL CAPS

```php
const string NAME = 'John Doe';
```

Denote private variables with a leading underscore

```php
private string _name = 'John Doe';
```

Indicate the variable’s data type if it’s primitive

```php
const string S_NAME = 'John Doe';

private int _i_health = 100;
private float _f_gravity = 8.5f;
private bool _b_isDead = false;
private string _s_playerClass = 'Warrior';
```

Leave a comment behind the class’s ending curly brace.<br>
This reduces confusion about ending braces, especially for files with long lines of code.

```php
public class Player
{

} //end Player class
```

## 2. Code Styles

### 2.1. Default File Headers

Code

```php
/**********************************************************************************
	- File Info -
		File name		: file.cs
		Author(s)		: DAVINA Leong Shi Yun
		Date Created	: 3rd Oct 2015

	- Contact Info -
		Email	: leong.shi.yun@gmail.com
		Mobile	: (+65) 9369 3752 [Singapore]

	All content © DAVINA Leong Shi Yun. All Rights Reserved.

* Description:
*
***********************************************************************************/
```

`HTML`

```html
<!----------------------------------------------------------------------------------
	- File Info -
		File name	: index.html
		Author(s)	: DAVINA Leong Shi Yun
		Date Created	: 3rd Oct 2015
	
	- Contact Info -
		Email	: leong.shi.yun@gmail.com
		Mobile	: (+65) 9369 3752 [Singapore]

	All content © DAVINA Leong Shi Yun. All Rights Reserved.
	
* Description:
* 
----------------------------------------------------------------------------------->
```

### 2.2. Code Dividers

Code

```php
// Private Variables ------------------------------------------------------------
```

`HTML`

```html
<!-- Private Variables ------------------------------------------------------ -->
```

Region

```csharp
#region <Region Name>

#endregion
```

## 3. Copyrights

&copy; Davina Leong

## 4. Platform Dependent Compilation

Link: http://docs.unity3d.com/Manual/PlatformDependentCompilation.html

> Commonly Used:
>
> `UNITY_EDITOR`<br> > `UNITY_STANDALONE`<br> > `UNITY_WEBPLAYER`<br> > `UNITY_4_6`<br> > `UNITY_5_0`

How to use:

```csharp
#if UNITY_STANDALONE

#endif
```

## 6. Not Implemented Exception

```csharp
throw new System.NotImplementedException();
```

## 7. Ternary Operator (`?:`)

Syntax:

```csharp
<variable> = (<condition>) ? <if condition is TRUE> : <if condition is FALSE>;
```

Example:

```csharp
Screen.lockCursor = (Screen.lockCursor == false) ? true : false;
```
