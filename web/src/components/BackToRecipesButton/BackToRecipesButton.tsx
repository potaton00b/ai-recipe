import { ArrowLongLeftIcon } from '@heroicons/react/24/outline'

import { Link, routes } from '@redwoodjs/router'

const BackToRecipesButton = () => {
  return (
    <Link
      to={routes.recipes()}
      className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
    >
      <ArrowLongLeftIcon className="mr-2 h-5 w-5" />
      Back to Recipes
    </Link>
  )
}

export default BackToRecipesButton
