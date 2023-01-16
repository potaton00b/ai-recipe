// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof MealPreferenceForm> = (args) => {
//   return <MealPreferenceForm {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import MealPreferenceForm from './MealPreferenceForm'

export const generated = () => {
  return <MealPreferenceForm allergens={[]} diet="ANYTHING" />
}

export default {
  title: 'Components/MealPreferenceForm',
  component: MealPreferenceForm,
} as ComponentMeta<typeof MealPreferenceForm>
