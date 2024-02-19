import CmsLayout from '@/components/shared/layout/cms'

const Home = ()=>{
  const app = {
    title: process.env.npm_package_name,
    version: process.env.npm_package_version
  }

  return (
    <CmsLayout app={app}>
      <h1>My Content</h1>
    </CmsLayout>
  )
}

export default Home;