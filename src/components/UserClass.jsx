import React from "react";

class UserClass extends React.Component {
  //getting props
  constructor(props) {
    super(props);

    //creating state variables
    //creating multiple state variables
    this.state = {
      userInfo: {
        name: "Sushanth Neelam",
        location: "Hyderabad",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/sushanth2004");
    const json = await data.json();
    this.setState({ userInfo: json });

    console.log(json);
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user">
        <img src={avatar_url} />
        <h3>Name : {name}</h3>
        <h3>Location : {location}</h3>
      </div>
    );
  }
}

export default UserClass;
