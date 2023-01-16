import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        externalId: 'String7042277',
        updatedAt: '2022-12-19T00:13:14.959Z',
      },
    },
    two: {
      data: {
        externalId: 'String3415384',
        updatedAt: '2022-12-19T00:13:14.960Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
