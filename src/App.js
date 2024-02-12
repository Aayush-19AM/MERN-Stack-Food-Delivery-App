
import './App.css';
import Home from './screens/Home';
import Signup from './screens/Signup.js';
import {CartProvider} from './components/ContextReducer.js'

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import AboutUs from './screens/AboutUs.jsx';
import Login from './screens/Login.jsx';
import MyOrder from './screens/MyOrder.js';
function App() {
  return (
    <CartProvider>
   <Router>
    <div>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/createuser' element={<Signup/>}></Route>
        <Route exact path='/Login' element={<Login/>}></Route>
        <Route exact path='/AboutUs' element={<AboutUs/>}></Route>
        <Route exact path='/myOrder' element={<MyOrder/>}></Route>

      </Routes>
    </div>
   </Router>
   </CartProvider>
  );
}

export default App;
