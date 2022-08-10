import { TextInput, ActionIcon, useMantineTheme, createStyles } from '@mantine/core'
import { IconSearch, IconArrowRight } from '@tabler/icons'
import { SearchFilterProps } from '../../types/ComponentsPropTypes'

const useStyles = createStyles({
  search: {
    width: '35%',
    marginTop: '1rem',
    justifySelf: 'end',
  },
})

export function SearchFilter({ value, onChange, onClick }: SearchFilterProps) {
  const theme = useMantineTheme()
  const { classes } = useStyles()

  return (
    <TextInput
      className={classes.search}
      icon={<IconSearch size={18} stroke={1.5} />}
      radius='md'
      size='md'
      rightSection={
        <ActionIcon size={32} radius='md' color={theme.primaryColor} variant='filled' onClick={onClick}>
          <IconArrowRight size={18} stroke={1.5} />
        </ActionIcon>
      }
      placeholder='Search games...'
      rightSectionWidth={42}
      value={value}
      onChange={onChange}
    />
  )
}
