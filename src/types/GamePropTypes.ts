export type IGenre = { id: number; name: string }

export type IPlatform = {
  platform: {
    id: number
    name: string
  }
  released_at?: string
}

export type IDeveloper = {
  id: number
  name: string
}

export type IPublisher = {
  id: number
  name: string
}

export type IRating = {
  id: number
  title: string
  count: number
  percent: number
}

export type IGame = {
  id: number
  name: string
  genres: IGenre[]
  background_image?: string
  rating?: number
}

export type IGamesState = {
  games: IGame[]
  loading: boolean
  hasError: boolean
}

export type IGameDetails = {
  id: number
  name: string
  background_image: string
  description_raw: string
  developers: IDeveloper[]
  genres: IGenre[]
  platforms: IPlatform[]
  publishers: IPublisher[]
  ratings: IRating[]
  released: string
  website?: string
  metacritic: number
}

export type IStats = {
  label: 'exceptional' | 'recommended' | 'meh' | 'skip'
  stats: string
  progress: number
  color: string
}

export type IScreenshot = {
  id: number
  image: string
}
