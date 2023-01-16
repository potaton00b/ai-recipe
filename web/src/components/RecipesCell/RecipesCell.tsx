import type { RecipesQuery } from 'types/graphql'

import { routes } from '@redwoodjs/router'
import { Link } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Loader from '../Loader/Loader'

export const QUERY = gql`
  query RecipesQuery {
    recipes: myRecipes {
      id
      title
      description
    }
  }
`

export const Loading = () => <Loader />

export const Empty = () => (
  <div className="flex h-full flex-col items-center justify-center">
    <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
      You don't have any recipes yet.
    </h2>
    <p className="text-gray-500 dark:text-gray-400">
      Click the button above to create one.
    </p>
  </div>
)

export const Failure = ({ error }: CellFailureProps) => (
  <div className="flex h-full flex-col items-center justify-center">
    <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
      Something went wrong.
    </h2>
    <p className="text-gray-500 dark:text-gray-400">
      Please try again or contact support.
    </p>
    <p className="text-red-500">{error.message}</p>
    <button
      className="mt-4 flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      onClick={() => window.location.reload()}
    >
      Refresh
    </button>
  </div>
)

export const Success = ({ recipes }: CellSuccessProps<RecipesQuery>) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {recipes.map((recipe) => (
        <Link
          to={routes.recipe({ id: recipe.id })}
          key={recipe.id}
          className="flex flex-col rounded-md border border-gray-200 bg-white shadow-sm hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div className="flex flex-1 flex-col p-8">
            <h3 className="mt-2 text-xl font-semibold text-gray-900 dark:text-gray-100">
              {recipe.title}
            </h3>
            <p className="mt-3 text-base text-gray-500 line-clamp-3 dark:text-gray-300">
              {recipe.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}
