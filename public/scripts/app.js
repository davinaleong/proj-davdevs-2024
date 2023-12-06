/// app
logLoaded(`app.js`)

/// Variables
const DATA_ELEMENT_ATTR = `data-element`
const DATA_ACTIVE_ATTR = `data-active`

const KEY_COOKIE = `cookie`
const KEY_THEME = `theme`

const COOKIE_NO = `no`
const COOKIE_YES = `yes`

const THEME_LIGHT = `light`
const THEME_DARK = `dark`

const COOKIE_STRINGS = {
  NO: COOKIE_NO,
  YES: COOKIE_YES,
}

const THEME_STRINGS = {
  LIGHT: THEME_LIGHT,
  DARK: THEME_DARK,
}

/// Functions
function main() {
  logFunction(`main`)

  toggleMenu()
}

/// Functions - Elements
function toggleMenu() {
  logFunction(`toggleMenu`)

  const primaryHeaderEl = getElement(`primary-header`)

  if (!primaryHeaderEl) return

  primaryHeaderEl.removeAttribute(DATA_ACTIVE_ATTR)

  const btnMenuEl = getElement(`primary-header__menu`, primaryHeaderEl)
  if (!btnMenuEl) return
  btnMenuEl.addEventListener(`click`, function (event) {
    event.preventDefault()
    primaryHeaderEl.setAttribute(DATA_ACTIVE_ATTR, `true`)
  })

  const btnCloseEl = getElement(`primary-header__close`, primaryHeaderEl)
  if (!btnCloseEl) return
  btnCloseEl.addEventListener(`click`, function (event) {
    event.preventDefault()
    primaryHeaderEl.removeAttribute(DATA_ACTIVE_ATTR)
  })
}

/// Functions - Helpers
function logLoaded(key = `script.js`) {
  console.log(`${key} loaded.`)
}

function logFunction(key = `function`, value = {}) {
  console.log(`fn: ${key}(${JSON.stringify(value)})`)
}

function logVariable(key = `variable`, value = ``) {
  console.log(key, value)
}

function getElement(key = ``, parent = null) {
  logFunction(`getElement`, { key, parent })

  if (parent) {
    try {
      return parent.querySelector(`[${DATA_ELEMENT_ATTR}="${key}"]`)
    } catch (error) {
      console.error(error)
    }
  }

  try {
    return document.querySelector(`[${DATA_ELEMENT_ATTR}="${key}"]`)
  } catch (error) {
    console.error(error)
  }
}

function getElements(key = ``, parent = null) {
  logFunction(`getElements`, { key, parent })

  if (parent) {
    try {
      return parent.querySelectorAll(`[${DATA_ELEMENT_ATTR}="${key}"]`)
    } catch (error) {
      console.error(error)
    }
  }

  try {
    return document.querySelectorAll(`[${DATA_ELEMENT_ATTR}="${key}"]`)
  } catch (error) {
    console.error(error)
  }
}

function getLocalStorage(key) {
  logFunction(`getLocalStorage`, { key })

  try {
    return localStorage.getItem(key)
  } catch (error) {
    console.error(error)
  }
}

function setLocalStorage(key, value = null) {
  logFunction(`setLocalStorage`, { key, value })

  if (value) {
    try {
      localStorage.setItem(key, value)
    } catch (error) {
      console.error(error)
    }
  }
}

/// Execution
document.addEventListener(`DOMContentLoaded`, main)
