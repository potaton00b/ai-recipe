import type { FindRecipeQuery, FindRecipeQueryVariables } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Loader from '../Loader/Loader'
import Recipe from '../Recipe/Recipe'

export const QUERY = gql`
  query FindRecipeQuery($id: Int!) {
    recipe: recipe(id: $id) {
      id
      title
      description
      ingredients
      steps
      note
    }
  }
`

export const Loading = () => <Loader />

export const Empty = () => (
  <div className="flex h-full flex-col items-center justify-center">
    <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
      Recipe not found.
    </h2>
    <p className="text-gray-500 dark:text-gray-400">
      Click the button below to create one.
    </p>
    <Link
      to={routes.newRecipe()}
      className="mt-4 flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      Create Recipe
    </Link>
  </div>
)

export const Failure = ({
  error,
}: CellFailureProps<FindRecipeQueryVariables>) => (
  <div className="flex h-full flex-col items-center justify-center">
    <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
      Something went wrong.
    </h2>
    <p className="text-gray-500 dark:text-gray-400">
      Please try again or contact support.
    </p>
    <p className="text-red-500">{error.message}</p>
  </div>
)

export const Success = ({
  recipe,
}: CellSuccessProps<FindRecipeQuery, FindRecipeQueryVariables>) => {
  return <Recipe recipe={recipe} />
}
