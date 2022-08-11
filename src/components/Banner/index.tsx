import { Title, BackgroundImage, Box, createStyles } from '@mantine/core'
import { Rating } from 'react-simple-star-rating'
import { BannerProps } from '../../types/ComponentsPropTypes'

const useStyles = createStyles((theme) => ({
  banner: {
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: theme.radius.sm,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },

  title: {
    color: theme.white,
    fontWeight: 800,
    fontSize: 85,
    textAlign: 'center',
  },

  metacritic: {
    margin: '1rem 0',
  },
}))

export function Banner({ background_image, name, metacritic }: BannerProps) {
  const { classes } = useStyles()

  return (
    <BackgroundImage src={background_image} radius='sm'>
      <Box className={classes.banner}>
        <Title className={classes.title}>{name}</Title>
        <div className={classes.metacritic}>
          <Rating ratingValue={metacritic} readonly={true} />
        </div>
      </Box>
    </BackgroundImage>
  )
}
