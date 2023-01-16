import type {
  FindUserPreferenceQuery,
  FindUserPreferenceQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import MealPreferenceForm from 'src/components/MealPreferenceForm'

import Loader from '../Loader/Loader'

export const QUERY = gql`
  query FindUserPreferenceQuery {
    userPreference: userPreferenceByCurrentUser {
      id
      diet
      allergens
    }
  }
`

export const Loading = () => <Loader />

export const Empty = () => (
  <div className="relative rounded border border-gray-400 bg-gray-100 px-4 py-3 text-gray-700">
    <strong className="font-bold">No user preference found.</strong>
  </div>
)

export const Failure = ({
  error,
}: CellFailureProps<FindUserPreferenceQueryVariables>) => (
  <div
    className="relative rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
    role="alert"
  >
    <strong className="font-bold">Error:</strong>
    <span className="block sm:inline"> {error?.message}</span>
  </div>
)

export const Success = ({
  userPreference,
  refetch,
}: CellSuccessProps<
  FindUserPreferenceQuery,
  FindUserPreferenceQueryVariables
>) => {
  return (
    <MealPreferenceForm
      diet={userPreference?.diet}
      allergens={userPreference?.allergens}
      refetch={refetch}
    />
  )
}
