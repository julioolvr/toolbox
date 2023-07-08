import {
  Container,
  Title,
  Text,
  Stack,
  Image,
  Group,
  Paper,
  Box,
  Anchor,
  TypographyStylesProvider,
} from '@mantine/core'
import ReactMarkdown from 'react-markdown'
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
            px="md"
            sx={(theme) => ({
              overflow: 'hidden',
              border: '1px solid',
              borderColor: toolboxTool.tool.color || theme.colors.gray[4],
            })}
          >
            <Group>
              {toolboxTool.tool.mainImage ? (
                <Box>
                  <Image
                    src={toolboxTool.tool.mainImage}
                    sx={{ maxWidth: '14rem' }}
                  />
                </Box>
              ) : undefined}
              <Stack>
                <Stack spacing={0}>
                  <Title order={3}>{toolboxTool.tool.name}</Title>
                  <Anchor fz="sm" href={toolboxTool.tool.url} target="_blank">
                    {toolboxTool.tool.url}
                  </Anchor>
                </Stack>
                <Text c="dimmed" fz="sm">
                  {toolboxTool.tool.description}
                </Text>
                {toolboxTool.comment ? (
                  <TypographyStylesProvider>
                    <ReactMarkdown>{toolboxTool.comment}</ReactMarkdown>
                  </TypographyStylesProvider>
                ) : undefined}
              </Stack>
            </Group>
          </Paper>
        ))}
      </Stack>
    </Container>
  )
}
