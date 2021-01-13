export const typeDefs = `
  type Query {
    getUsers: [User]!
    getUser(id: ID!): User!
  }

  type Mutation {
    createUser(input: UserInput!): User!
    deleteUser(id: ID!): User!
    updateUser(id: ID!, input: UserInput!): User!
  }

  type User {
    id: ID!
    nickname: String!
    fullname: String!
    phone: String
    city: String
  }

  input UserInput {
    nickname: String!
    fullname: String!
    phone: String
    city: String
  }
`;
