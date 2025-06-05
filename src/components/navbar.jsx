import React from 'react';
import logo from '../assets/images/OLX_green_logo.svg.png'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { IoCarSportOutline } from "react-icons/io5";
import AppDropdown from './dropdown';
import { BsBuildings } from "react-icons/bs";
import AppSearch from './search';
import Appfooter from './footer';
import { useContext } from 'react';
import FormValues from '../config/context';
import AppAdd from './add';
const { Header, Content, Footer } = Layout;
const items = Array.from({ length: 3 }).map((_, index) => ({
  key: String(index + 1),
  label: `nav ${index + 1}`,
}));
const AppLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const {contextInit,setcontextInit}=useContext(FormValues)
  // console.log(contextInit)
  return (
    <Layout >
      <Header className='bg-white'
        style={{
          backgroundColor: 'white',
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: 20
        }}
      >
        {/* <div className="demo-logo" />  */}
        {/* <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        /> */}

        <div className='flex items-center gap-x-12'>
          <img src={logo} width={60} alt="" />
          <div className='flex items-center gap-x-2  font-bold text-base firstdiv'><IoCarSportOutline className='text-4xl rounded-2xl  p-1 via-gray-300 bg-conic-180' />Motors</div>
          <div className='flex items-center gap-x-2  font-bold text-base firstdiv'> <BsBuildings className='text-4xl rounded-2xl  p-1 via-gray-300 bg-conic-180' />Property</div>
        </div>
      </Header>
      <Content style={{ padding: '0 48px' }}>
        {/* <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <div
          style={{
            padding: "24px 0px",
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <AppDropdown />
          <div className='flex flex-wrap gap-4 justify-center' style={{marginTop:"10px" , width:'100%'}}>
          <AppAdd/>
          </div>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center', borderTop: "solid 2px #bcc7c9" }}>
        <Appfooter />
      </Footer>
    </Layout>
  );
};
export default AppLayout;