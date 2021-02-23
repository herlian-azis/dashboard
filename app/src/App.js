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
function App() {
  return (
    <Router>
      {/* <Sidebar /> */}
      <Switch>
        {/* <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path="/data-umkm" component={DataUmkm}/>
        <Route exact path="/analisa-bisnis" component={AnalisaBisnis}/>
        <Route exact path="/analisa-menchatat" component={AnalisaMenchatat}/>
        <Route exact path="/data-voucher" component={DataVoucher}/>
        <Route exact path="/setting" component={Setting}/> */}
        <Route exact path="/login" component={Login}/>
      </Switch>
    </Router>
  );
}

export default App;
