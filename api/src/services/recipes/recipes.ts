import type {
  QueryResolvers,
  MutationResolvers,
  RecipeRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const recipes: QueryResolvers['recipes'] = () => {
  return db.recipe.findMany()
}

export const recipe: QueryResolvers['recipe'] = ({ id }) => {
  return db.recipe.findUnique({
    where: { id },
  })
}

export const myRecipes: QueryResolvers['myRecipes'] = () => {
  return db.recipe.findMany({
    where: { userId: context.currentUser.id },
  })
}

export const createRecipe: MutationResolvers['createRecipe'] = ({ input }) => {
  // remove any empty strings from the ingredients and steps arrays
  input.ingredients = input.ingredients.filter((i) => i)
  input.steps = input.steps.filter((i) => i)

  return db.recipe.create({
    data: input,
  })
}

export const createRecipeByCurrentUser: MutationResolvers['createRecipeByCurrentUser'] =
  ({ input }) => {
    // remove any empty strings from the ingredients and steps arrays
    input.ingredients = input.ingredients.filter((i) => i)
    input.steps = input.steps.filter((i) => i)

    return db.recipe.create({
      data: {
        ...input,
        userId: context.currentUser.id,
      },
    })
  }

export const updateRecipe: MutationResolvers['updateRecipe'] = ({
  id,
  input,
}) => {
  return db.recipe.update({
    data: input,
    where: { id },
  })
}

export const deleteRecipe: MutationResolvers['deleteRecipe'] = ({ id }) => {
  return db.recipe.delete({
    where: { id },
  })
}

export const Recipe: RecipeRelationResolvers = {
  user: (_obj, { root }) => {
    return db.recipe.findUnique({ where: { id: root?.id } }).user()
  },
}
