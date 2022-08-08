import {
  IconCalendarStats,
  IconHome,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconBrandSteam,
  IconChartBubble,
} from '@tabler/icons'

export const linkData = [
  { label: 'Home', icon: IconHome },
  {
    label: 'New Releases',
    icon: IconCalendarStats,
    initiallyOpened: true,
    links: [
      { label: 'Last 30 days', link: '/' },
      { label: 'This week', link: '/' },
      { label: 'Next week', link: '/' },
    ],
  },
  {
    label: 'Top',
    icon: IconPresentationAnalytics,
    links: [
      { label: 'Best of the year', link: '/' },
      { label: `Popular in ${new Date().getFullYear() - 1}`, link: '/' },
      { label: 'All time top 250', link: '/' },
    ],
  },
  { label: 'All Games', icon: IconFileAnalytics },
  {
    label: 'Platforms',
    icon: IconBrandSteam,
    links: [
      { label: 'PC', link: '/' },
      { label: 'PlayStation', link: '/' },
      { label: 'Xbox One', link: '/' },
      { label: 'Nintendo Switch', link: '/' },
      { label: 'iOS', link: '/' },
      { label: 'Android', link: '/' },
    ],
  },
  {
    label: 'Genres',
    icon: IconChartBubble,
    links: [
      { label: 'Action', link: '/' },
      { label: 'Strategy', link: '/' },
      { label: 'RPG', link: '/' },
      { label: 'Shooter', link: '/' },
      { label: 'Adventure', link: '/' },
      { label: 'Puzzle', link: '/' },
      { label: 'Racing', link: '/' },
      { label: 'Sports', link: '/' },
    ],
  },
]
