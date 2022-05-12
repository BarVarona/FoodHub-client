import React, { useEffect, useState, useContext } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import {loginAuth}  from "../../api/userAuth";
import { StateContext } from "../../components/context/StateContext";
import { UserAuth } from "../../interface/UserAuth.model";

function Login() {
  const {appState,setAppState} = useContext(StateContext);
  const [val, setVal] = useState<UserAuth>({
    email: "",
    password: "",
  });
  useEffect(() => {
  }, []);

  const handelInputValue = (e: any) => {
    const { name, value } = e.target;
    if (name === "email") {
      setVal({ ...val, email: value });
    }
    if (name === "password") {
      setVal({ ...val, password: value });
    }
  };

  const handelSubmit = async (e: any) => {
    e.preventDefault();
    
    if (val){
      const getUserInfo=await loginAuth(val);
      if(getUserInfo){
        setAppState({...appState,userInfo:getUserInfo});
      }
    }
  };
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="mt-5 text-warning text-center">Foodhub</h1>
          <Card className="mt-5 p-5 shadow">
            <Form onSubmit={handelSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="email"
                  onChange={handelInputValue}
                  type="email"
                  placeholder="Enter email"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  onChange={handelInputValue}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Keep me signed" />
              </Form.Group>
              <Button size={"lg"} variant="warning" type="submit" style={{ width: '500px' }}>
                Login
              </Button>
              <hr></hr>
              <Button size={"lg"} variant="outline-warning" style={{ width: '500px' }}>Register</Button>
            </Form>
          </Card>
        </Col>
        <Col>
          <img src={require('../../images/homePagePic.png')} className='mt-4' style={{ width: "730px", height: "620px" }}></img>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;