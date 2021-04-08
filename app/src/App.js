import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {
  Dashboard,
  DataUmkm,
  AnalisaBisnis,
  AnalisaMenchatat,
  DataVoucher,
  Setting,
  Login, Chart
} from './pages'
import { Layout, Menu, Avatar, Row, Col, Divider, Image, Input, Dropdown } from 'antd';
import { DownOutlined, ArrowRightOutlined, StarFilled, StarTwoTone, ArrowLeftOutlined } from '@ant-design/icons';
import LogoMandiri from './image/Mandiri_logo.svg'
import Logo from './image/ChatatLogo.svg'
import { Provider } from 'react-redux'
import store from './redux/Store'
import PrivateRoute from "./hooks/PrivateRoute"
import PublicRoute from "./hooks/PublicRoute"
import LogoutMenu from "./components/LogoutMenu"
const { Header, Footer, Sider, Content } = Layout;
const { Search } = Input
const backgroundColor = "#002F79"
const backgroundColor2 = "#FFCB05"

const listMenu = [
  { path: "/dashboard", menuName: "Dashboard" },
  { path: "/data-umkm", menuName: "Data UMKM" },
  { path: "/analisa-bisnis", menuName: "Analisa Bisnis" },
  { path: "/analisa-menchatat", menuName: "Analisa Menchatat" },
  { path: "/data-voucher", menuName: "Data Voucher" },
  { path: "/setting", menuName: "Setting" },
]
const App = () => {
  const [theLogin, setLogin] = useState()


  
  
  
  return (
    <Provider store={store}>
      <Router>
        <PublicRoute restricted={true} exact path="/" component={Login} />
        <div hidden={false}>
          <Layout style={{ minHeight: '100vh' }}>
            <Sider width={270} style={{ padding: '1rem', backgroundColor: backgroundColor }} >
              <div style={{ marginBottom: '10px', height: '46px', width: '160px', backgroundColor: backgroundColor }}>
                <img src={LogoMandiri}></img>
              </div>
              <Row align={'middle'} style={{ paddingLeft: '20px', backgroundColor: 'rgba(216, 216, 216,0.11)', width: '208px', height: '61px', color: 'white', borderRadius: '5px' }}>
                <Col style={{ marginRight: "10px" }}>
                  <Avatar style={{ backgroundColor: backgroundColor2, zIndex: 100 }}>
                    G P
              </Avatar>
                </Col>
                <Col>
                  <Row style={{ fontWeight: 'bold' }}>Grandy P</Row>
                  <Row>B2B Dashboard</Row>
                </Col>
              </Row>
              <Row align={'bottom'} style={{ marginTop: '10px', marginBottom: '5px' }}>
                <Col style={{ color: 'white', fontSize: '15px' }}>
                  Main Menu
              </Col>
              </Row>
              <Divider style={{ backgroundColor: 'rgba(216, 216, 216,0.11)', margin: 0 }} />
              <Menu mode="inline" style={{ marginTop: '10px', backgroundColor: backgroundColor, color: 'white' }}>
                {listMenu.map((menu, index) => {
                  return (<Menu.Item key={index} style={{ color: 'white', fontSize: '15px' }} >
                    <Link
                      style={{ color: 'white', fontSize: '15px', textDecoration: "none" }}
                      to={menu.path}
                    >
                    </Link>
                    <p >{menu.menuName}</p>
                  </Menu.Item>)
                })}
              </Menu>
            </Sider>
            <Layout>
              <Header style={{ backgroundColor: "white", color: backgroundColor, boxShadow: '2px 2px 5px grey' }}>
                <Row justify="space-between" align="middle" style={{ width: "100%" }}>
                  <Col> <ArrowLeftOutlined /> Back</Col>
                  <Col >
                    <Row align="middle">
                      Powered By
                    <Image width={100}
                        src={Logo} preview={false} />
                      <Search placeholder="input search text" allowClear
                        //  onSearch={onSearch} 
                        style={{ width: 200, marginLeft: 20 }} />
             
                    </Row>
                  </Col>
                </Row>
              </Header>
              <Content style={{ padding: '60px 40px' }}>
                <Switch>
                  <PrivateRoute exact path="/dashboard" component={Dashboard} />
                  <PrivateRoute exact path="/data-umkm" component={DataUmkm} />
                  <PrivateRoute exact path="/analisa-bisnis" component={AnalisaBisnis} />
                  <PrivateRoute exact path="/analisa-menchatat" component={AnalisaMenchatat} />
                  <PrivateRoute exact path="/data-voucher" component={DataVoucher} />
                  <PrivateRoute exact path="/setting" component={Setting} />
                  <PrivateRoute exact path="/chart" component={Chart} />
                  {/* <Route exact path="/toast" component={Toast} /> */}
                  {/* <Route exact path="/calender" component={Calender} /> */}
                </Switch>
              </Content >
              {/* <Footer>Footer</Footer> */}
            </Layout>
          </Layout>
        </div>
      </Router>
    </Provider>

  );
}
export default App;