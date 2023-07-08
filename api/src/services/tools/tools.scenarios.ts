import type { Prisma, Tool } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ToolCreateArgs>({
  tool: {
    one: { data: { name: 'String', description: 'String', url: 'String' } },
    two: { data: { name: 'String', description: 'String', url: 'String' } },
  },
})

export type StandardScenario = ScenarioData<Tool, 'tool'>
