import ErpLayout from '@/components/shared/layout/erp'

const Home = ()=>{
  const app = {
    title: process.env.npm_package_name,
    version: process.env.npm_package_version
  }

  return (
    <ErpLayout app={app}>
      <h1>My Content</h1>
    </ErpLayout>
  )
}

export default Home;