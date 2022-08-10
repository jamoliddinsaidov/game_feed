import { RingProgress, Text, SimpleGrid, Paper, Group, Center, createStyles } from '@mantine/core'
import { IconMoodHappy, IconMoodSmile, IconMoodEmpty, IconMoodSad } from '@tabler/icons'
import { StatsRingProps } from '../../types/ComponentsPropTypes'
import { capitalize } from '../../utils'

const icons = {
  exceptional: IconMoodHappy,
  recommended: IconMoodSmile,
  meh: IconMoodEmpty,
  skip: IconMoodSad,
}

const useStyles = createStyles({
  statsContainer: {
    margin: '1rem',
  },
})

export function StatsRing({ data }: StatsRingProps) {
  const { classes } = useStyles()

  const stats = data.map((stat) => {
    const Icon = icons[stat.label]
    return (
      <Paper withBorder radius='md' p='xs' key={stat.label}>
        <Group>
          <RingProgress
            size={80}
            roundCaps
            thickness={8}
            sections={[{ value: stat.progress, color: stat.color }]}
            label={
              <Center>
                <Icon size={25} stroke={1} />
              </Center>
            }
          />

          <div>
            <Text color='dimmed' size='xs' weight={700}>
              {capitalize(stat.label)}
            </Text>
            <Text weight={700} size='xl'>
              {stat.stats}
            </Text>
          </div>
        </Group>
      </Paper>
    )
  })

  return (
    <SimpleGrid
      cols={4}
      breakpoints={[
        { maxWidth: 'sm', cols: 1 },
        { maxWidth: 'md', cols: 2 },
      ]}
      className={classes.statsContainer}
      spacing='xl'
    >
      {stats}
    </SimpleGrid>
  )
}
