import TextareaAutosize from 'react-textarea-autosize'
import {
  CreateRecipeByCurrentUserMutation,
  CreateRecipeByCurrentUserMutationVariables,
} from 'types/graphql'

import { Form } from '@redwoodjs/forms'
import { routes } from '@redwoodjs/router'
import { navigate } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import BackToRecipesButton from 'src/components/BackToRecipesButton/BackToRecipesButton'
import SortableInputList from 'src/components/SortableInputList/SortableInputList'

const CREATE_RECIPE_BY_CURRENT_USER = gql`
  mutation CreateRecipeByCurrentUserMutation(
    $input: CreateRecipeByCurrentUserInput!
  ) {
    createRecipeByCurrentUser(input: $input) {
      id
      title
      description
      ingredients
      steps
      note
    }
  }
`

const NewRecipePage = () => {
  const [isSending, setIsSending] = React.useState(false)
  const [createRecipeByCurrentUser] = useMutation<
    CreateRecipeByCurrentUserMutation,
    CreateRecipeByCurrentUserMutationVariables
  >(CREATE_RECIPE_BY_CURRENT_USER)

  const initialState = {
    title: '',
    description: '',
    ingredients: [''],
    steps: [''],
    note: '',
  }

  function reducer(state, action) {
    switch (action.type) {
      case 'title':
        return { ...state, title: action.payload }
      case 'description':
        return { ...state, description: action.payload }
      case 'ingredients':
        return { ...state, ingredients: action.payload }
      case 'steps':
        return { ...state, steps: action.payload }
      case 'note':
        return { ...state, note: action.payload }
      default:
        throw new Error()
    }
  }

  const [state, dispatch] = React.useReducer(reducer, initialState)

  const onSubmit = async (data) => {
    setIsSending(true)
    try {
      const newRecipe = await createRecipeByCurrentUser({
        variables: {
          input: {
            title: data.title,
            description: data.description,
            ingredients: data.ingredients,
            steps: data.steps,
            note: data.note,
          },
        },
      })

      toast.success('Recipe created!')
      navigate(
        routes.recipe({ id: newRecipe.data.createRecipeByCurrentUser.id })
      )
    } catch (error) {
      toast.error('Error creating recipe')
    }
    setIsSending(false)
  }

  const hasUnsavedChanges =
    state.title !== '' ||
    state.description !== '' ||
    state.ingredients.filter((i) => i !== '').length > 0 ||
    state.steps.filter((i) => i !== '').length > 0 ||
    state.note !== ''

  const submitButtonIsDisabled = !hasUnsavedChanges || isSending

  React.useEffect(() => {
    if (hasUnsavedChanges) {
      window.onbeforeunload = () => true
    } else {
      window.onbeforeunload = undefined
    }

    return () => {
      window.onbeforeunload = undefined
    }
  }, [hasUnsavedChanges])

  return (
    <>
      <MetaTags title="New Recipe" description="New Recipe page" />

      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          New Recipe
        </h1>
      </div>

      <div className="mt-4">
        <BackToRecipesButton />
      </div>

      <div className="mt-4">
        <Form>
          <div className="mt-4">
            <label
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              htmlFor="title"
            >
              Title
            </label>
            <div className="mt-1">
              <TextareaAutosize
                name="title"
                id="title"
                className="block w-full resize-none rounded-md border border-gray-300 bg-white py-2 pl-3 pr-3 leading-5 placeholder-gray-500 focus:border-blue-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:placeholder-gray-300 dark:focus:ring-blue-500 sm:text-sm"
                placeholder="Chocolate Chip Cookies"
                value={state.title}
                onChange={(e) =>
                  dispatch({ type: 'title', payload: e.target.value })
                }
              />
            </div>
          </div>

          <div className="mt-4">
            <label
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              htmlFor="description"
            >
              Description
            </label>
            <div className="mt-1">
              <TextareaAutosize
                id="description"
                name="description"
                rows={3}
                className="block w-full resize-none rounded-md border border-gray-300 bg-white py-2 pl-3 pr-3 leading-5 placeholder-gray-500 focus:border-blue-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:placeholder-gray-300 dark:focus:ring-blue-500 sm:text-sm"
                placeholder="A delicious chocolate chip cookie recipe."
                value={state.description}
                onChange={(e) =>
                  dispatch({ type: 'description', payload: e.target.value })
                }
              />
            </div>
          </div>

          <div className="mt-4">
            <label
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              htmlFor="ingredients"
            >
              Ingredients
            </label>
            <div className="mt-1">
              <SortableInputList
                items={state.ingredients}
                setItems={(items) =>
                  dispatch({ type: 'ingredients', payload: items })
                }
                placeholder="X cups of something"
              />
            </div>
          </div>

          <div className="mt-4">
            <label
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              htmlFor="steps"
            >
              Steps
            </label>
            <div className="mt-1">
              <SortableInputList
                items={state.steps}
                setItems={(items) =>
                  dispatch({ type: 'steps', payload: items })
                }
                placeholder="Do something for a few minutes."
              />
            </div>
          </div>

          <div className="mt-4">
            <label
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              htmlFor="note"
            >
              Note
            </label>
            <div className="mt-1">
              <TextareaAutosize
                id="note"
                name="note"
                className="block w-full resize-none rounded-md border border-gray-300 bg-white py-2 pl-3 pr-3 leading-5 placeholder-gray-500 focus:border-blue-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:placeholder-gray-300 dark:focus:ring-blue-500 sm:text-sm"
                placeholder="This recipe is from my grandma."
                value={state.note}
                onChange={(e) =>
                  dispatch({ type: 'note', payload: e.target.value })
                }
              />
            </div>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              disabled={submitButtonIsDisabled}
              className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
              onClick={async (e) => {
                e.preventDefault()
                await onSubmit(state)
              }}
            >
              Save
            </button>
          </div>
        </Form>
      </div>
    </>
  )
}

export default NewRecipePage
