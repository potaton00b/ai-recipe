import type { ComponentMeta, ComponentStory } from '@storybook/react'

import DashboardLayout from './DashboardLayout'

export const generated: ComponentStory<typeof DashboardLayout> = (args) => {
  return <DashboardLayout {...args} />
}

export default {
  title: 'Layouts/DashboardLayout',
  component: DashboardLayout,
} as ComponentMeta<typeof DashboardLayout>
