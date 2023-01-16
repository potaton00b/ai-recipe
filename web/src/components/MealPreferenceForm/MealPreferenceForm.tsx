import { useState } from 'react'

import CheckIcon from '@heroicons/react/24/outline/CheckIcon'
import {
  Allergen,
  Diet,
  UpdateUserPreferenceByCurrentUserMutation,
  UpdateUserPreferenceByCurrentUserMutationVariables,
} from 'types/graphql'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const UPDATE_USER_PREFERENCE_BY_CURRENT_USER = gql`
  mutation UpdateUserPreferenceByCurrentUserMutation(
    $input: UpdateUserPreferenceByCurrentUserInput!
  ) {
    updateUserPreferenceByCurrentUser(input: $input) {
      id
      diet
      allergens
    }
  }
`

const formatString = (string: string) => {
  return string
    .split('_')
    .map((word) => word.charAt(0) + word.slice(1).toLowerCase())
    .join(' ')
}

const DietTile = ({
  diet,
  isSelected,
  handleDietClick,
}: {
  diet: string
  isSelected: boolean
  handleDietClick: () => void
}) => {
  return (
    <button onClick={handleDietClick}>
      <div
        className={`${
          isSelected
            ? 'bg-blue-500 dark:bg-blue-600'
            : 'bg-gray-100 dark:bg-gray-800'
        } flex flex-col items-center rounded-md p-4`}
      >
        <div
          className={`${
            isSelected ? 'text-white' : 'text-gray-900 dark:text-gray-100'
          } text-2xl font-bold`}
        >
          {formatString(diet)}
        </div>
      </div>
    </button>
  )
}

const AllergenTile = ({
  allergen,
  isSelected,
  handleAllergenClick,
}: {
  allergen: string
  isSelected: boolean
  handleAllergenClick: () => void
}) => {
  return (
    <button onClick={handleAllergenClick}>
      <div
        className={`${
          isSelected
            ? 'bg-blue-500 dark:bg-blue-600'
            : 'bg-gray-100 dark:bg-gray-800'
        } relative flex flex-col items-center rounded-md p-7`}
      >
        <div
          className={`${
            isSelected ? 'text-white' : 'text-gray-900 dark:text-gray-100'
          } text-2xl font-bold`}
        >
          {formatString(allergen)}
        </div>
        <div
          className={`${
            isSelected ? 'bg-white' : 'bg-gray-200 dark:bg-gray-700'
          } absolute bottom-2 right-2 flex h-6 w-6 items-center justify-center rounded-full`}
        >
          {isSelected && <CheckIcon className="h-4 w-4" />}
        </div>
      </div>
    </button>
  )
}

interface MealPreferenceFormProps {
  diet: string
  allergens: string[]
  refetch: () => void
}

const MealPreferenceForm = ({
  diet: initialDiet,
  allergens: initialAllergens,
  refetch,
}: MealPreferenceFormProps) => {
  const [updateUserPreferenceByCurrentUser] = useMutation<
    UpdateUserPreferenceByCurrentUserMutation,
    UpdateUserPreferenceByCurrentUserMutationVariables
  >(UPDATE_USER_PREFERENCE_BY_CURRENT_USER)

  const [diet, setDiet] = useState<string>(initialDiet)
  const [allergens, setAllergens] = useState<string[]>(initialAllergens)
  const [isSending, setIsSending] = useState<boolean>(false)

  const onSubmit = async (data) => {
    setIsSending(true)
    try {
      await updateUserPreferenceByCurrentUser({
        variables: {
          input: {
            diet: data.diet as Diet,
            allergens: (data.allergens ?? []) as Allergen[],
          },
        },
      })

      toast.success('Meal preferences updated!')
      refetch()
    } catch (error) {
      toast.error('Error updating meal preferences')
    }
    setIsSending(false)
  }

  return (
    <div>
      <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
        Diet
      </h2>
      <p className="text-gray-500 dark:text-gray-400">
        Select the diet that best fits your needs.
      </p>

      <div className="mt-4 flex flex-wrap justify-center gap-4">
        {[
          'ANYTHING',
          'PALEO',
          'VEGETARIAN',
          'VEGAN',
          'KETOGENIC',
          'MEDITERRANEAN',
        ].map((currentDiet, key) => (
          <DietTile
            diet={currentDiet}
            isSelected={diet === currentDiet}
            handleDietClick={() => setDiet(currentDiet)}
            key={key}
          />
        ))}
      </div>

      <h2 className="mt-8 text-xl font-bold text-gray-900 dark:text-gray-100">
        Allergens
      </h2>
      <p className="text-gray-500 dark:text-gray-400">
        Select any allergens that you have.
      </p>

      <div className="mt-4 flex flex-wrap justify-center gap-4">
        {[
          'MILK',
          'EGGS',
          'FISH',
          'CRUSTACEAN_SHELLFISH',
          'TREE_NUTS',
          'PEANUTS',
          'WHEAT',
          'SOYBEANS',
          'SESAME',
        ].map((currentAllergen, key) => (
          <AllergenTile
            allergen={currentAllergen}
            isSelected={allergens.includes(currentAllergen)}
            handleAllergenClick={() => {
              if (allergens.includes(currentAllergen)) {
                setAllergens(
                  allergens.filter((allergen) => allergen !== currentAllergen)
                )
              } else {
                setAllergens([...allergens, currentAllergen])
              }
            }}
            key={key}
          />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button
          type="submit"
          disabled={
            (diet === initialDiet &&
              allergens.sort().join() === initialAllergens.sort().join()) ||
            isSending
          }
          className="rounded-md bg-blue-500 py-2 px-4 font-bold text-white disabled:cursor-not-allowed disabled:opacity-50 dark:bg-blue-600"
          onClick={() => onSubmit({ diet, allergens })}
        >
          Update
        </button>
      </div>
    </div>
  )
}

export default MealPreferenceForm
