import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/navbar/Navbar";
import PhoneAndZalo from "./components/phoneAndZalo/PhoneAndZalo";
import Footer from "./components/footer/Footer";
import Home from "./screens/Home";
import About from "./screens/About";
import Service from "./screens/Service";
import Customer from "./screens/Customer";
import PostContextProvider from "./contexts/CustomerContext";
import AuthContextProvider from "./contexts/AuthContext";
import TrashCustomer from "./screens/TrashCustomer";
function App() {
  return (
    <AuthContextProvider>
      <PostContextProvider>
        <Router>
          <Navbar></Navbar>
          <ToastContainer></ToastContainer>
          <main className="main-wrap">
            <PhoneAndZalo></PhoneAndZalo>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/service">
                <Service />
              </Route>
              <Route path="/customer">
                <Customer />
              </Route>
              {/* <Route path="/recycle">
                <TrashCustomer />
              </Route> */}
            </Switch>
            <Footer></Footer>
          </main>
        </Router>
      </PostContextProvider>
    </AuthContextProvider>
  );
}

export default App;
