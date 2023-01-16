import { MetaTags } from '@redwoodjs/web'

import UserPreferenceCell from 'src/components/UserPreferenceCell'

const PreferencesPage = () => {
  return (
    <>
      <MetaTags title="Preferences" description="Preferences page" />

      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Preferences
        </h1>
      </div>

      <div className="mt-4">
        <UserPreferenceCell />
      </div>
    </>
  )
}

export default PreferencesPage
