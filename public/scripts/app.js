/// app
logLoaded(`app.js`)

/// Variables
const DATA_ELEMENT_ATTR = `data-element`
const DATA_ACTIVE_ATTR = `data-active`
const DATA_THEME_ATTR = `data-theme`

const KEY_COOKIE = `cookie`
const KEY_THEME = `theme`

const COOKIE_NO = `no`
const COOKIE_YES = `yes`

const THEME_LIGHT = `light`
const THEME_DARK = `dark`

const COOKIE_DIALOG_DELAY = 3000

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

  const cookie = getLocalStorage(KEY_COOKIE)

  toggleMenu()
  toggleTheme(cookie)
  toggleCookieDialog(cookie)
  triggerPrint()
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

function toggleTheme(cookie) {
  logFunction(`toggleTheme`, { cookie })

  let theme = THEME_LIGHT
  if (cookie === COOKIE_YES) {
    const themeValue = getLocalStorage(KEY_THEME)
    if (themeValue !== ``) {
      theme = themeValue
    }
  }

  try {
    const body = document.querySelector(`body`)
    if (!body) return
    console.log(body)
    body.setAttribute(DATA_THEME_ATTR, theme)

    const btnThemeEl = getElement(`btn-theme`)
    if (!btnThemeEl) return

    btnThemeEl.addEventListener(`click`, function (event) {
      event.preventDefault()

      const dataTheme = body.getAttribute(DATA_THEME_ATTR)
      logVariable(`dataTheme`, dataTheme)

      if (dataTheme && dataTheme === THEME_LIGHT) {
        body.setAttribute(DATA_THEME_ATTR, THEME_DARK)
        if (cookie === COOKIE_YES) {
          setLocalStorage(KEY_THEME, THEME_DARK)
        }
      } else {
        body.setAttribute(DATA_THEME_ATTR, THEME_LIGHT)
        if (cookie === COOKIE_YES) {
          setLocalStorage(KEY_THEME, THEME_LIGHT)
        }
      }
    })
  } catch (error) {
    console.error(error)
  }
}

function toggleCookieDialog(cookie) {
  logFunction(`toggleCookieDialog`, { cookie })

  const cookieDialogEl = getElement(`cookie-dialog`)
  if (!cookieDialogEl) return

  const btnCloseEl = getElement(`btn-close`, cookieDialogEl)
  if (!btnCloseEl) return

  const btnYesEl = getElement(`btn-yes`, cookieDialogEl)
  if (!btnYesEl) return

  const btnNoEl = getElement(`btn-no`, cookieDialogEl)
  if (!btnNoEl) return

  if (cookie !== COOKIE_NO) {
    setTimeout(function () {
      cookieDialogEl.show()
    }, COOKIE_DIALOG_DELAY)
  }

  btnCloseEl.addEventListener(`click`, function (event) {
    event.preventDefault()
    cookieDialogEl.close()
  })

  btnYesEl.addEventListener(`click`, function (event) {
    event.preventDefault()
    setLocalStorage(KEY_COOKIE, COOKIE_YES)
    setLocalStorage(KEY_THEME, THEME_LIGHT)
    const themeAttr = document.body.getAttribute(DATA_THEME_ATTR)
    if (themeAttr) {
      setLocalStorage(KEY_THEME, themeAttr)
    }
    cookieDialogEl.close()
  })

  btnNoEl.addEventListener(`click`, function (event) {
    event.preventDefault()

    const cookieValue = getLocalStorage(KEY_COOKIE)
    if (cookieValue === COOKIE_YES) {
      setLocalStorage(KEY_COOKIE, COOKIE_NO)
    }

    cookieDialogEl.close()
  })
}

function triggerPrint() {
  logFunction(`triggerPrint`)

  const btnPrintEl = getElement(`btn-print`)
  if (!btnPrintEl) return

  btnPrintEl.addEventListener(`click`, function (event) {
    event.preventDefault()
    window.print()
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
