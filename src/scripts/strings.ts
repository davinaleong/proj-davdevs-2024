import { logLoaded } from "./helpers"

logLoaded(`strings.ts`)

export interface AttrStrInterface {
  STYLE_ATTR: string
}

export interface DataAttrStrInterface {
  DATA_ELEMENT_ATTR: string
  DATA_ACTIVE_ATTR: string
  DATA_THEME_ATTR: string
}

export interface ThemeStrInterface {
  THEME_LIGHT: string
  THEME_DARK: string
}

export interface ClassStrInterface {
  CLASS_THEME_LIGHT: string
  CLASS_THEME_DARK: string
}

export interface CookieStrInterface {
  COOKIE_YES: string
  COOKIE_NO: string
}

export interface KeyStrInterface {
  KEY_COOKIE: string
  KEY_THEME: string
}

export interface StringsInterface {
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
  attrStr: AttrStrInterface
  dataAttrStr: DataAttrStrInterface
  themeStr: ThemeStrInterface
  classStr: ClassStrInterface
  cookieStr: CookieStrInterface
  keyStr: KeyStrInterface
}

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

export const attrStr: AttrStrInterface = {
  STYLE_ATTR,
}

export const dataAttrStr: DataAttrStrInterface = {
  DATA_ELEMENT_ATTR,
  DATA_ACTIVE_ATTR,
  DATA_THEME_ATTR,
}

export const themeStr: ThemeStrInterface = {
  THEME_LIGHT,
  THEME_DARK,
}

export const classStr: ClassStrInterface = {
  CLASS_THEME_LIGHT,
  CLASS_THEME_DARK,
}

export const cookieStr: CookieStrInterface = {
  COOKIE_YES,
  COOKIE_NO,
}

export const keyStr: KeyStrInterface = {
  KEY_COOKIE,
  KEY_THEME,
}

export const strings: StringsInterface = {
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
  attrStr,
  dataAttrStr,
  themeStr,
  classStr,
  cookieStr,
  keyStr,
}
