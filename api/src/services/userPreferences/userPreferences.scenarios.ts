import type { Prisma, UserPreference } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserPreferenceCreateArgs>({
  userPreference: {
    one: {
      data: {
        updatedAt: '2022-12-19T00:24:09.461Z',
        user: {
          create: {
            externalId: 'String3419476',
            updatedAt: '2022-12-19T00:24:09.461Z',
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2022-12-19T00:24:09.461Z',
        user: {
          create: {
            externalId: 'String4068603',
            updatedAt: '2022-12-19T00:24:09.461Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<UserPreference, 'userPreference'>
