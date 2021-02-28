import React, { useRef } from "react";
import { Tabs, Tab, Form, Button } from "react-bootstrap";
import { signUp, login } from "../../services/user";
import { setCookie, getCookie } from "../../utils/cookieUtil";
const LoginSignup = () => {
  const name = useRef(null);
  const signup_email = useRef(null);
  const signup_password = useRef(null);
  const password_conf = useRef(null);
  const login_email = useRef(null);
  const login_password = useRef(null);
  const handleSignUp = async (event) => {
    event.preventDefault();
    console.log("register submit test ", event);

    const resp = await signUp({
      name: name.current.value,
      email: signup_email.current.value,
      password: signup_password.current.value,
      password_confirmation: password_conf.current.value
    });
    console.log(resp);
    if (resp && resp.data && resp.status === 200) {
      setCookie("id", resp.data.id, 1);
      window.location.href = process.env.REACT_APP_SUB_DOMAIN;
    }
  };
  const handleLogin = async (event) => {
    event.preventDefault();
    let formData = new FormData();
    formData.append("email", login_email.current.value);
    formData.append("password", login_password.current.value);

    const resp = await login(formData);
    console.log(resp);
    if (resp && resp.data && resp.status === 200) {
      console.log("resp ==>", resp);
      setCookie("id", resp.data.id, 1);
      window.location.href = process.env.REACT_APP_SUB_DOMAIN;
    }
  };
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
                <Form onSubmit={handleLogin}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      ref={login_email}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      ref={login_password}
                    />
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
                <Form onSubmit={handleSignUp}>
                  <Form.Group>
                    <Form.Control type="text" placeholder="Name" ref={name} />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      ref={signup_email}
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      ref={signup_password}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      type="password"
                      placeholder="Re-enter Password"
                      ref={password_conf}
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
