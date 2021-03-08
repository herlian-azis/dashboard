import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
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

const App = () => {

  const loginCheck = () => {
    if (localStorage.getItem("auth")) {
      console.log("masook")
      return (
        <>
         <Search />
      <Sidebar />
        </>
      )
    }
  }
  return (
    // <Provider store={store}>
    <Router>
     {/* {loginCheck()} */}
    { localStorage.getItem("auth") ?
    <>
     <Search />
      <Sidebar />
      
    </> : null}
      <Switch>

        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/data-umkm" component={DataUmkm} />
        <Route exact path="/analisa-bisnis" component={AnalisaBisnis} />
        <Route exact path="/analisa-menchatat" component={AnalisaMenchatat} />
        <Route exact path="/data-voucher" component={DataVoucher} />
        <Route exact path="/setting" component={Setting} />
        {/* <Route exact path="/toast" component={Toast} /> */}
        {/* <Route exact path="/calender" component={Calender} /> */}
      </Switch>
    </Router>
    // </Provider>
  );
}

export default App;
