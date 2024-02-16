import { Layout } from 'antd'
const { Content, Footer, Sider } = Layout
const Home = () => {

  return (
    <Layout>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
      </Sider>
      <Layout>

        <Content
          style={{
            margin: '24px 16px 0',
            overflow: 'initial',
          }}
        >
          <div
            style={{
              padding: 24,
              textAlign: 'center',
            }}
          >
            <p>Our content</p>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          edex © {new Date().getFullYear()} Created by edex company
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Home;