import type { ComponentMeta } from '@storybook/react'

import RecipesPage from './RecipesPage'

export const generated = () => {
  return <RecipesPage />
}

export default {
  title: 'Pages/RecipesPage',
  component: RecipesPage,
} as ComponentMeta<typeof RecipesPage>
