import React from "react";

const User = ({ name }) => {
  return (
    <div className="userCard">
      <h3>Name: {name}</h3>
      <h5>Location : Delhi</h5>
      <h5>Contact : Pranavtkr404@gmail.com</h5>
    </div>
  );
};

export default User;
