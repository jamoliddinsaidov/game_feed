import { createStyles, Title, Grid } from '@mantine/core'
import { MainContainerProps } from '../../types/ComponentsPropTypes'

// components
import { GameCard } from '../GameCard'
import { Loading } from '../Loader'
import { SearchFilter } from '../SearchFilter'

const useStyles = createStyles((theme) => ({
  container: {
    width: '100%',
    margin: '0.5rem 1.5rem',
  },

  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
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

export function MainContainer({ title, gamesState, searchProps }: MainContainerProps) {
  const { classes } = useStyles()

  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <Title className={classes.title}>{title}</Title>
        <SearchFilter {...searchProps} />
      </div>
      <Grid className={classes.grid} gutter='xl'>
        {!gamesState.loading ? (
          gamesState.games.map((game) => (
            <Grid.Col key={game.id} xs={6} sm={5} md={4} lg={3}>
              <GameCard {...game} />
            </Grid.Col>
          ))
        ) : (
          <Loading />
        )}
      </Grid>
    </div>
  )
}
