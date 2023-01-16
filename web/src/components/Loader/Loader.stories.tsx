// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Loader> = (args) => {
//   return <Loader {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Loader from './Loader'

export const generated = () => {
  return <Loader />
}

export default {
  title: 'Components/Loader',
  component: Loader,
} as ComponentMeta<typeof Loader>
