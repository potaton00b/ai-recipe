import type { Recipe } from '@prisma/client'

import {
  recipes,
  recipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
} from './recipes'
import type { StandardScenario } from './recipes.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('recipes', () => {
  scenario('returns all recipes', async (scenario: StandardScenario) => {
    const result = await recipes()

    expect(result.length).toEqual(Object.keys(scenario.recipe).length)
  })

  scenario('returns a single recipe', async (scenario: StandardScenario) => {
    const result = await recipe({ id: scenario.recipe.one.id })

    expect(result).toEqual(scenario.recipe.one)
  })

  scenario('creates a recipe', async (scenario: StandardScenario) => {
    const result = await createRecipe({
      input: {
        updatedAt: '2023-01-02T04:52:58.166Z',
        title: 'String',
        description: 'String',
        ingredients: 'String',
        steps: 'String',
        userId: scenario.recipe.two.userId,
      },
    })

    expect(result.updatedAt).toEqual(new Date('2023-01-02T04:52:58.166Z'))
    expect(result.title).toEqual('String')
    expect(result.description).toEqual('String')
    expect(result.ingredients).toEqual('String')
    expect(result.steps).toEqual('String')
    expect(result.userId).toEqual(scenario.recipe.two.userId)
  })

  scenario('updates a recipe', async (scenario: StandardScenario) => {
    const original = (await recipe({ id: scenario.recipe.one.id })) as Recipe
    const result = await updateRecipe({
      id: original.id,
      input: { updatedAt: '2023-01-03T04:52:58.167Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2023-01-03T04:52:58.167Z'))
  })

  scenario('deletes a recipe', async (scenario: StandardScenario) => {
    const original = (await deleteRecipe({
      id: scenario.recipe.one.id,
    })) as Recipe
    const result = await recipe({ id: original.id })

    expect(result).toEqual(null)
  })
})
