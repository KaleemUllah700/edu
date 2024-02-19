"use client"
import { Layout, Menu, theme } from 'antd'

const { Header, Content, Footer, Sider } = Layout;

const CmsLayout = ({children, app}) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const items = []

  return (
    <Layout hasSider>
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
        <Menu theme="dark" items={items} />;
       
      </Sider>
      <Layout
        style={{
          marginLeft: 200,
        }}
      >
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
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
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          <span className='capitalize'>
            {app && app.title} Version: {app && app.version} ©{new Date().getFullYear()}
         </span>
        </Footer>
      </Layout>
    </Layout>
  );
}

export default CmsLayout

/**
 * Datasets for menu
 * const items = [
    {
        label: 'Dashboard',
        key: 'dashboard',
        icon: <DashboardOutlined />
    },
    {
        label: 'Settings',
        key: 'settings',
        icon: <SettingOutlined />
    },
    {
        label: 'Authentication',
        key: 'authentication',
        children: [
            {
                label: 'Register',
                key: 'register',
                children: [
                    {
                        label: 'Testing1',
                        key: 'testing1',
                        icon: <HomeOutlined />
                    },
                    {
                        label: 'Testing2',
                        key: 'testing2',
                        icon: <EditOutlined />
                    }
                ],
                icon: <UserOutlined />
            },
            {
                label: 'Signin',
                key: 'signin',
                icon: <FormOutlined />
            }
        ],
        icon: <LoginOutlined />
    }
  ]
 */