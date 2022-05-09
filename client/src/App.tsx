import { Col, Row, Container } from "react-bootstrap";
import Home from "./pages/Home";
import { AppState, StateContext } from "./components/context/StateContext";
import { useState } from "react";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
function App() {
  const [appState, setAppState] = useState<AppState>({
    dishes: null,
  });

  return (
      <Login/>
    // <StateContext.Provider
    //   value={{ appState, setAppState: setAppState as any }}
    // >
    //   <Container>
    //     <Row>
    //       <Col>
    //         <Home />
    //       </Col>
    //     </Row>
    //   </Container>
    // </StateContext.Provider>
  );
}

export default App;
