// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof UserDropdown> = (args) => {
//   return <UserDropdown {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import UserDropdown from './UserDropdown'

export const generated = () => {
  return <UserDropdown />
}

export default {
  title: 'Components/UserDropdown',
  component: UserDropdown,
} as ComponentMeta<typeof UserDropdown>
