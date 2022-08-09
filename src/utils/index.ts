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
  switch (id) {
    case 'last30days':
      return 'Last 30 Days'
    case 'thisweek':
      return 'This Week'
    case 'nextweek':
      return 'Next Week'
    case 'bestoftheyear':
      return 'Best of the Year'
    case `popularin${prevYear}`:
      return `Popular in ${prevYear}`
    case 'alltimetop':
      return 'All Time Top'
    default:
      return 'Something went wrong...'
  }
}
