import type { ComponentMeta } from '@storybook/react'

import NewRecipePage from './NewRecipePage'

export const generated = () => {
  return <NewRecipePage />
}

export default {
  title: 'Pages/NewRecipePage',
  component: NewRecipePage,
} as ComponentMeta<typeof NewRecipePage>
