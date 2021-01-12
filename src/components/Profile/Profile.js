import React, { useState, useEffect } from "react";
import "./Profile.css";

import { Alert } from "react-bootstrap";
import User from "../User/User";
import Pagination from "../Pagination/Pagination";

const Profile = ({ searchTerm }) => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(20);

  const fetchData = () => {
    fetch(
      "https://cors-anywhere.herokuapp.com/http://api.enye.tech/v1/challenge/records"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data.records.profiles);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="profile-container">
      <Alert variant="success">
        <Alert.Heading>
          Hi there!👋 I appreciate you for checking this out
        </Alert.Heading>
        <p>
          This is built using JavaScript to be precise React.js and
          React-Bootstrap as the CSS library.
        </p>
      </Alert>
      <User key={users.UserName} users={currentUsers} />
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Profile;
