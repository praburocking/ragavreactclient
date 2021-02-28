import React, { useEffect, useState } from "react";
import "./styles.scss";
import { connect } from "react-redux";
import NavBar from "./components/Navbar";
import AddPost from "./components/new_AddPost";

import Home from "./components/home/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Lisiting from "./components/listing/Lisiting";
import Details from "./components/details/Details";
import LoginSignup from "./components/sessions/LoginSignup";

function App({ supply }) {
  const [detailsValue, setDetailsValue] = useState([]);
  useEffect(() => {
    setDetailsValue(supply);
  }, [supply]);

  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/register'>
          <LoginSignup />
        </Route>
        <Route path='/addpost'>
          <AddPost />
        </Route>
        <Route path='/listing/:ID' exact>
          <Lisiting />
        </Route>
        <Route path='/details/:ID' exact>
          {(detailsValue &&
            detailsValue.supplyList &&
            detailsValue.supplyList.length >= 1) ||
          (detailsValue &&
            detailsValue.demandList &&
            detailsValue.demandList.length >= 1) ? (
            <Details />
          ) : (
            <Redirect to='/' />
          )}
        </Route>
        <Footer />
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    supply: state.update,
  };
};

export default connect(mapStateToProps)(App);
