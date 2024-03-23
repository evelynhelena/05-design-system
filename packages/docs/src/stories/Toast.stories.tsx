import type { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps } from '@evelyn-ignite-ui/react'

export default {
  title: 'Alerts/Toast',
  component: Toast,
  args: {
    title: 'Agendamento realizado',
    subtitle: 'Quarta-feira, 23 de Outubro às 16h',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}