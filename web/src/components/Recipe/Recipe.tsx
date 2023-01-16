import { useState } from 'react'

import { Menu, Transition } from '@headlessui/react'
import { TrashIcon } from '@heroicons/react/24/outline'
import { CheckIcon, EllipsisVerticalIcon } from '@heroicons/react/24/solid'
import { Recipe as RecipeModel } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import BackToRecipesButton from '../BackToRecipesButton/BackToRecipesButton'

interface Props {
  recipe: RecipeModel
}

const DropdownMenu = ({ onDelete }: { onDelete: () => void }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 dark:focus:ring-offset-gray-800">
          <EllipsisVerticalIcon className="h-5 w-5" />
        </Menu.Button>
      </div>
      <Transition
        as={React.Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        {/* just delete button */}
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:divide-gray-700 dark:bg-gray-800 dark:ring-gray-700">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={onDelete}
                  className={`${
                    active ? 'bg-gray-100 dark:bg-gray-700' : ''
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-700 dark:text-gray-100`}
                >
                  <TrashIcon
                    className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300"
                    aria-hidden="true"
                  />
                  Delete
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

const Checkbox = ({
  checked,
  onChange,
}: {
  checked: boolean
  onChange: () => void
}) => {
  return (
    <button
      type="button"
      className={`${
        checked ? 'bg-blue-500' : 'bg-gray-200 dark:bg-gray-700'
      } relative inline-flex h-6 w-6 items-center rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-800`}
      onClick={onChange}
    >
      {checked && (
        <CheckIcon
          className="absolute inset-0 m-auto h-5 w-5 text-white"
          aria-hidden="true"
        />
      )}
    </button>
  )
}

function toggle<T>(array: T[], item: T) {
  const index = array.indexOf(item)
  if (index > -1) {
    return [...array.slice(0, index), ...array.slice(index + 1)]
  } else {
    return [...array, item]
  }
}

const DELETE_RECIPE_MUTATION = gql`
  mutation DeleteRecipeMutation($id: Int!) {
    deleteRecipe(id: $id) {
      id
    }
  }
`

const Recipe = ({ recipe }: Props) => {
  const [deleteRecipe] = useMutation(DELETE_RECIPE_MUTATION, {
    onCompleted: () => {
      toast.success('Recipe deleted')
      navigate(routes.recipes())
    },
  })

  const [markedIngredients, setMarkedIngredients] = useState<string[]>([])

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          {recipe.title}
        </h1>

        <DropdownMenu
          // use simple confirm dialog for now
          onDelete={() => {
            if (confirm('Are you sure you want to delete this recipe?')) {
              deleteRecipe({ variables: { id: recipe.id } })
            }
          }}
        />
      </div>
      {/* back button */}
      <div className="mt-4">
        <BackToRecipesButton />
      </div>

      <div className="mt-4">
        <p className="text-gray-900 dark:text-gray-100">{recipe.description}</p>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
          Ingredients
        </h2>
        <ul className="mt-2 space-y-2">
          {recipe.ingredients.map((ingredient) => (
            <li
              key={ingredient}
              className="flex items-center text-gray-900 dark:text-gray-100"
            >
              <Checkbox
                checked={markedIngredients.includes(ingredient)}
                onChange={() => {
                  setMarkedIngredients(toggle(markedIngredients, ingredient))
                }}
              />
              <button
                type="button"
                className={`${
                  markedIngredients.includes(ingredient) ? 'line-through' : ''
                } ml-2`}
                onClick={() => {
                  setMarkedIngredients(toggle(markedIngredients, ingredient))
                }}
              >
                {ingredient}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <h2 className="mt-4 text-xl font-bold text-gray-900 dark:text-gray-100">
        Instructions
      </h2>
      {/* with numbers */}
      <ol className="mt-2 list-inside list-decimal space-y-2">
        {recipe.steps.map((step) => (
          <li key={step} className="text-gray-900 dark:text-gray-100">
            {step}
          </li>
        ))}
      </ol>
      <div className="mt-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
          Note
        </h2>
        <p className="mt-2 text-gray-900 dark:text-gray-100">{recipe.note}</p>
      </div>
    </>
  )
}

export default Recipe
