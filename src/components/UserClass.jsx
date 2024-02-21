import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, bio } = this.props;
    return (
      <div className="userCard">
        <h3>Name: {name}</h3>
        <h5>Location : Delhi</h5>
        <h5>Bio : {bio}</h5>
      </div>
    );
  }
}

export default UserClass;
