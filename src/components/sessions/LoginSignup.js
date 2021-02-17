import React from "react";
import { Tabs, Tab, Form, Button } from "react-bootstrap";
const LoginSignup = () => {
  return (
    <div className="login-signup-main-div">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-4 col-sm-10">
            <Tabs defaultActiveKey="login" className="register-tab">
              <Tab
                eventKey="login"
                title="Login"
                className="register-tab-content"
              >
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Button className="submit-btn" type="submit">
                    Submit
                  </Button>
                </Form>
              </Tab>
              <Tab
                eventKey="register"
                title="Register"
                className="register-tab-content"
              >
                <Form>
                  <Form.Group>
                    <Form.Control type="text" placeholder="Name" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>

                  <Form.Group>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      type="password"
                      placeholder="Re-enter Password"
                    />
                  </Form.Group>
                  <Button className="submit-btn" type="submit">
                    Submit
                  </Button>
                </Form>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
