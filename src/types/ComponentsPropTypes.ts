import { TablerIcon } from '@tabler/icons'
import { IGenre, IGamesState } from './GamePropTypes'

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
  description?: string
  gamesState: IGamesState
}
