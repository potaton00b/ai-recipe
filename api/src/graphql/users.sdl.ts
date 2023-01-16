export const schema = gql`
  type User {
    id: Int!
    externalId: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    preference: UserPreference
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
    userByExternalId(externalId: String!): User @requireAuth
  }

  input CreateUserInput {
    externalId: String!
  }

  input UpdateUserInput {
    externalId: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
