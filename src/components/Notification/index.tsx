import { Notification as NotificationMantine } from '@mantine/core'
import { IconCheck } from '@tabler/icons'
import { NotificationProps } from '../../types/ComponentsPropTypes'

export function Notification({ title, description }: NotificationProps) {
  return (
    <NotificationMantine icon={<IconCheck size={18} />} color='teal' title={title}>
      {description}
    </NotificationMantine>
  )
}
