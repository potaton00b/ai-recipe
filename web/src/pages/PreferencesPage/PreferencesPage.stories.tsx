import type { ComponentMeta } from '@storybook/react'

import PreferencesPage from './PreferencesPage'

export const generated = () => {
  return <PreferencesPage />
}

export default {
  title: 'Pages/PreferencesPage',
  component: PreferencesPage,
} as ComponentMeta<typeof PreferencesPage>
