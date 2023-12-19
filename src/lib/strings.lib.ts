// Interfaces
export interface StrLibInterface {
  STR_FALSE: string
  STR_TRUE: string
  STR_YES: string
  STR_NO: string
}

export interface AttrStrLibInterface {
  STYLE_ATTR: string
}

export interface DataAttrStrLibInterface {
  DATA_ELEMENT_ATTR: string
  DATA_ACTIVE_ATTR: string
  DATA_THEME_ATTR: string
}

export interface ThemeStrLibInterface {
  THEME_LIGHT: string
  THEME_DARK: string
}

export interface ClassStrLibInterface {
  CLASS_THEME_LIGHT: string
  CLASS_THEME_DARK: string
}

export interface CookieStrLibInterface {
  COOKIE_YES: string
  COOKIE_NO: string
}

export interface KeyStrLibInterface {
  KEY_COOKIE: string
  KEY_THEME: string
}

export interface StrsLibInterface {
  STYLE_ATTR: string
  DATA_ELEMENT_ATTR: string
  DATA_ACTIVE_ATTR: string
  DATA_THEME_ATTR: string
  THEME_LIGHT: string
  THEME_DARK: string
  CLASS_THEME_LIGHT: string
  CLASS_THEME_DARK: string
  COOKIE_YES: string
  COOKIE_NO: string
  KEY_COOKIE: string
  KEY_THEME: string
  STR_FALSE: string
  STR_TRUE: string
  STR_YES: string
  STR_NO: string
  attrStrLib: AttrStrLibInterface
  dataAttrStrLib: DataAttrStrLibInterface
  themeStrLib: ThemeStrLibInterface
  classStrLib: ClassStrLibInterface
  cookieStrLib: CookieStrLibInterface
  keyStrLib: KeyStrLibInterface
  str: StrLibInterface
}

// Variables
export const STYLE_ATTR: string = `style`

export const DATA_ELEMENT_ATTR: string = `data-element`
export const DATA_ACTIVE_ATTR: string = `data-active`
export const DATA_THEME_ATTR: string = `data-theme`

export const THEME_LIGHT: string = `light`
export const THEME_DARK: string = `dark`

export const CLASS_THEME_LIGHT: string = `theme-${THEME_LIGHT}`
export const CLASS_THEME_DARK: string = `theme-${THEME_DARK}`

export const COOKIE_YES: string = `yes`
export const COOKIE_NO: string = `no`

export const KEY_COOKIE: string = `cookie`
export const KEY_THEME: string = `theme`

export const STR_FALSE: string = `false`
export const STR_TRUE: string = `true`
export const STR_YES: string = `yes`
export const STR_NO: string = `no`

export const attrStrLib: AttrStrLibInterface = {
  STYLE_ATTR,
}

export const dataAttrStrLib: DataAttrStrLibInterface = {
  DATA_ELEMENT_ATTR,
  DATA_ACTIVE_ATTR,
  DATA_THEME_ATTR,
}

export const themeStrLib: ThemeStrLibInterface = {
  THEME_LIGHT,
  THEME_DARK,
}

export const classStrLib: ClassStrLibInterface = {
  CLASS_THEME_LIGHT,
  CLASS_THEME_DARK,
}

export const cookieStrLib: CookieStrLibInterface = {
  COOKIE_YES,
  COOKIE_NO,
}

export const keyStrLib: KeyStrLibInterface = {
  KEY_COOKIE,
  KEY_THEME,
}

export const str: StrLibInterface = {
  STR_FALSE,
  STR_TRUE,
  STR_YES,
  STR_NO,
}

export const strsLib: StrsLibInterface = {
  STYLE_ATTR,
  DATA_ELEMENT_ATTR,
  DATA_ACTIVE_ATTR,
  DATA_THEME_ATTR,
  THEME_LIGHT,
  THEME_DARK,
  CLASS_THEME_LIGHT,
  CLASS_THEME_DARK,
  COOKIE_YES,
  COOKIE_NO,
  KEY_COOKIE,
  KEY_THEME,
  STR_FALSE,
  STR_TRUE,
  STR_YES,
  STR_NO,
  attrStrLib,
  dataAttrStrLib,
  themeStrLib,
  classStrLib,
  cookieStrLib,
  keyStrLib,
  str,
}
