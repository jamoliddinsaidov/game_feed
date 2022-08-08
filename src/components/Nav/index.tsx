import { Navbar, Title, Text, ScrollArea, createStyles } from '@mantine/core'
import { LinksGroup } from './NavbarLinksGroup'
import { linkData } from './constants'
import { ToggleTheme } from '../ToggleTheme'

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
    position: 'sticky',
    top: 0,
  },

  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '10vh',
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]}`,
  },

  links: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  title: {
    fontWeight: 800,
    fontSize: 30,
    letterSpacing: -1,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    '@media (max-width: 520px)': {
      fontSize: 28,
      textAlign: 'left',
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][4],
  },
}))

export function NavbarNested() {
  const { classes } = useStyles()

  return (
    <Navbar height={'100vh'} width={{ sm: 270 }} p='md' className={classes.navbar}>
      <Navbar.Section className={classes.header}>
        <Title className={classes.title}>
          Game
          <Text component='span' inherit className={classes.highlight}>
            Feed
          </Text>
        </Title>

        <ToggleTheme />
      </Navbar.Section>

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>
          {linkData.map((item) => (
            <LinksGroup {...item} key={item.label} />
          ))}
        </div>
      </Navbar.Section>
    </Navbar>
  )
}
