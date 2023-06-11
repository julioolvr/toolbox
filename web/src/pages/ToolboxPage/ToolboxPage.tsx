import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import ToolboxCell from 'src/components/ToolboxCell'

type ToolboxPageProps = {
  id: string
}

const ToolboxPage = ({ id }: ToolboxPageProps) => {
  return (
    <>
      <MetaTags title="Toolbox" description="Toolbox page" />

      <h1>ToolboxPage</h1>
      <p>
        Find me in <code>./web/src/pages/ToolboxPage/ToolboxPage.tsx</code>
      </p>
      <p>
        My default route is named <code>toolbox</code>, link to me with `
        <Link to={routes.toolbox({ id: '42' })}>Toolbox 42</Link>`
      </p>
      <p>The parameter passed to me is {id}</p>

      <ToolboxCell id={id} />
    </>
  )
}

export default ToolboxPage
