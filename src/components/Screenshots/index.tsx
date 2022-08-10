import { SimpleGrid, Image } from '@mantine/core'
import { ScreenshotsProps } from '../../types/ComponentsPropTypes'

export function Screenshots({ screenshots }: ScreenshotsProps) {
  return (
    <SimpleGrid cols={3} spacing='xl' breakpoints={[{ maxWidth: 'md', cols: 1, spacing: 'md' }]}>
      {screenshots.map(({ id, image }) => (
        <Image src={image} key={id} radius='md' />
      ))}
    </SimpleGrid>
  )
}
