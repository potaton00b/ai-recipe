export const schema = gql`
  type UserPreference {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    diet: Diet!
    allergens: [Allergen]!
    user: User!
    userId: Int!
  }

  enum Diet {
    ANYTHING
    PALEO
    VEGETARIAN
    VEGAN
    KETOGENIC
    MEDITERRANEAN
  }

  enum Allergen {
    MILK
    EGGS
    FISH
    CRUSTACEAN_SHELLFISH
    TREE_NUTS
    PEANUTS
    WHEAT
    SOYBEANS
    SESAME
  }

  type Query {
    userPreferences: [UserPreference!]! @requireAuth
    userPreference(id: Int!): UserPreference @requireAuth
    userPreferenceByCurrentUser: UserPreference @requireAuth
  }

  input CreateUserPreferenceInput {
    diet: Diet!
    allergens: [Allergen]!
    userId: Int!
  }

  input UpdateUserPreferenceInput {
    diet: Diet
    allergens: [Allergen]!
    userId: Int
  }

  input UpdateUserPreferenceByCurrentUserInput {
    diet: Diet
    allergens: [Allergen]!
  }

  type Mutation {
    createUserPreference(input: CreateUserPreferenceInput!): UserPreference!
      @requireAuth
    updateUserPreference(
      id: Int!
      input: UpdateUserPreferenceInput!
    ): UserPreference! @requireAuth
    updateUserPreferenceByCurrentUser(
      input: UpdateUserPreferenceByCurrentUserInput!
    ): UserPreference! @requireAuth
    deleteUserPreference(id: Int!): UserPreference! @requireAuth
  }
`
