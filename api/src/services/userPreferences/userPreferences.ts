import type {
  QueryResolvers,
  MutationResolvers,
  UserPreferenceRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const userPreferences: QueryResolvers['userPreferences'] = () => {
  return db.userPreference.findMany()
}

export const userPreference: QueryResolvers['userPreference'] = ({ id }) => {
  return db.userPreference.findUnique({
    where: { id },
  })
}

export const userPreferenceByCurrentUser: QueryResolvers['userPreferenceByCurrentUser'] =
  () => {
    return db.userPreference.findUnique({
      where: { userId: context.currentUser.id },
    })
  }

export const createUserPreference: MutationResolvers['createUserPreference'] =
  ({ input }) => {
    return db.userPreference.create({
      data: input,
    })
  }

export const updateUserPreference: MutationResolvers['updateUserPreference'] =
  ({ id, input }) => {
    return db.userPreference.update({
      data: input,
      where: { id },
    })
  }

export const updateUserPreferenceByCurrentUser: MutationResolvers['updateUserPreferenceByCurrentUser'] =
  ({ input }) => {
    return db.userPreference.update({
      data: input,
      where: { userId: context.currentUser.id },
    })
  }

export const deleteUserPreference: MutationResolvers['deleteUserPreference'] =
  ({ id }) => {
    return db.userPreference.delete({
      where: { id },
    })
  }

export const UserPreference: UserPreferenceRelationResolvers = {
  user: (_obj, { root }) => {
    return db.userPreference.findUnique({ where: { id: root?.id } }).user()
  },
}
