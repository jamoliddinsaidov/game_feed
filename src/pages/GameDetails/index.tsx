import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { createStyles, Box, Title, Text } from '@mantine/core'

// components
import { Banner } from '../../components/Banner'
import { StatsRing } from '../../components/RatingStats'
import { GameDetailsFooter } from '../../components/GameDetailsFooter'
import { Screenshots } from '../../components/Screenshots'
import { Loading } from '../../components/Loader'

// utils
import { base_url, api_key } from '../../store/filteredGames/thunk'
import { getStatsColor } from '../../utils'
import { IGameDetails, IStats, IScreenshot } from '../../types/GamePropTypes'

const useStyles = createStyles((theme) => ({
  container: {
    width: '100%',
    margin: '2rem',
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    margin: '1rem 0',
  },

  stats: {
    margin: '2rem 0',
  },

  description: {
    marginTop: '1rem',
    lineHeight: '200%',
  },
}))

export function GameDetails() {
  const [game, setGame] = useState<IGameDetails | null>(null)
  const [screenshots, setScreenshots] = useState<IScreenshot[] | []>([])
  const [stats, setStats] = useState<IStats[] | []>([])
  const { id } = useParams()
  const { classes } = useStyles()

  useEffect(() => {
    async function fetchGameDetails() {
      const gameResponse = await fetch(`${base_url}/${id}?${api_key}`)
      const gameData: IGameDetails = await gameResponse.json()

      const screenshotsResponse = await fetch(`${base_url}/${id}/screenshots?${api_key}`)
      const screenshotsData = await screenshotsResponse.json()
      const screenshotsResult = screenshotsData.results

      const gameStats = gameData.ratings.map(
        (rating): IStats => ({
          label: rating.title as any,
          stats: rating.count.toString(),
          progress: rating.percent,
          color: getStatsColor(rating.title),
        })
      )

      setGame(gameData)
      setScreenshots(screenshotsResult)
      setStats(gameStats)
    }

    fetchGameDetails()
  }, [id])

  return (
    <div className={classes.container}>
      {game ? (
        <Box>
          <Banner background_image={game.background_image} name={game.name} metacritic={game.metacritic} />
          <Title className={classes.title}>{game.name}</Title>
          <Text sx={{ marginTop: '-1rem' }}>Release date: {game.released}</Text>
          <Box className={classes.stats}>
            <StatsRing data={stats} />
          </Box>
          <Box>
            <Title className={classes.title}>About</Title>
            <Text className={classes.description}>{game.description_raw}</Text>
          </Box>
          <GameDetailsFooter {...game} />
          <Box>
            <Title className={classes.title}>Glimpse from the game</Title>
            <Screenshots screenshots={screenshots} />
          </Box>
        </Box>
      ) : (
        <Loading />
      )}
    </div>
  )
}
