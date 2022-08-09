import { sub, add, format } from 'date-fns'

export function getDateById(id: string): [string, string] {
  const date = new Date()
  let calculatedDate = new Date()
  let start = '',
    end = ''

  switch (id) {
    case 'last30days':
      calculatedDate = sub(date, { days: 30 })
      break
    case 'thisweek':
      calculatedDate = sub(date, { days: 7 })
      break
    case 'nextweek':
      calculatedDate = add(date, { days: 7 })
      break
  }

  start = format(calculatedDate, 'yyyy-MM-dd')
  end = format(date, 'yyyy-MM-dd')

  if (id === 'nextweek') [start, end] = [end, start]

  return [start, end]
}

export function getTitleById(id: string): string {
  switch (id) {
    case 'last30days':
      return 'Last 30 Days'
    case 'thisweek':
      return 'This Week'
    case 'nextweek':
      return 'Next Week'
    default:
      return 'Something went wrong...'
  }
}
