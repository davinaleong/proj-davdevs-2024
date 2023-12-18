/// app
logLoaded(`app.js`)

/// Variables
const DATA_ELEMENT_ATTR = `data-element`
const DATA_ACTIVE_ATTR = `data-active`
const DATA_THEME_ATTR = `data-theme`

const ACTION_ATTR = `action`
const DISABLED_ATTR = `disabled`
const SELECTED_ATTR = `selected`
const CLASS_ATTR = `class`

const KEY_COOKIE = `cookie`
const KEY_THEME = `theme`

const COOKIE_NO = `no`
const COOKIE_YES = `yes`

const THEME_LIGHT = `light`
const THEME_DARK = `dark`

const STATUS_ERROR = `ERROR`
const STATUS_SUCCESS = `SUCCESS`

const COOKIE_DIALOG_DELAY = 3000

const CONTENTFUL_URL = `https://cdn.contentful.com/spaces/9v840dm5l6au/environments/master/entries`
const CONTENTFUL_ACCESS_TOKEN = `mOHtiKlVzYKgvMoSBQxrAmJ6elmN_ttEieh8SNCksys`
const CONTENTFUL_LIMIT = 1000

const COOKIE_STRINGS = {
  NO: COOKIE_NO,
  YES: COOKIE_YES,
}

const THEME_STRINGS = {
  LIGHT: THEME_LIGHT,
  DARK: THEME_DARK,
}

const VALIDATE_MIN_LENGTH = 5
const VALIDATE_MIN_LENGTH_NAME = 1
const VALIDATE_EMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

/// Functions
function main() {
  logFunction(`main`)

  const cookie = getLocalStorage(KEY_COOKIE)

  toggleMenu()
  toggleTheme(cookie)
  toggleCookieDialog(cookie)
  triggerPrint()
  contactForm()
  fillForm()
  //renderFunny()
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

function contactForm() {
  logFunction(`contactForm`)

  const contactFormEl = getElement(`contact-form`)
  if (!contactFormEl) return

  disableForm(contactFormEl, [false])
  contactFormEl.reset()

  contactFormEl.addEventListener(`submit`, function (event) {
    event.preventDefault()
    contactFormHandler(event)
  })
}

async function contactFormHandler(event) {
  logFunction(`contactFormHandler`)

  const form = event.currentTarget
  const url = form.action

  try {
    const formData = new FormData(form)
    const responseData = await postFormDataAsJson(url, formData)
    const { message, status, errors } = responseData

    toggleFormAlert(contactFormEl, [
      true,
      ``,
      `Oops 😮!`,
      `form__alert-danger`,
      errors,
    ])

    if (status && status === STATUS_SUCCESS) {
      toggleFormAlert(contactFormEl, [
        true,
        message,
        `Done 😁.`,
        `form__alert-danger`,
        null,
      ])
    }
  } catch (error) {
    console.error(error)
  }
}

function disableForm(formEl, params = []) {
  logFunction(`disableForm`, { params })

  const [toggle] = params

  if (!formEl) return

  const inputEls = formEl.querySelectorAll(`input`)
  const selectEls = formEl.querySelectorAll(`select`)
  const textareaEls = formEl.querySelectorAll(`textarea`)
  const btnEls = formEl.querySelectorAll(`button`)

  inputEls.forEach(function (inputEl) {
    inputEl.removeAttribute(DISABLED_ATTR)

    if (toggle) {
      inputEl.setAttribute(DISABLED_ATTR, `${toggle}`)
    }
  })

  selectEls.forEach(function (selectEl) {
    selectEl.removeAttribute(DISABLED_ATTR)

    if (toggle) {
      selectEl.setAttribute(DISABLED_ATTR, `${toggle}`)
    }
  })

  textareaEls.forEach(function (textareaEl) {
    textareaEl.removeAttribute(DISABLED_ATTR)

    if (toggle) {
      textareaEl.setAttribute(DISABLED_ATTR, `${toggle}`)
    }
  })

  btnEls.forEach(function (btnEl) {
    btnEl.removeAttribute(DISABLED_ATTR)

    if (toggle) {
      btnEl.setAttribute(DISABLED_ATTR, `${toggle}`)
    }
  })
}

function toggleFormAlert(formEl, params = []) {
  logFunction(`toggleFormAlert`, { params })

  if (!formEl) return

  const formAlertEl = getElement(formEl, `form-alert`)
  if (!formAlertEl) return

  const [toggle, message, heading, type, errors] = params
  if (!toggle) {
    formAlertEl.setAttribute(CLASS_ATTR, `form__alert`)
    formAlertEl.removeAttribute(DATA_ACTIVE_ATTR)
    return
  }

  let errorsHtml = ``
  const errorKeys = Object.keys(errors)

  errorKeys.map(function (errorKey) {
    const errorList = errors[errorKey]
    errorList.map(function (message) {
      errorsHtml += `<li>${message}</li>`
    })
  })

  const headingHtml =
    heading === ``
      ? ``
      : `<h3 class="form__alert__header | text-2xl font-bold">${heading}</h3>`
  const bodyHtml =
    message === `` ? `<ol class="list">${errorsHtml}</ol>` : `<p>${message}</p>`
  formAlertEl.innerHTML = `${headingHtml} ${bodyHtml}`
  formAlertEl.classList.add(type)
  formAlertEl.setAttribute(DATA_ACTIVE_ATTR, String(true))
}

function fillForm() {
  logFunction(`fillForm`)

  const contactFormEl = getElement(`contact-form`)
  const btnFillFormEl = getElement(`btn-fill-form`)

  if (!contactFormEl || !btnFillFormEl) return

  btnFillFormEl.addEventListener(`click`, function (event) {
    event.preventDefault()

    contactFormEl.reset()

    const firstNameInputEl = contactFormEl.querySelector(
      `input[name="first_name"]`
    )
    const emailInputEl = contactFormEl.querySelector(`input[name="email"]`)
    const subjectInputEl = contactFormEl.querySelector(`select[name="subject"]`)
    const messageInputEl = contactFormEl.querySelector(
      `textarea[name="message"]`
    )

    if (
      !firstNameInputEl ||
      !emailInputEl ||
      !subjectInputEl ||
      !messageInputEl
    )
      return

    firstNameInputEl.value = `Jane Doe`
    emailInputEl.value = `janedoe@example.com`
    subjectInputEl
      .querySelector(`option:nth-of-type(2)`)
      .setAttribute(SELECTED_ATTR, true)
    messageInputEl.value = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, repellendus.`
  })
}

function resetForm() {
  logFunction(`resetForm`)

  const contactFormEl = getElement(`contact-form`)
  if (!contactFormEl) return

  const btnResetEl = contactFormEl.querySelector(`button[type="reset"]`)
  if (!btnResetEl) return

  btnResetEl.addEventListener(`click`, function (event) {
    event.preventDefault()

    contactFormEl.reset()

    const subjectInputEl = contactFormEl.querySelector(`select[name="subject"]`)
    if (!subjectInputEl) return

    const optionEls = subjectInputEl.querySelectorAll(`option`)
    optionEls.forEach(function (optionEl, index) {
      optionEl.removeAttribute(SELECTED_ATTR)

      if (index === 0) {
        optionEl.setAttribute(SELECTED_ATTR, true)
      }
    })
  })
}

async function renderFunny() {
  logFunction(`renderFunny`)

  const funnyContentEl = getElement(`funny-content`)
  if (!funnyContentEl) return

  // Fetch Jokes
  /*
  fetch('https://reqbin.com/echo/get/json', {
  headers: {Authorization: 'Bearer {token}'}
})
  */
  const response = await fetch(CONTENTFUL_URL, {
    headers: { Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}` },
  })
  const { items } = await response.json()
  console.log(`data`, data)
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

async function postFormDataAsJson(url, formData) {
  logFunction(`postFormDataAsJson`, { url, formData })

  const plainFormData = Object.fromEntries(formData.entries())
  const formDataJsonString = JSON.stringify(plainFormData)

  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: formDataJsonString,
  }

  const response = await fetch(url, fetchOptions)
  return response.json()
}

/// Execution
document.addEventListener(`DOMContentLoaded`, main)
