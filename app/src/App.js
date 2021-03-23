import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import {
  Dashboard,
  DataUmkm,
  AnalisaBisnis,
  AnalisaMenchatat,
  DataVoucher,
  Setting,
  Login
} from './pages'
import Search from './components/Search'
import { Layout, Menu, Avatar, Row, Col, Divider, Image } from 'antd';
import { ArrowRightOutlined, StarFilled, StarTwoTone ,ArrowLeftOutlined } from '@ant-design/icons';
import LogoMandiri from './image/Mandiri_logo.svg'
import Logo from './image/ChatatLogo.svg'

const { Header, Footer, Sider, Content } = Layout;

const backgroundColor = "#002F79"
const backgroundColor2 = "#FFCB05"

const App = () => {


  return (
    // <Provider store={store}>
    <div >

      <Router>
        {/* {loginCheck()} */}
        <Route exact path="/" component={Login} />

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
              <Menu.Item key='1' style={{ marginTop: '10px', color: 'white', fontSize: '15px' }} >
                <Link
                  style={{ color: 'white', fontSize: '15px', textDecoration: "none" }}
                  to="/dashboard"
                >
                </Link>
                <p>Dashboard</p>
              </Menu.Item>
              <Menu.Item key='2' style={{ marginTop: '10px', color: 'white', fontSize: '15px' }}>
                <Link
                  style={{ color: 'white', fontSize: '15px', textDecoration: "none" }}
                  to="/data-umkm"
                >
                </Link>
                <p>Data UMKM</p>
              </Menu.Item>
              <Menu.Item key='3' style={{ marginTop: '10px', color: 'white', fontSize: '15px' }}>
                <Link
                  style={{ color: 'white', fontSize: '15px', textDecoration: "none" }}
                  to="/analisa-bisnis"
                >
                </Link>
                <p>Analisa Bisnis</p>
              </Menu.Item>
              <Menu.Item key='4' style={{ marginTop: '10px', color: 'white', fontSize: '15px' }}>
                <Link
                  style={{ color: 'white', fontSize: '15px', textDecoration: "none" }}
                  to="/analisa-menchatat"
                >
                </Link>
                <p>Analisa Menchatat</p>
              </Menu.Item>
              <Menu.Item key='5' style={{ marginTop: '10px', color: 'white', fontSize: '15px' }}>
                <Link
                  style={{ color: 'white', fontSize: '15px', textDecoration: "none" }}
                  to="/data-voucher"
                >
                </Link>
                <p>Data Voucher</p>
              </Menu.Item>
              <Menu.Item key='6' style={{ marginTop: '10px', color: 'white', fontSize: '15px' }}>
                <Link
                  style={{ color: 'white', fontSize: '15px', textDecoration: "none" }}
                  to="/setting"
                >
                </Link>
                <p>Setting</p>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ backgroundColor: "white", color: backgroundColor, boxShadow: '2px 2px 5px grey' }}>
              <Row justify={"space-between"}>
                <Col> <ArrowLeftOutlined/> Back</Col>
                <Col>
                <Image width={200}
                src={Logo} preview={false}/>
                </Col>

              </Row>

            </Header>
            <Content style={{ padding: '60px 40px' }}>
              <Switch>
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/data-umkm" component={DataUmkm} />
                <Route exact path="/analisa-bisnis" component={AnalisaBisnis} />
                <Route exact path="/analisa-menchatat" component={AnalisaMenchatat} />
                <Route exact path="/data-voucher" component={DataVoucher} />
                <Route exact path="/setting" component={Setting} />
                {/* <Route exact path="/toast" component={Toast} /> */}
                {/* <Route exact path="/calender" component={Calender} /> */}
              </Switch>
            </Content >
            <Footer>Footer</Footer>
          </Layout>
        </Layout>


      </Router>
      {/* </Provider> */}
    </div>

  );
}

export default App;
