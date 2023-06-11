export const schema = gql`
  type Tool {
    id: String!
    name: String!
    description: String!
    url: String!
    ToolboxTool: [ToolboxTool]!
  }

  type Query {
    tools: [Tool!]! @requireAuth
    tool(id: String!): Tool @requireAuth
  }

  input CreateToolInput {
    name: String!
    description: String!
    url: String!
  }

  input UpdateToolInput {
    name: String
    description: String
    url: String
  }

  type Mutation {
    createTool(input: CreateToolInput!): Tool! @requireAuth
    updateTool(id: String!, input: UpdateToolInput!): Tool! @requireAuth
    deleteTool(id: String!): Tool! @requireAuth
  }
`
