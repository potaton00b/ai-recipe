// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof BackToRecipesButton> = (args) => {
//   return <BackToRecipesButton {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import BackToRecipesButton from './BackToRecipesButton'

export const generated = () => {
  return <BackToRecipesButton />
}

export default {
  title: 'Components/BackToRecipesButton',
  component: BackToRecipesButton,
} as ComponentMeta<typeof BackToRecipesButton>
