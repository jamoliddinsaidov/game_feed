import { sub, add, format } from 'date-fns'

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
