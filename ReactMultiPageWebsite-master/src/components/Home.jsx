import React, { useState } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import "./style/home.css";
import {ToggleSwitch} from "./util" ;

function Home() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <h1 class="welcome">Welcome to our Homepage</h1>
            <Button
              className="dish_choice"
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              MENU
            </Button>
            <Menu
              className="menu"
              keepMounted
              anchorEl={anchorEl}
              onClose={handleClose}
              open={Boolean(anchorEl)}
            >
              <Link to="/pizza" style={{ textDecoration: "none" }}>
                <MenuItem>Pizza</MenuItem>
              </Link>
              <Link to="/salad" style={{ textDecoration: "none" }}>
                <MenuItem>Salads</MenuItem>
              </Link>
              <Link to="/drinks" style={{ textDecoration: "none" }}>
                <MenuItem>Drinks</MenuItem>
              </Link>
              <Link to="/sweets" style={{ textDecoration: "none" }}>
                <MenuItem>Sweets</MenuItem>
              </Link>
            </Menu>
          </div>
        </div>
        <div className="login">
          <Form onSubmit={handleSubmit}>
            <Form.Group size="lg">
              <Form.Label>Username</Form.Label>
              <Form.Control
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button block size="lg" type="submit" disabled={!validateForm()}>
              Login
            </Button>
            <ToggleSwitch Name='newsletter' />
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Home;
