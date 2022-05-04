import React from "react";
import Sidebar from "../components/navBar/Sidebar";
import Topbar from "../components/navBar/Topbar";
import { Feed } from "../components/feed/Feed";
import { Col, Row } from "react-bootstrap";
function Home() {
  return (
    <Row>
      <Topbar />
      <Col>
        <Sidebar />
      </Col>
      <Col>
        <Feed />
      </Col>
    </Row>
  );
}
export default Home;
