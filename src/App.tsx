import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { auth } from "./Auth";
import { onAuthStateChanged } from "firebase/auth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Join from "./pages/Join";
import Main from "./components/Main";

function App() {
  const [login, setLogin] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => (user ? setLogin(true) : setLogin(false)));
  });

  return (
    <div className="App">
      {login ? (
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
