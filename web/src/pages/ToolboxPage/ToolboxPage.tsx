import { MetaTags } from '@redwoodjs/web'

import ToolboxCell from 'src/components/ToolboxCell'

type ToolboxPageProps = {
  id: string
}

const ToolboxPage = ({ id }: ToolboxPageProps) => {
  return (
    <>
      <MetaTags title="Toolbox" description="Toolbox page" />

      <ToolboxCell id={id} />
    </>
  )
}

export default ToolboxPage
