import { sub, add, format } from 'date-fns'
import { IGenre } from '../types/GamePropTypes'

export function getDateById(id: string): [string, string] {
  const date = new Date()
  const prevYear = new Date().getFullYear() - 1
  const thisyear = date.getFullYear()
  const dateFormat = 'yyyy-MM-dd'
  let start = '',
    end = ''

  switch (id) {
    case 'last30days':
      const last30days = sub(date, { days: 30 })
      start = format(last30days, dateFormat)
      end = format(date, dateFormat)
      break
    case 'thisweek':
      const thisweek = sub(date, { days: 7 })
      start = format(thisweek, dateFormat)
      end = format(date, dateFormat)
      break
    case 'nextweek':
      const nextweek = add(date, { days: 7 })
      end = format(nextweek, dateFormat)
      start = format(date, dateFormat)
      break
    case 'bestoftheyear':
      start = `${thisyear}-01-01`
      end = `${thisyear}-12-31`
      break
    case `popularin${prevYear}`:
      start = `${prevYear}-01-01`
      end = `${prevYear}-12-31`
      break
    case 'alltimetop':
      start = `2000-01-01`
      end = format(date, dateFormat)
      break
  }

  return [start, end]
}

export function getTitleById(id: string): string {
  const prevYear = new Date().getFullYear() - 1
  const titles = {
    last30days: 'Last 30 Days',
    thisweek: 'This Week',
    nextweek: 'Next Week',
    bestoftheyear: 'Best of the Year',
    [`popularin${prevYear}`]: `Popular in ${prevYear}`,
    alltimetop: 'All Time Top',
    pc: 'PC',
    playstation: 'PlayStation',
    xboxone: 'Xbox One',
    nintendo: 'Nintendo Switch',
    ios: 'iOS',
    android: 'Android',
    action: 'Action',
    strategy: 'Strategy',
    rgp: 'RPG',
    shooter: 'Shooter',
    adventure: 'Adventure',
    puzzle: 'Puzzle',
    racing: 'Racing',
    sports: 'Sports',
  }

  return titles[id]
}

export function getPlatformId(platform: string): string {
  switch (platform) {
    case 'pc':
      return '4'
    case 'playstation':
      return '18'
    case 'xboxone':
      return '1'
    case 'nintendo':
      return '7'
    case 'ios':
      return '3'
    case 'android':
      return '21'
    default:
      return '0'
  }
}

export function getStatsColor(label: string) {
  switch (label) {
    case 'exceptional':
      return '#40C057'
    case 'recommended':
      return '#228BE6'
    case 'meh':
      return '#FAB005'
    case 'skip':
      return '#FA5252'
    default:
      return '#000'
  }
}

export function capitalize(label: string): string {
  const firstLetter = label.slice(0, 1).toUpperCase()

  return firstLetter + label.slice(1)
}

export function trimGenres(genres: IGenre[]): IGenre[] {
  return genres.length > 3 ? genres.slice(0, 3) : genres
}
