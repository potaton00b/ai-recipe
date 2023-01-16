import type { ComponentMeta } from '@storybook/react'

import RecipePage from './RecipePage'

export const generated = () => {
  return <RecipePage />
}

export default {
  title: 'Pages/RecipePage',
  component: RecipePage,
} as ComponentMeta<typeof RecipePage>
