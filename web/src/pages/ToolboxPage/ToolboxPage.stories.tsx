import type { ComponentMeta, ComponentStory } from '@storybook/react'

import ToolboxPage from './ToolboxPage'

export const generated: ComponentStory<typeof ToolboxPage> = (args) => {
  return <ToolboxPage id={'42'} {...args} />
}

export default {
  title: 'Pages/ToolboxPage',
  component: ToolboxPage,
} as ComponentMeta<typeof ToolboxPage>
