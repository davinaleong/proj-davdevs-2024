export interface ContentItemInterface {
  label: string
  className: string
  image?: string
  icon?: string
  link?: string
}

export interface ItemInterface {
  title: string
  draft: boolean
  content?: ContentItemInterface[]
}
