import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor() {
    super();

    // state variables
    this.state = {
      name: "",
      bio: "",
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/pranavthakur404");
    const json = await data.json();
    this.setState({
      name: json.name,
      bio: json.bio,
    });
  }

  render() {
    const { name, bio } = this.state;
    return (
      <>
        <main>
          <h1>Hello this is About page</h1>
          <UserClass name={name} bio={bio} />
        </main>
      </>
    );
  }
}

export default About;
