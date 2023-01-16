import { PlusIcon } from '@heroicons/react/24/solid'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import RecipesCell from 'src/components/RecipesCell'
import SearchBar from 'src/components/SearchBar/SearchBar'

const RecipesPage = () => {
  return (
    <>
      <MetaTags title="Recipes" description="Recipes page" />

      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          My Recipes
        </h1>
        <Link
          to={routes.newRecipe()}
          className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-500 text-white shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-800"
        >
          <PlusIcon className="h-5 w-5" />
        </Link>
      </div>

      <div className="mt-4">
        <RecipesCell />
      </div>
    </>
  )
}

export default RecipesPage
