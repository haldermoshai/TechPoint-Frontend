import "./styles/Global.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import MyAccount from "./pages/Account";
import MyCart from "./pages/Cart";
import ContactUs from "./pages/Contact";

import Smartphones from "./components/Smartphones";
import Laptops from "./components/Laptops";
import Earphones from "./components/Earphones";
import Cameras from "./components/Cameras";

function App() {
  return (
    <div>
      <Navbar/>
      <main>
        <Routes>
          <Route path = "/" element = { <Home/> }/>
          <Route path = "/login" element = { <Login/> }/>
          <Route path = "/MyAccount" element = { <MyAccount/> }/>
          <Route path = "/MyCart" element = { <MyCart/> }/>
          <Route path = "/ContactUs" element = { <ContactUs/> }/>

          <Route path = "/Smartphones" element = { <Smartphones/> }/>
          <Route path = "/Laptops" element = { <Laptops/> }/>
          <Route path = "/Earphones" element = { <Earphones/> }/>
          <Route path = "/Cameras" element = { <Cameras/> }/>
        </Routes>
      </main>
    </div>
  );
}

export default App;