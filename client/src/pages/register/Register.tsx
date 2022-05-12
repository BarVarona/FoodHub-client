import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { registerAuth } from "../../api/newUserAuth"
import { StateContext } from "../../components/context/StateContext";
import { NewUserAuth } from "../../interface/NewUserAuth.model";

function Register() {
  const { appState, setAppState } = useContext(StateContext);
  const [val, setVal] = useState<NewUserAuth>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    // confirmPassword: "",
  });

  const handelInputValue = (e: any) => {
    const { name, value } = e.target;
    if (name === "FirstName") {
      setVal({ ...val, firstName: value });
    }
    if (name === "lastname") {
      setVal({ ...val, lastName: value });
    }
    if (name === "email") {
      setVal({ ...val, email: value });
    }
    if (name === "password") {
      setVal({ ...val, password: value });
    }
  };
  const handelSubmit = async (e: any) => {
    e.preventDefault();

    if (val) {
      const getUserInfo = await registerAuth(val);
      if (getUserInfo) {
        setAppState({ ...appState, userInfo: getUserInfo });
      }
    }
  };

  return (
    <div className="Register">
      <div className="col-2">
        <h1>Register</h1>
        <Form onSubmit={handelSubmit}>
          <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="FirstName"
              placeholder=" Enter FirstName"
              name="FirstName"
              onChange={handelInputValue}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="lastname"
              placeholder="Enter LastName"
              name="lastname"
              onChange={handelInputValue}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              name="email"
              onChange={handelInputValue}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={handelInputValue}
            />
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confrim Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confrim Password"
              name="password"
              onChange={handelInputValue}
            />
          </Form.Group> */}
          <Button variant="success" type="submit">
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Register;
