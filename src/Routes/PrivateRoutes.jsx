import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Dasboard from "../Dashboard/Dasboard";
import { useAuth } from "../../src/context/auth";
import PageNotFound from "../../src/Main/PageNotFound";

const PrivateRoute = () => {
  const [loading, setLoading] = useState(true);
  const [, setAuthenticated] = useState(false); 
  const [auth] = useAuth(); // Get authentication status from context

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/v1/auth/user-auth", {
          headers: {
            Authorization: localStorage.getItem("token")
          }
        });
        if (response.data.ok) {
          setAuthenticated(true);
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
      } finally {
        setLoading(false);
      }
    };

    checkAuthentication();
  }, []);

  if (loading) {
    return null; 
  }

  return auth.token ? (
    <Dasboard />
  ) : (
    <Navigate to="/signin" />
    // <PageNotFound/>
  );
};

export default PrivateRoute;



























// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';
// import { useAuth } from '../context/auth';

// const PrivateRoute = ({ path, element: Element, ...rest }) => {
//   const [auth] = useAuth();

//   return auth.token ? (
//     <Route {...rest} path={path} element={<Element />} />
//   ) : (
//     <Navigate to="/signin" replace />
//   );
// };

// export default PrivateRoute;
