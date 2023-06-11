export const schema = gql`
  type ToolboxTool {
    id: String!
    comment: String!
    toolbox: Toolbox!
    toolboxId: String!
    tool: Tool!
    toolId: String!
  }

  type Query {
    toolboxTools: [ToolboxTool!]! @requireAuth
    toolboxTool(id: String!): ToolboxTool @requireAuth
  }

  input CreateToolboxToolInput {
    comment: String!
    toolboxId: String!
    toolId: String!
  }

  input UpdateToolboxToolInput {
    comment: String
    toolboxId: String
    toolId: String
  }

  type Mutation {
    createToolboxTool(input: CreateToolboxToolInput!): ToolboxTool! @requireAuth
    updateToolboxTool(
      id: String!
      input: UpdateToolboxToolInput!
    ): ToolboxTool! @requireAuth
    deleteToolboxTool(id: String!): ToolboxTool! @requireAuth
  }
`
