import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { auth } from "../Auth";
import { onAuthStateChanged } from "firebase/auth";

import Logged from "./Logged";

// pages
import Home from "./Home";
import Login from "./Login";
import Join from "./Join";

const Router = () => {
  const [login, setLogin] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) =>
      user ? setLogin(true) : setLogin(false)
    );
  });

  return (
    <>
      {login ? (
        <Routes>
          <Route path="/" element={<Logged />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      )}
    </>
  );
};

export default Router;
