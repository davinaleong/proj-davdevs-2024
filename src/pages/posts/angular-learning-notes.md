---
layout: "./../../layouts/post.layout.astro"
title: "Angular Learning Notes"
date: "2024-02-10 21:10:00"
description: "Unlock the potential of Angular with insightful syntax notes, covering string interpolation, property binding, event binding, two-way binding, and structural directives. Discover the <ng-content> tag to retain inner HTML content and explore the powerful EventEmitter for seamless communication between components. Elevate your Angular skills with practical examples and custom naming techniques, ensuring a robust and efficient development experience."
keywords: "Angular Learning, Angular Syntax, Angular String Interpolation, Angular Property Binding, Angular Event Binding, Angular Two-way Binding, Angular Structural Directives, Angular ng-content, Angular EventEmitter, Angular Development, TypeScript, Angular Event Handling, Angular Custom Naming, Angular Tips, Angular Tricks, Dav/Devs Tech Blog, Web Development, Frontend Development."
images:
  [{ url: "angular-learning-notes-0001.png", alt: "Angular Learning Notes" }]
---

## 1. Syntax Notes

| Syntax  | Type                                      | Examples    |
| ------- | ----------------------------------------- | ----------- |
| `{{ }}` | String Interpolation                      | `{{name}}`  |
| `[ ]`   | Property Binding (input)                  | `[colour]`  |
| `( )`   | Event Binding (output)                    | `(click)`   |
| `[( )]` | Two-way Binding (Angular 1 compatibility) | `[(click)]` |
| `*`     | Structural Directives                     | `*ngIf`     |

## 2. Keep Inner HTML Content

Use the `<ng-content>` tag to mark content to be kept.

## 3. EventEmiiter

TypeScript

```ts
import { Component, Output, EventEmitter } from "@angular/core"

@Component({
  selector: "fa-event-binding",
  template: ` <button (click)="onClicked()">Click Me!</button> `,
  styles: [],
})
export class EventBindingComponent {
  @Output() clicked = new EventEmitter<string>()

  onClicked() {
    this.clicked.emit("It works!")
  }
} //end EventBindingComponent class
```

HTML

```html
<fa-event-binding (clicked)="onClicked($event)"></fa-event-binding>
```

Notes:

1. The `EventEmitter` is a generic class that can emit any datatype from primitives to complex object.
1. When declaring the event binding in `HTML`, declare the emitted variable with a `$`. This variable is read-only.

## 4. Custom names for Input/Output

TypeScript

```ts
@Output('clickable') clicked = new EventEmitter<string>();
```

```html
<fa-event-binding (clickable)="onClicked($event)"></fa-event-binding>
```
