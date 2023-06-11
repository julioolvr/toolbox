import type { Prisma, ToolboxTool } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ToolboxToolCreateArgs>({
  toolboxTool: {
    one: {
      data: {
        comment: 'String',
        toolbox: {
          create: {
            name: 'String',
            description: 'String',
            user: { create: { username: 'String' } },
          },
        },
        tool: {
          create: { name: 'String', description: 'String', url: 'String' },
        },
      },
    },
    two: {
      data: {
        comment: 'String',
        toolbox: {
          create: {
            name: 'String',
            description: 'String',
            user: { create: { username: 'String' } },
          },
        },
        tool: {
          create: { name: 'String', description: 'String', url: 'String' },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<ToolboxTool, 'toolboxTool'>
