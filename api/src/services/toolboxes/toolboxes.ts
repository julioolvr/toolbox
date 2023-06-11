import type {
  QueryResolvers,
  MutationResolvers,
  ToolboxRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const toolboxes: QueryResolvers['toolboxes'] = () => {
  return db.toolbox.findMany()
}

export const toolbox: QueryResolvers['toolbox'] = ({ id }) => {
  return db.toolbox.findUnique({
    where: { id },
  })
}

export const createToolbox: MutationResolvers['createToolbox'] = ({
  input,
}) => {
  return db.toolbox.create({
    data: input,
  })
}

export const updateToolbox: MutationResolvers['updateToolbox'] = ({
  id,
  input,
}) => {
  return db.toolbox.update({
    data: input,
    where: { id },
  })
}

export const deleteToolbox: MutationResolvers['deleteToolbox'] = ({ id }) => {
  return db.toolbox.delete({
    where: { id },
  })
}

export const Toolbox: ToolboxRelationResolvers = {
  tools: (_obj, { root }) => {
    return db.toolbox.findUnique({ where: { id: root?.id } }).tools()
  },
  user: (_obj, { root }) => {
    return db.toolbox.findUnique({ where: { id: root?.id } }).user()
  },
}
