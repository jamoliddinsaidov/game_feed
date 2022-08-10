import { createStyles, Grid, Text, Box } from '@mantine/core'
import { GameDetailsFooterProps } from '../../types/ComponentsPropTypes'

const useStyles = createStyles((theme) => ({
  subtitle: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontWeight: 600,
    fontSize: 20,
    marginTop: '1rem',
    textAlign: 'center',
  },

  flexCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))

export function GameDetailsFooter({ publishers, genres, developers, platforms }: GameDetailsFooterProps) {
  const { classes } = useStyles()

  return (
    <Grid>
      <Grid.Col xs={12} lg={4}>
        <Text className={classes.subtitle}>Genres</Text>
        <Box className={classes.flexCenter}>
          {genres.map(({ name, id }) => (
            <Text key={id} sx={{ marginRight: '0.5rem' }}>
              {name}
            </Text>
          ))}
        </Box>
      </Grid.Col>
      <Grid.Col xs={12} lg={4}>
        <Text className={classes.subtitle}>Publishers</Text>
        <Box className={classes.flexCenter}>
          {publishers.map(({ name, id }) => (
            <Text key={id} sx={{ marginRight: '0.5rem' }}>
              {name}
            </Text>
          ))}
        </Box>
      </Grid.Col>
      <Grid.Col xs={12} lg={4}>
        <Text className={classes.subtitle}>Developers</Text>
        <Box className={classes.flexCenter}>
          {developers.map(({ name, id }) => (
            <Text key={id} sx={{ marginRight: '0.5rem' }}>
              {name}
            </Text>
          ))}
        </Box>
      </Grid.Col>
      <Grid.Col xs={12}>
        <Text className={classes.subtitle}>Platforms</Text>
        <Box className={classes.flexCenter}>
          {platforms.map(({ platform }) => (
            <Text key={platform.id} sx={{ marginRight: '0.5rem' }}>
              {platform.name}
            </Text>
          ))}
        </Box>
      </Grid.Col>
    </Grid>
  )
}
