export interface ContentItemInterface {
  title: string
  className: string
  image?: string
  images?: ImageInterface[]
  icon?: string
  link?: string
  links?: LinkInterface[]
}

export interface ImageInterface {
  url: string
  alt: string
}

export interface LinkInterface {
  title: string
  url: string
  target?: string
}

export interface ItemInterface {
  title: string
  draft: boolean
  content?: ContentItemInterface[]
}
