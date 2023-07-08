import { Container, Title, Text, SimpleGrid, Card } from '@mantine/core'
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
    <Container>
      <Title>{toolbox.name}</Title>
      <Text>{toolbox.description}</Text>

      <SimpleGrid cols={3}>
        {toolbox.tools.map((toolboxTool) => (
          <Card
            key={toolboxTool.id}
            withBorder
            shadow="sm"
            radius="md"
            component="a"
            target="_blank"
            href={toolboxTool.tool.url}
            rel="noreferrer"
          >
            <Title order={3}>{toolboxTool.tool.name}</Title>
            <Text>{toolboxTool.tool.description}</Text>
            <Text>
              {toolboxTool.comment ? <p>{toolboxTool.comment}</p> : undefined}
            </Text>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  )
}
