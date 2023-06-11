import type { ToolboxTool } from '@prisma/client'

import {
  toolboxTools,
  toolboxTool,
  createToolboxTool,
  updateToolboxTool,
  deleteToolboxTool,
} from './toolboxTools'
import type { StandardScenario } from './toolboxTools.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('toolboxTools', () => {
  scenario('returns all toolboxTools', async (scenario: StandardScenario) => {
    const result = await toolboxTools()

    expect(result.length).toEqual(Object.keys(scenario.toolboxTool).length)
  })

  scenario(
    'returns a single toolboxTool',
    async (scenario: StandardScenario) => {
      const result = await toolboxTool({ id: scenario.toolboxTool.one.id })

      expect(result).toEqual(scenario.toolboxTool.one)
    }
  )

  scenario('creates a toolboxTool', async (scenario: StandardScenario) => {
    const result = await createToolboxTool({
      input: {
        comment: 'String',
        toolboxId: scenario.toolboxTool.two.toolboxId,
        toolId: scenario.toolboxTool.two.toolId,
      },
    })

    expect(result.comment).toEqual('String')
    expect(result.toolboxId).toEqual(scenario.toolboxTool.two.toolboxId)
    expect(result.toolId).toEqual(scenario.toolboxTool.two.toolId)
  })

  scenario('updates a toolboxTool', async (scenario: StandardScenario) => {
    const original = (await toolboxTool({
      id: scenario.toolboxTool.one.id,
    })) as ToolboxTool
    const result = await updateToolboxTool({
      id: original.id,
      input: { comment: 'String2' },
    })

    expect(result.comment).toEqual('String2')
  })

  scenario('deletes a toolboxTool', async (scenario: StandardScenario) => {
    const original = (await deleteToolboxTool({
      id: scenario.toolboxTool.one.id,
    })) as ToolboxTool
    const result = await toolboxTool({ id: original.id })

    expect(result).toEqual(null)
  })
})
