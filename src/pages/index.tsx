import { Button, message, PageHeader } from 'antd'
import { Route } from 'antd/lib/breadcrumb/Breadcrumb'

const IndexPage = () => {
  const routes: Route[] = [
    {
      path: '/',
      breadcrumbName: 'Home',
    },
  ]
  function handleClick() {
    message.info('Hello')
  }
  return (
    <div className="bg-orange-100">
      <PageHeader title="Hello" breadcrumb={{ routes }} />
      <Button type="primary" className="mx-4" onClick={handleClick}>
        Ruizu
      </Button>
    </div>
  )
}

export default IndexPage
