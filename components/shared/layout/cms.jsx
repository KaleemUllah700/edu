"use client"
import { Breadcrumb, Layout, Menu, theme } from 'antd'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const { Header, Content, Footer, Sider } = Layout;

const CmsLayout = ({children, app}) => {
 const pathname = usePathname();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const items = []

  const getLink = (index)=>{
    const Router = pathname.split("/").slice(1);
    const tmp = Router.slice(0, index+1);
    return "/"+tmp.join("/")
  }

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
        <div>
          <Breadcrumb>
            {
              pathname.split("/").slice(1).map((item, index)=>(
                <Breadcrumb.Item key={index}>
                  <Link href={getLink(index)}>{item}</Link>
                </Breadcrumb.Item>
              ))
            }
          </Breadcrumb>
        </div>
        <Content
          style={{
            margin: '24px 16px 0',
            overflow: 'initial',
          }}
        >
          <div
            style={{
              padding: 24,
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
            Edux Version: 1.0.0 ©{new Date().getFullYear()}
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