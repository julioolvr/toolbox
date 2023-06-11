import type { FindToolboxQuery, FindToolboxQueryVariables } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindToolboxQuery($id: String!) {
    toolbox: toolbox(id: $id) {
      id
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
  return <div>{JSON.stringify(toolbox)}</div>
}
