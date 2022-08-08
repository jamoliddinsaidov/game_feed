import { createStyles, Title, Text, Grid } from '@mantine/core'
import { GameCard } from '../GameCard'

// redux
import { useAppSelector } from '../../hooks/reduxHooks'
import { selectGames } from '../../store/games/selectors'

const useStyles = createStyles((theme) => ({
  container: {
    margin: '0.5rem 1.5rem',
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontWeight: 800,
    fontSize: 45,
  },

  grid: {
    margin: '1rem 0',
  },
}))

export function MainContainer() {
  const { classes } = useStyles()
  const gamesState = useAppSelector(selectGames)

  return (
    <div className={classes.container}>
      <Title className={classes.title}>Trending games</Title>
      <Text>Based on player counts and release date</Text>

      <Grid className={classes.grid} gutter='xl'>
        {!gamesState.loading &&
          gamesState.games.map((game) => (
            <Grid.Col key={game.id} xs={6} sm={5} md={4} lg={3}>
              <GameCard {...game} />
            </Grid.Col>
          ))}
      </Grid>
    </div>
  )
}
