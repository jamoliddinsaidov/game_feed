import { Box, Loader } from '@mantine/core'

export function Loading() {
  return (
    <Box
      sx={(theme) => ({
        position: 'absolute',
        left: '55%',
        top: '45%',
      })}
    >
      <Loader size='xl' variant='bars' color='blue' />
    </Box>
  )
}
