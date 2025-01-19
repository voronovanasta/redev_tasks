import { Link, Outlet } from 'react-router-dom';
import { Layout, Menu, theme, Typography } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Header, Content, Footer, Sider } = Layout;
const menuItems = [
  {
    key: '1',
    label: <Link to='/structure'>Project Structure</Link>,
  },
  {
    key: '2',
    label: <Link to='/vdom'>VDOM</Link>,
  },
  {
    key: '3',
    label: <Link to='/component'>Component</Link>,
  },
  {
    key: '4',
    label: <Link to='/props'>Props</Link>,
  },
  {
    key: '5',
    label: <Link to='/state'>State</Link>,
  },
  {
    key: '6',
    label: <Link to='/lifecycle'>Lifecycle</Link>,
  },
  {
    key: '7',
    label: <Link to='/events'>Events</Link>,
  },
  {
    key: '8',
    label: <Link to='/refs'>Refs</Link>,
  },
  {
    key: '9',
    label: <Link to='/fragment'>{`<Fragment>`}</Link>,
  },
  {
    key: '10',
    label: <Link to='/key'>Key</Link>,
  },
  {
    key: '11',
    label: 'Optimization',
    children: [
      {
        key: 111,
        label: <Link to='/memo'>React Memo</Link>,
      },
      {
        key: 112,
        label: <Link to='/usememo'>UseMemo</Link>,
      },
      {
        key: 113,
        label: <Link to='/callback'>UseCallback</Link>,
      },
      {
        key: 114,
        label: <Link to='/lazy'>Lazy API</Link>,
      },
    ],
  },
  {
    key: '12',
    label: <Link to='/context'>Context</Link>,
  },
  {
    key: '13',
    label: <Link to='/router'>React Router</Link>,
  },
  {
    key: '14',
    label: <Link to='/hoc'>HOC</Link>,
  },
  {
    key: '15',
    label: <Link to='/form'>Forms</Link>,
  },
  {
    key: '16',
    label: <Link to='/storages'>Storages</Link>,
  },
];

export function MainComponent() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header
        style={{
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'space-around',
          backgroundColor: '#00008b',
        }}
      >
        <Link style={{ marginRight: '20px', marginLeft: '20px' }} to='/'>
          <HomeOutlined style={{ fontSize: '24px', color: '#08c' }} />
        </Link>
        <Title style={{ color: '#FFFAFA' }} level={3}>
          Quick guideline on React Basics
        </Title>
        <Link style={{ margin: '10px 0' }} to='https://react.dev/learn' target='_blank'>
          <svg
            height='45'
            viewBox='175.7 78 490.6 436.9'
            width='45'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g fill='#61dafb'>
              <path d='m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z' />
              <circle cx='420.9' cy='296.5' r='45.7' />
            </g>
          </svg>
        </Link>
      </Header>
      <Content style={{ flex: 1 }}>
        <Layout
          style={{
            padding: '24px',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Sider
            style={{
              background: colorBgContainer,
            }}
            width={350}
          >
            <Menu
              mode='inline'
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['1']}
              style={{
                height: '100%',
              }}
              items={menuItems}
            />
          </Sider>
          <Content
            style={{
              padding: '0 24px',
              minHeight: 280,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Content>
      <Footer
        style={{
          padding: '15px',
          textAlign: 'center',
          height: '50px',
          backgroundColor: '#00008b',
          color: '#08c',
        }}
      >
        Redev Course ©2024 Created by Anastasiya Voronova
      </Footer>
    </Layout>
  );
}
