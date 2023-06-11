import type {
  QueryResolvers,
  MutationResolvers,
  ToolRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const tools: QueryResolvers['tools'] = () => {
  return db.tool.findMany()
}

export const tool: QueryResolvers['tool'] = ({ id }) => {
  return db.tool.findUnique({
    where: { id },
  })
}

export const createTool: MutationResolvers['createTool'] = ({ input }) => {
  return db.tool.create({
    data: input,
  })
}

export const updateTool: MutationResolvers['updateTool'] = ({ id, input }) => {
  return db.tool.update({
    data: input,
    where: { id },
  })
}

export const deleteTool: MutationResolvers['deleteTool'] = ({ id }) => {
  return db.tool.delete({
    where: { id },
  })
}

export const Tool: ToolRelationResolvers = {
  ToolboxTool: (_obj, { root }) => {
    return db.tool.findUnique({ where: { id: root?.id } }).ToolboxTool()
  },
}
