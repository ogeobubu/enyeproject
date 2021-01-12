import React, { useState } from "react";
import "./Header.css";

import { Button, Form, FormControl, Container } from "react-bootstrap";

import Profile from "../Profile/Profile";

const Header = () => {
  const [finalSearchTerm, setFinalSearchTerm] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const clickSubmit = (e) => {
    e.preventDefault();

    setFinalSearchTerm(searchTerm);
  };

  return (
    <header>
      <Container>
        <div className="header-container">
          <h2>
            <span id="colored">Enye</span> Project
          </h2>

          <Form inline onSubmit={clickSubmit}>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2 form"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
            <Button onClick={clickSubmit} variant="outline-warning">
              Search
            </Button>
          </Form>
        </div>
        <Profile setFinalSearchTerm={finalSearchTerm} />
      </Container>
    </header>
  );
};

export default Header;
