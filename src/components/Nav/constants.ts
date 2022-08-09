import { IconCalendarStats, IconHome, IconPresentationAnalytics, IconBrandSteam, IconChartBubble } from '@tabler/icons'

const previousYear = new Date().getFullYear() - 1

export const linkData = [
  { label: 'Home', icon: IconHome },
  {
    label: 'New Releases',
    icon: IconCalendarStats,
    links: [
      { label: 'Last 30 days', link: '/releases/last30days' },
      { label: 'This week', link: '/releases/thisweek' },
      { label: 'Next week', link: '/releases/nextweek' },
    ],
  },
  {
    label: 'Top',
    icon: IconPresentationAnalytics,
    links: [
      { label: 'Best of the year', link: '/top/bestoftheyear' },
      { label: `Popular in ${previousYear}`, link: `/top/popularin${previousYear}` },
      { label: 'All time top', link: '/top/alltimetop' },
    ],
  },
  {
    label: 'Platforms',
    icon: IconBrandSteam,
    links: [
      { label: 'PC', link: '/platforms/pc' },
      { label: 'PlayStation', link: '/platforms/playstation' },
      { label: 'Xbox One', link: '/platforms/xboxone' },
      { label: 'Nintendo Switch', link: '/platforms/nintendo' },
      { label: 'iOS', link: '/platforms/ios' },
      { label: 'Android', link: '/platforms/android' },
    ],
  },
  {
    label: 'Genres',
    icon: IconChartBubble,
    links: [
      { label: 'Action', link: '/genres/action' },
      { label: 'Strategy', link: '/genres/strategy' },
      { label: 'RPG', link: '/genres/rpg' },
      { label: 'Shooter', link: '/genres/shooter' },
      { label: 'Adventure', link: '/genres/adventures' },
      { label: 'Puzzle', link: '/genres/puzzle' },
      { label: 'Racing', link: '/genres/racing' },
      { label: 'Sports', link: '/genres/sports' },
    ],
  },
]
