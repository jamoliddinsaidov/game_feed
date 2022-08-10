import { Link } from 'react-router-dom'
import { createStyles, Card, Image, ActionIcon, Group, Text, Badge } from '@mantine/core'
import { IconHeart, IconCopy, IconStar } from '@tabler/icons'
import { GameCardProps } from '../../types/ComponentsPropTypes'

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  footer: {
    padding: `${theme.spacing.xs}px ${theme.spacing.lg}px`,
    marginTop: theme.spacing.md,
    borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]}`,
  },

  rating: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 16,
  },
}))

export function GameCard({ id, background_image, genres, name, rating }: GameCardProps) {
  const { classes, theme } = useStyles()

  return (
    <Card withBorder p='lg' radius='md' className={classes.card}>
      <Card.Section mb='sm'>
        <Link to={`/game/${id}`}>
          <Image src={background_image} alt={name} height={180} />
        </Link>
      </Card.Section>

      <Badge>
        {genres.map(({ id, name }) => (
          <span key={id}>{name} </span>
        ))}
      </Badge>

      <Text weight={700} mt='xs'>
        <Link to={`/game/${id}`} className={classes.title}>
          {name}
        </Link>
      </Text>

      <Card.Section className={classes.footer}>
        <Group position='apart'>
          <Group className={classes.rating}>
            <IconStar size={18} color={theme.colors.yellow[6]} stroke={1.5} />
            <Text sx={{ marginLeft: '-0.5rem' }}>{rating}</Text>
          </Group>
          <Group spacing={0}>
            <ActionIcon>
              <IconHeart size={18} color={theme.colors.red[6]} stroke={1.5} />
            </ActionIcon>
            <ActionIcon>
              <IconCopy size={16} color={theme.colors.blue[6]} stroke={1.5} />
            </ActionIcon>
          </Group>
        </Group>
      </Card.Section>
    </Card>
  )
}
