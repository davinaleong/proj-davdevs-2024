import { DATA_ACTIVE_ATTR, DATA_ELEMENT_ATTR, STR_TRUE } from "./strings.lib"

// Interfaces
export interface HelperLibInterface {
  COOKIE_DIALOG_DELAY: number
  now: Date
  logLoaded(name: string): void
  logFunction(name: string, params?: any): void
  logValue(name: string, value: string | number | boolean | null): void
  getElement(name: string, parent?: HTMLElement): HTMLElement | null
  getAllElements(name: string, parent?: HTMLElement): NodeListOf<Element>
  toggleAttribute(element: HTMLElement, toggle: boolean, attr: string): void
  getLocalStorage(key: string): string
  setLocalStorage(key: string, value: string): void
  getRandomInt(min: number, max: number): number
  nl2br(string: string): string
  sort(array: any, key: string): any
  sortDesc(array: any, key: string): any
  sortPosts(array: any, key: string): any
  sortPostsDesc(array: any, key: string): any
}

// Variables
export const COOKIE_DIALOG_DELAY: number = 3000
export const now: Date = new Date()

// Functions
export function logLoaded(name: string): void {
  if (import.meta.env.LOG_TO_CONSOLE === STR_TRUE)
    console.log(`${name} loaded.`)
}

export function logFunction(name: string, params: any = {}): void {
  if (import.meta.env.LOG_TO_CONSOLE === STR_TRUE)
    console.log(`fn: ${name}:(${JSON.stringify(params)})`)
}

export function logValue(
  name: string,
  value: string | number | boolean | null
): void {
  if (import.meta.env.LOG_TO_CONSOLE === STR_TRUE) console.log(name, value)
}

export function getElement(
  name: string,
  parent?: HTMLElement
): HTMLElement | null {
  logFunction(`getElement`, { name, parent })

  if (parent) {
    return parent.querySelector(`[${DATA_ELEMENT_ATTR}="${name}"]`)
  }

  return document.querySelector(`[${DATA_ELEMENT_ATTR}="${name}"]`)
}

export function getAllElements(
  name: string,
  parent?: HTMLElement
): NodeListOf<Element> {
  logFunction(`getElement`, { name, parent })

  if (parent) {
    return parent.querySelectorAll(`[${DATA_ELEMENT_ATTR}="${name}"]`)
  }

  return document.querySelectorAll(`[${DATA_ELEMENT_ATTR}="${name}"]`)
}

export function toggleAttribute(
  element: HTMLElement,
  toggle: boolean = false,
  attr: string = DATA_ACTIVE_ATTR
): void {
  logFunction(`toggleAttribute`, { element, toggle, attr })

  if (toggle) {
    element.setAttribute(attr, String(toggle))
  } else {
    element.removeAttribute(attr)
  }
}

export function getLocalStorage(key: string): string {
  logFunction(`getLocalStorage`, { key })

  try {
    const value: string | null = localStorage.getItem(key)
    if (value) {
      return value
    }

    return ``
  } catch (error) {
    console.log(`getLocalStorage`, error)
    return ``
  }
}

export function setLocalStorage(key: string, value: string): void {
  logFunction(`setLocalStorage`, { key, value })

  try {
    localStorage.setItem(key, value)
  } catch (error) {
    console.log(`setLocalStorage`, error)
  }
}

export function getRandomInt(min: number, max: number): number {
  logFunction(`getRandomInt`, { min, max })

  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function nl2br(string: string): string {
  return string.replace(/(?:\r\n|\r|\n)/g, "<br/>")
}

export function sort(array: any, key: string): any {
  const sorted: any = [...array]
  return sorted.sort((a: any, b: any) => {
    const A = a[key]
    const B = b[key]

    let comparison = 0
    if (A > B) {
      comparison = 1
    } else if (A < B) {
      comparison = -1
    } else {
      comparison = 0
    }

    return comparison
  })
}

export function sortDesc(array: any, key: string): any {
  const sorted: any = [...array]
  return sorted.sort((a: any, b: any) => {
    const A = a[key]
    const B = b[key]

    let comparison = 0
    if (A > B) {
      comparison = -1
    } else if (A < B) {
      comparison = 1
    } else {
      comparison = 0
    }

    return comparison
  })
}

export function sortPosts(array: any, key: string): any {
  const sorted: any = [...array]
  return sorted.sort((a: any, b: any) => {
    const A = a.frontmatter[key]
    const B = b.frontmatter[key]

    let comparison = 0
    if (A > B) {
      comparison = 1
    } else if (A < B) {
      comparison = -1
    } else {
      comparison = 0
    }

    return comparison
  })
}

export function sortPostsDesc(array: any, key: string): any {
  const sorted: any = [...array]
  return sorted.sort((a: any, b: any) => {
    const A = a.frontmatter[key]
    const B = b.frontmatter[key]

    let comparison = 0
    if (A > B) {
      comparison = -1
    } else if (A < B) {
      comparison = 1
    } else {
      comparison = 0
    }

    return comparison
  })
}

export const helpersLib: HelperLibInterface = {
  COOKIE_DIALOG_DELAY,
  now,
  logLoaded,
  logFunction,
  logValue,
  getElement,
  getAllElements,
  toggleAttribute,
  getLocalStorage,
  setLocalStorage,
  getRandomInt,
  nl2br,
  sort,
  sortDesc,
  sortPosts,
  sortPostsDesc,
}
