import type { UserPreference } from '@prisma/client'

import {
  userPreferences,
  userPreference,
  createUserPreference,
  updateUserPreference,
  deleteUserPreference,
} from './userPreferences'
import type { StandardScenario } from './userPreferences.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('userPreferences', () => {
  scenario(
    'returns all userPreferences',
    async (scenario: StandardScenario) => {
      const result = await userPreferences()

      expect(result.length).toEqual(Object.keys(scenario.userPreference).length)
    }
  )

  scenario(
    'returns a single userPreference',
    async (scenario: StandardScenario) => {
      const result = await userPreference({
        id: scenario.userPreference.one.id,
      })

      expect(result).toEqual(scenario.userPreference.one)
    }
  )

  scenario('creates a userPreference', async (scenario: StandardScenario) => {
    const result = await createUserPreference({
      input: {
        updatedAt: '2022-12-19T00:24:09.302Z',
        userId: scenario.userPreference.two.userId,
      },
    })

    expect(result.updatedAt).toEqual(new Date('2022-12-19T00:24:09.302Z'))
    expect(result.userId).toEqual(scenario.userPreference.two.userId)
  })

  scenario('updates a userPreference', async (scenario: StandardScenario) => {
    const original = (await userPreference({
      id: scenario.userPreference.one.id,
    })) as UserPreference
    const result = await updateUserPreference({
      id: original.id,
      input: { updatedAt: '2022-12-20T00:24:09.303Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2022-12-20T00:24:09.303Z'))
  })

  scenario('deletes a userPreference', async (scenario: StandardScenario) => {
    const original = (await deleteUserPreference({
      id: scenario.userPreference.one.id,
    })) as UserPreference
    const result = await userPreference({ id: original.id })

    expect(result).toEqual(null)
  })
})
