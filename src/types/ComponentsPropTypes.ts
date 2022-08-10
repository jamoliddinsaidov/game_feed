import { TablerIcon } from '@tabler/icons'
import React from 'react'
import { IGenre, IGamesState, IPlatform, IDeveloper, IPublisher } from './GamePropTypes'

export interface LinksGroupProps {
  icon: TablerIcon
  label: string
  initiallyOpened?: boolean
  links?: { label: string; link: string }[]
}

export interface LayoutProps {
  children: React.ReactNode
}

export interface GameCardProps {
  id: number
  background_image?: string
  genres: IGenre[]
  name: string
  rating?: number
}

export interface MainContainerProps {
  title: string
  gamesState: IGamesState
  searchProps: SearchFilterProps
}

export interface SearchFilterProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClick: () => void
}

export interface FetchFilteredGamesProps {
  date?: {
    start: string
    end: string
  }
  filterByRating?: boolean
  platformId?: string
  genre?: string
  search?: string
}

export interface StatsRingProps {
  data: {
    label: 'exceptional' | 'recommended' | 'meh' | 'skip'
    stats: string
    progress: number
    color: string
  }[]
}

export interface BannerProps {
  background_image: string
  name: string
  metacritic: number
}

export interface GameDetailsFooterProps {
  platforms: IPlatform[]
  developers: IDeveloper[]
  publishers: IPublisher[]
  genres: IGenre[]
}
