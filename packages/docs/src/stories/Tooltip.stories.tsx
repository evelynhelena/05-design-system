import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipProps } from '@evelyn-ignite-ui/react'

export default {
  title: 'FORM/Tooltip',
  component: Tooltip,
  args: {
    text: '26 de Outubro - Disponível',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}