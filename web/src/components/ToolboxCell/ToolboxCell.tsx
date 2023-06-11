import type { FindToolboxQuery, FindToolboxQueryVariables } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindToolboxQuery($id: String!) {
    toolbox: toolbox(id: $id) {
      id
      name
      description
      tools {
        id
        comment

        tool {
          name
          description
          url
        }
      }
      user {
        username
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindToolboxQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  toolbox,
}: CellSuccessProps<FindToolboxQuery, FindToolboxQueryVariables>) => {
  return (
    <div>
      <h1>{toolbox.name}</h1>
      <p>{toolbox.description}</p>

      <ul>
        {toolbox.tools.map((toolboxTool) => (
          <li key={toolboxTool.id}>
            <a href={toolboxTool.tool.url} target="_blank" rel="noreferrer">
              {toolboxTool.tool.name}
            </a>
            : {toolboxTool.tool.description}
            {toolboxTool.comment ? <p>{toolboxTool.comment}</p> : undefined}
          </li>
        ))}
      </ul>
    </div>
  )
}
