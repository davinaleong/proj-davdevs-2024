import "../styles/app.scss"
import {
  logFunction,
  getElement,
  logLoaded,
  getLocalStorage,
  setLocalStorage,
  COOKIE_DIALOG_DELAY,
  logValue,
} from "./helpers"
import {
  DATA_ACTIVE_ATTR,
  DATA_THEME_ATTR,
  THEME_LIGHT,
  THEME_DARK,
  KEY_COOKIE,
  COOKIE_NO,
  COOKIE_YES,
  KEY_THEME,
} from "./strings"
import { config } from "./config"

logLoaded(`app.ts`)

/// Variables

/// Functions
function main() {
  logFunction(`main`)

  const cookie: string = getLocalStorage(KEY_COOKIE)

  renderPrimaryHeader()
  renderPrimaryFooter()
  toggleMenu()
  toggleTheme(cookie)
  toggleCookieDialog(cookie)
  triggerPrint()
}

function renderPrimaryHeader(): void {
  logFunction(`renderPrimaryHeader`)

  const primaryHeaderEl: HTMLElement | null = getElement(`primary-header`)

  if (primaryHeaderEl) {
    primaryHeaderEl.innerHTML = `
      <div class="wrapper primary-header-wrapper mx-auto">
        <a href="index.html" class="btn btn-primary-header">
          <img src="/src/assets/images/logo-white-svg.svg" /> Dav/Devs
        </a>

        <nav class="primary-header__nav">
          <a href="index.html" class="primary-header__nav__link">Home</a>
          <a href="resume.html" class="primary-header__nav__link">Resume</a>
          <a href="portfolio.html" class="primary-header__nav__link">Portfolio</a>
          <a href="contact.html" class="primary-header__nav__link">Contact</a>
          <a href="funny.html" class="primary-header__nav__link">Funny</a>
        </nav>

        <button
          type="button"
          class="btn btn-primary-header"
          data-element="primary-header__menu"
        >
          <i class="fa-thin fa-sharp fa-bars"></i>
          <span class="sr-only">Menu</span>
        </button>
      </div>

      <button
        type="button"
        class="btn btn-primary-header"
        data-element="primary-header__close"
      >
        <i class="fa-thin fa-sharp fa-xmark"></i>
        <span class="sr-only">Close</span>
      </button>
      `
  }
}

function renderPrimaryFooter(): void {
  logFunction(`renderPrimaryFooter`)

  const primaryFooterEl: HTMLElement | null = getElement(`primary-footer`)

  if (primaryFooterEl) {
    primaryFooterEl.innerHTML = `
    <div class="wrapper mx-auto">
      <div class="primary-footer__top">
        <div class="primary-footer__top__col | flow">
          <a href="#" class="btn btn-primary-footer">
            <img
              src="/src/assets/images/logo-white-svg.svg"
              alt="Dav/Devs footer logo"
              srcset=""
            />
            <div>Dav/Devs</div>
          </a>
        </div>
        <div class="primary-footer__top__col | flow">
          <h2 class="primary-footer__heading">Home</h2>
          <ul class="primary-footer__list">
            <li><a href="index.html#home-skills">Skills</a></li>
            <li><a href="index.html#home-featured">Featured Projects</a></li>
            <li><a href="index.html#home-talks">Talks</a></li>
            <li><a href="index.html#home-social">Social</a></li>
          </ul>
        </div>
        <div class="primary-footer__top__col | flow">
          <h2 class="primary-footer__heading">Resume</h2>
          <ul class="primary-footer__list">
            <li><a href="resume.html#resume-objective">Objective</a></li>
            <li><a href="resume.html#resume-skills">Skils</a></li>
            <li><a href="resume.html#resume-experience">Experience</a></li>
            <li><a href="resume.html#resume-education">Education</a></li>
            <li><a href="resume.html#resume-certificates">Certificates</a></li>
            <li><a href="resume.html#resume-talks">Talks</a></li>
            <li><a href="resume.html#resume-hobbies">Hobbies</a></li>
            <li><a href="resume.html#resume-testimonials">Testimonials</a></li>
          </ul>
        </div>
        <div class="primary-footer__top__col | flow">
          <h2 class="primary-footer__heading">Portfolio</h2>
          <ul class="primary-footer__list">
            <li><a href="#">HTML</a></li>
            <li><a href="#">CSS</a></li>
            <li><a href="#">Bootstrap</a></li>
            <li><a href="#">Laravel</a></li>
            <li><a href="#">JavaScript</a></li>
            <li><a href="#">ReactJS</a></li>
          </ul>
        </div>
        <div class="primary-footer__top__col | flow">
          <h2 class="primary-footer__heading">Social</h2>
          <ul class="primary-footer__list">
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">YouTube</a></li>
            <li><a href="#">GitHub</a></li>
          </ul>
        </div>
      </div>
      <div class="primary-footer__bottom">
        <p class="text-center text-sm">
          Dav/Devs &copy; Davina Leong, since ${config.year}.
        </p>
      </div>
    </div>
    `
  }
}

function toggleMenu(): void {
  logFunction(`toggleMenu`)

  const primaryHeaderEl: HTMLElement | null = getElement(`primary-header`)
  if (primaryHeaderEl) {
    primaryHeaderEl.removeAttribute(DATA_ACTIVE_ATTR)

    const btnMenuEl = getElement(`primary-header__menu`, primaryHeaderEl)
    if (btnMenuEl) {
      btnMenuEl.addEventListener(`click`, function (event) {
        event.preventDefault()
        primaryHeaderEl.setAttribute(DATA_ACTIVE_ATTR, `true`)
      })
    }

    const btnCloseEl = getElement(`primary-header__close`, primaryHeaderEl)
    if (btnCloseEl) {
      btnCloseEl.addEventListener(`click`, function (event) {
        event.preventDefault()
        primaryHeaderEl.removeAttribute(DATA_ACTIVE_ATTR)
      })
    }
  }
}

function toggleTheme(cookie: string): void {
  logFunction(`toggleTheme`, { cookie })

  let theme: string = THEME_LIGHT
  if (cookie === COOKIE_YES) {
    const themeValue: string = getLocalStorage(KEY_THEME)
    if (themeValue !== ``) {
      theme = themeValue
    }
  }

  try {
    const body: HTMLElement | null = document.querySelector(`body`)
    if (body) {
      body.setAttribute(DATA_THEME_ATTR, theme)
    }
  } catch (error) {
    console.error(error)
  }

  const btnThemeEl: HTMLElement | null = getElement(`btn-theme`)

  if (btnThemeEl) {
    btnThemeEl.addEventListener(`click`, function (event) {
      event.preventDefault()

      const body: HTMLElement | null = document.body
      if (body) {
        const dataTheme: string | null = body?.getAttribute(DATA_THEME_ATTR)
        logValue(`dataTheme`, dataTheme)

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
      }
    })
  }
}

function toggleCookieDialog(cookie: string): void {
  logFunction(`toggleCookieDialog`, { cookie })

  const cookieDialogEl: HTMLElement | null = getElement(`cookie-dialog`)
  if (cookieDialogEl) {
    const btnCloseEl: HTMLElement | null = getElement(
      `btn-close`,
      cookieDialogEl
    )
    const btnYesEl: HTMLElement | null = getElement(`btn-yes`, cookieDialogEl)
    const btnNoEl: HTMLElement | null = getElement(`btn-no`, cookieDialogEl)

    if (cookie !== COOKIE_NO) {
      setTimeout(function () {
        cookieDialogEl.show()
      }, COOKIE_DIALOG_DELAY)
    }

    if (btnCloseEl) {
      btnCloseEl.addEventListener(`click`, function (event) {
        event.preventDefault()
        cookieDialogEl.close()
      })
    }

    if (btnYesEl) {
      btnYesEl.addEventListener(`click`, function (event) {
        event.preventDefault()
        setLocalStorage(KEY_COOKIE, COOKIE_YES)
        setLocalStorage(KEY_THEME, THEME_LIGHT)
        const themeAttr: string | null =
          document.body.getAttribute(DATA_THEME_ATTR)
        if (themeAttr) {
          setLocalStorage(KEY_THEME, themeAttr)
        }
        cookieDialogEl.close()
      })
    }

    if (btnNoEl) {
      btnNoEl.addEventListener(`click`, function (event) {
        event.preventDefault()

        const cookieValue: string = getLocalStorage(KEY_COOKIE)
        if (cookieValue === COOKIE_YES) {
          setLocalStorage(KEY_COOKIE, COOKIE_NO)
        }

        cookieDialogEl.close()
      })
    }
  }
}

function triggerPrint(): void {
  logFunction(`triggerPrint`)

  const btnPrintEl: HTMLElement | null = getElement(`btn-print`)
  if (btnPrintEl) {
    btnPrintEl.addEventListener(`click`, function (event) {
      event.preventDefault()
      window.print()
    })
  }
}

/// Execute
document.addEventListener(`DOMContentLoaded`, main)
