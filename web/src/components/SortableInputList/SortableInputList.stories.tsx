// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof SortableInputList> = (args) => {
//   return <SortableInputList {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import SortableInputList from './SortableInputList'

export const generated = () => {
  return <SortableInputList />
}

export default {
  title: 'Components/SortableInputList',
  component: SortableInputList,
} as ComponentMeta<typeof SortableInputList>
