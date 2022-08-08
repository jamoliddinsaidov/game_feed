export type IGenre = { id: number; name: string }

export type IPlatform = {
  platform: {
    id: number
    name: string
  }
  released_at?: string
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
