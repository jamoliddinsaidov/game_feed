import { createStyles, Card, Image, ActionIcon, Group, Text, Badge } from '@mantine/core'
import { IconHeart, IconCopy } from '@tabler/icons'
import { IGenre } from '../../types/GamePropTypes'

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  footer: {
    padding: `${theme.spacing.xs}px ${theme.spacing.lg}px`,
    marginTop: theme.spacing.md,
    borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]}`,
  },
}))

interface ArticleCardFooterProps {
  id: number
  background_image?: string
  genres: IGenre[]
  name: string
  rating?: number
}

export function GameCard({ id, background_image, genres, name, rating }: ArticleCardFooterProps) {
  const { classes, theme } = useStyles()

  return (
    <Card withBorder p='lg' radius='md' className={classes.card}>
      <Card.Section mb='sm'>
        <Image src={background_image} alt={name} height={180} />
      </Card.Section>

      <Badge>
        {genres.map(({ id, name }) => (
          <span key={id}>{name} </span>
        ))}
      </Badge>

      <Text weight={700} className={classes.title} mt='xs'>
        {name}
      </Text>

      <Card.Section className={classes.footer}>
        <Group position='apart'>
          <Text size='xs' color='dimmed'>
            {rating}
          </Text>
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
