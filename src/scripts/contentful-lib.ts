import { ContentfulClientApi, createClient } from "contentful"
import { logLoaded } from "./helpers"

logLoaded(`contentful-lib`)

// Interfaces
export interface ContentfulLibInterface {
  CONTENTFUL_CDN: string
  CONTENTFUL_ACCESS_TOKEN: string
  CONTENTFUL_SPACE_ID: string
  CONTENTFUL_ENVIRONMENT_ID: string
  CONTENTFUL_TYPE_ID: string
  CONTENTFUL_TAG_ID: string
  CONTENTFUL_LIMIT: string
  client: ContentfulClientApi<undefined>
  getEntries(): Promise<any>
}

// Variables
const env = import.meta.env

export const CONTENTFUL_CDN: string = env.CONTENTFUL_CDN
export const CONTENTFUL_ACCESS_TOKEN: string = env.CONTENTFUL_ACCESS_TOKEN
export const CONTENTFUL_SPACE_ID: string = env.CONTENTFUL_SPACE_ID
export const CONTENTFUL_ENVIRONMENT_ID: string = env.CONTENTFUL_ENVIRONMENT_ID
export const CONTENTFUL_TYPE_ID: string = env.CONTENTFUL_TYPE_ID
export const CONTENTFUL_TAG_ID: string = env.CONTENTFUL_TAG_ID
export const CONTENTFUL_LIMIT: string = env.CONTENTFUL_LIMIT

// Functions
export const client = createClient({
  space: CONTENTFUL_SPACE_ID,
  environment: CONTENTFUL_ENVIRONMENT_ID,
  accessToken: CONTENTFUL_ACCESS_TOKEN,
})

export async function getEntries(): Promise<any> {
  try {
    const { items } = await client.getEntries({
      content_type: CONTENTFUL_TYPE_ID,
      limit: Number(CONTENTFUL_LIMIT),
    })

    return items
  } catch (error) {
    console.error(`contentful-lib.ts`, error)
    return []
  }
}

export const contentfulLib: ContentfulLibInterface = {
  CONTENTFUL_CDN,
  CONTENTFUL_ACCESS_TOKEN,
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ENVIRONMENT_ID,
  CONTENTFUL_TYPE_ID,
  CONTENTFUL_TAG_ID,
  CONTENTFUL_LIMIT,
  client,
  getEntries,
}
