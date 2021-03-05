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
import Calender from './components/Calender'

import Toast from './pages/Toast'
const App = () => {
  return (
    // <Provider store={store}>
    <Router>
      <Search/>
      <Sidebar />
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
