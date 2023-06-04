import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../home/HomePage";
import NotFound from "../pages/notfound/Notfound";
import Dash from "../dashboard/Dash";
import Signup from "../auth/Signup";
import Login from "../auth/Login";
import DriverLogin from "../auth/driverLogin";
import About from "../pages/about/About";
import Contact from "../pages/contact/contact";




const AppRouter = () => {



  return (
    <Router>
    
      <Routes>  
        <Route>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dash" element={<Dash />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/driverlogin" element={<DriverLogin />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
