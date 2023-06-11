import type { Toolbox } from '@prisma/client'

import {
  toolboxes,
  toolbox,
  createToolbox,
  updateToolbox,
  deleteToolbox,
} from './toolboxes'
import type { StandardScenario } from './toolboxes.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('toolboxes', () => {
  scenario('returns all toolboxes', async (scenario: StandardScenario) => {
    const result = await toolboxes()

    expect(result.length).toEqual(Object.keys(scenario.toolbox).length)
  })

  scenario('returns a single toolbox', async (scenario: StandardScenario) => {
    const result = await toolbox({ id: scenario.toolbox.one.id })

    expect(result).toEqual(scenario.toolbox.one)
  })

  scenario('creates a toolbox', async (scenario: StandardScenario) => {
    const result = await createToolbox({
      input: {
        name: 'String',
        description: 'String',
        userId: scenario.toolbox.two.userId,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.description).toEqual('String')
    expect(result.userId).toEqual(scenario.toolbox.two.userId)
  })

  scenario('updates a toolbox', async (scenario: StandardScenario) => {
    const original = (await toolbox({ id: scenario.toolbox.one.id })) as Toolbox
    const result = await updateToolbox({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a toolbox', async (scenario: StandardScenario) => {
    const original = (await deleteToolbox({
      id: scenario.toolbox.one.id,
    })) as Toolbox
    const result = await toolbox({ id: original.id })

    expect(result).toEqual(null)
  })
})
