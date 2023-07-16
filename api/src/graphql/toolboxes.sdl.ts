export const schema = gql`
  type Toolbox {
    id: String!
    name: String!
    description: String!
    tools: [ToolboxTool]!
    user: User!
    userId: String!
  }

  type Query {
    toolboxes: [Toolbox!]! @requireAuth
    toolbox(id: String!): Toolbox @skipAuth
  }

  input CreateToolboxInput {
    name: String!
    description: String!
    userId: String!
  }

  input UpdateToolboxInput {
    name: String
    description: String
    userId: String
  }

  type Mutation {
    createToolbox(input: CreateToolboxInput!): Toolbox! @requireAuth
    updateToolbox(id: String!, input: UpdateToolboxInput!): Toolbox!
      @requireAuth
    deleteToolbox(id: String!): Toolbox! @requireAuth
  }
`
