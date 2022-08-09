import { createStyles, Title, Text, Grid } from '@mantine/core'
import { GameCard } from '../GameCard'
import { Loader } from '../Loader'
import { MainContainerProps } from '../../types/ComponentsPropTypes'

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

export function MainContainer({ title, description, gamesState }: MainContainerProps) {
  const { classes } = useStyles()

  return (
    <div className={classes.container}>
      <Title className={classes.title}>{title}</Title>
      {description && <Text>{description}</Text>}
      <Grid className={classes.grid} gutter='xl'>
        {!gamesState.loading ? (
          gamesState.games.map((game) => (
            <Grid.Col key={game.id} xs={6} sm={5} md={4} lg={3}>
              <GameCard {...game} />
            </Grid.Col>
          ))
        ) : (
          <Loader />
        )}
      </Grid>
    </div>
  )
}
