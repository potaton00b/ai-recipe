export const schema = gql`
  type Recipe {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    title: String!
    description: String!
    ingredients: [String]!
    steps: [String]!
    note: String
    user: User!
    userId: Int!
  }

  type Query {
    recipes: [Recipe!]! @requireAuth
    recipe(id: Int!): Recipe @requireAuth
    myRecipes: [Recipe!]! @requireAuth
  }

  input CreateRecipeInput {
    title: String!
    description: String!
    ingredients: [String]!
    steps: [String]!
    note: String
    userId: Int!
  }

  input CreateRecipeByCurrentUserInput {
    title: String!
    description: String!
    ingredients: [String]!
    steps: [String]!
    note: String
  }

  input UpdateRecipeInput {
    title: String
    description: String
    ingredients: [String]!
    steps: [String]!
    note: String
    userId: Int
  }

  type Mutation {
    createRecipe(input: CreateRecipeInput!): Recipe! @requireAuth
    createRecipeByCurrentUser(input: CreateRecipeByCurrentUserInput!): Recipe!
      @requireAuth
    updateRecipe(id: Int!, input: UpdateRecipeInput!): Recipe! @requireAuth
    deleteRecipe(id: Int!): Recipe! @requireAuth
  }
`
