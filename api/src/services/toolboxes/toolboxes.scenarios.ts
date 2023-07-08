import type { Prisma, Toolbox } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ToolboxCreateArgs>({
  toolbox: {
    one: {
      data: {
        name: 'String',
        description: 'String',
        user: { create: { username: 'String' } },
      },
    },
    two: {
      data: {
        name: 'String',
        description: 'String',
        user: { create: { username: 'String' } },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Toolbox, 'toolbox'>
