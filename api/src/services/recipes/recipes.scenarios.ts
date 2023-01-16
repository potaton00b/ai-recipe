import type { Prisma, Recipe } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.RecipeCreateArgs>({
  recipe: {
    one: {
      data: {
        updatedAt: '2023-01-02T04:52:58.223Z',
        title: 'String',
        description: 'String',
        ingredients: 'String',
        steps: 'String',
        user: {
          create: {
            externalId: 'String3220337',
            updatedAt: '2023-01-02T04:52:58.223Z',
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2023-01-02T04:52:58.223Z',
        title: 'String',
        description: 'String',
        ingredients: 'String',
        steps: 'String',
        user: {
          create: {
            externalId: 'String4628956',
            updatedAt: '2023-01-02T04:52:58.224Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Recipe, 'recipe'>
