import {
  Container,
  Title,
  Text,
  Stack,
  Image,
  Group,
  Paper,
  Box,
} from '@mantine/core'
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
          color
          mainImage
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

      <Stack>
        {toolbox.tools.map((toolboxTool) => (
          <Paper
            key={toolboxTool.id}
            shadow="sm"
            radius="md"
            sx={(theme) => ({
              overflow: 'hidden',
              border: '1px solid',
              borderColor: toolboxTool.tool.color || theme.colors.gray[4],
            })}
          >
            <Group>
              <Box>
                <Image
                  src={toolboxTool.tool.mainImage}
                  sx={{ maxWidth: '14rem' }}
                />
              </Box>
              <Stack>
                <Title order={3}>{toolboxTool.tool.name}</Title>
                <Text c="dimmed" fz="sm">
                  {toolboxTool.tool.description}
                </Text>
                {toolboxTool.comment ? (
                  <Text>{toolboxTool.comment}</Text>
                ) : undefined}
              </Stack>
            </Group>
          </Paper>
        ))}
      </Stack>
    </Container>
  )
}
