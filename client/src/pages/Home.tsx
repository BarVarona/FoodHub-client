import React from "react";
import Sidebar from "../components/navBar/Sidebar";
import Topbar from "../components/navBar/Topbar";
import { Col, Row } from "react-bootstrap";
import { Feed } from "../components/feed/Feed";
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
