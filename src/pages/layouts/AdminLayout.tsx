import React, { useState } from 'react'
import { Layout, Menu, Breadcrumb, Input, Row, Col, Avatar, Image, Typography } from 'antd';
import {
  UserOutlined,
  HomeOutlined,
  ProfileOutlined,
  SettingOutlined,
  BellOutlined,
  DropboxOutlined,
  PictureOutlined
} from '@ant-design/icons';
import { Link, Outlet } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Search } = Input;
const { Title } = Typography;
const onSearch = (value: string) => console.log(value);



type Props = {}

const AdminLayout = (props: Props) => {
  // const [collapsed , setCollapsed] = useState(false);
  // const onToggleCollapsed = () => (setCollapsed(!collapsed));
  return (
    <Layout style={{ minHeight: '100vh'}}>
    <Sider style={{ 
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,

        margin: '20px',
        background: '#fff'
    }}>
      <Row className="logo" style={{ padding: '10px 0'}}>
        <Link to="/" className="flex">
        <img src="https://res.cloudinary.com/assignmentjs/image/upload/v1644248903/img/logoc_tixge3.png" width={50}/>
        <Title level={4} style={{ marginLeft: 10}}>Logo</Title>
        </Link>
      </Row>
      <Menu defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to='dashboard'>Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<DropboxOutlined />}>
          <Link to='products'>Products</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<ProfileOutlined />}>
          <Link to='category'>Category</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<PictureOutlined />}>
          <Link to='slider'>Slider</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<UserOutlined />}>
          <Link to='products'>User</Link>
        </Menu.Item>
        {/* <SubMenu key="sub1" icon={<UserOutlined />} title="User">
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenu> */}
      </Menu>
    </Sider>
    <Layout className="site-layout" style={{ paddingLeft: 220, background: '#fff'}}>
      <Header className="site-layout-background" style={{ padding: 0, margin: '10px 16px', background: '#fff', boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px', borderRadius: 5}}>
      <Row>
        <Col span={8}>
          <Search placeholder="input search text" onSearch={onSearch} style={{ width: 500, padding: '15px 0 0 30px', borderRadius: 5}} />
          </Col>
        <Col span={8} offset={8} style={{ textAlign: 'right'}}>
          <BellOutlined style={{ fontSize: 20}}/>
          <SettingOutlined style={{ fontSize: 20, padding: '5px 0 0 20px'}}/> 
          <Avatar icon={<UserOutlined />} style={{ margin: '0 20px'}} />
          
          </Col>
      </Row>

      </Header>
      <Content style={{ margin: '0 16px' }}>
      <Outlet />
      </Content>
      <Footer style={{ textAlign: 'center', margin: '10px 16px', background: '#fff', boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px', borderRadius: 5 }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
  )
}

export default AdminLayout