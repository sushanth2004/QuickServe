import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="about">
        <h1>About Us</h1>
        <h2>Welcome to our food delivery app - QuickServe</h2>
        <h2>Our Team</h2>
        <div className="team-container">
          <UserClass />
        </div>
      </div>
    );
  }
}

export default About;
