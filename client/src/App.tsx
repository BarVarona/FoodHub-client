import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import { AppState, StateContext } from "./components/context/StateContext";
import { useState } from "react";
function App() {
  const [appState, setAppState] = useState<AppState>({
    dishes: null,
  });

  return (
    <StateContext.Provider
      value={{ appState, setAppState: setAppState as any }}
    >
      <Container>
        <Row>
          <Col>
            <Home />
          </Col>
        </Row>
      </Container>
    </StateContext.Provider>
  );
}

export default App;
