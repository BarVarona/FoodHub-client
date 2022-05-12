import Home from "./pages/Home";
import { AppState, StateContext } from "./components/context/StateContext";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  const [appState, setAppState] = useState<AppState>({
    dishes: null,
    userInfo: {
      isAdmin: false,
      status: false,
      token: "   dfdafas",
      message: "sdfda",
    },
  });
  const { userInfo, dishes } = appState;

  return (
    <StateContext.Provider
      value={{ appState, setAppState: setAppState as any }}
    >
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={!userInfo?.token ? <Login /> : <Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
        ,
      </Container>
    </StateContext.Provider>
  );
}

export default App;
