import type {
  QueryResolvers,
  MutationResolvers,
  ToolboxToolRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const toolboxTools: QueryResolvers['toolboxTools'] = () => {
  return db.toolboxTool.findMany()
}

export const toolboxTool: QueryResolvers['toolboxTool'] = ({ id }) => {
  return db.toolboxTool.findUnique({
    where: { id },
  })
}

export const createToolboxTool: MutationResolvers['createToolboxTool'] = ({
  input,
}) => {
  return db.toolboxTool.create({
    data: input,
  })
}

export const updateToolboxTool: MutationResolvers['updateToolboxTool'] = ({
  id,
  input,
}) => {
  return db.toolboxTool.update({
    data: input,
    where: { id },
  })
}

export const deleteToolboxTool: MutationResolvers['deleteToolboxTool'] = ({
  id,
}) => {
  return db.toolboxTool.delete({
    where: { id },
  })
}

export const ToolboxTool: ToolboxToolRelationResolvers = {
  toolbox: (_obj, { root }) => {
    return db.toolboxTool.findUnique({ where: { id: root?.id } }).toolbox()
  },
  tool: (_obj, { root }) => {
    return db.toolboxTool.findUnique({ where: { id: root?.id } }).tool()
  },
}
