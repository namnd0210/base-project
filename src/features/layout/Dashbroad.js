import { useState } from 'react';
import { Layout, Menu } from 'antd';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Counter } from '../counter/Counter';
import CustomBreadcrumb from './Breadcrumb';
import ChatPage from './../chat/index';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const Dashbroad = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        {/* Side bar */}
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={() => setCollapsed(!collapsed)}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">
                <Link to="/mention">Mention</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/counter">Counter</Link>
              </Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>

        {/* Content */}
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <CustomBreadcrumb />

            <Route path="/">
              <div>hello</div>
            </Route>

            <Route path="/mention">
              <ChatPage />
            </Route>

            <Route path="/counter">
              <Counter />
            </Route>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Footer</Footer>
        </Layout>
      </Layout>
    </Router>
  );
};

export default Dashbroad;
