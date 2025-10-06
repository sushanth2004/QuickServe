import React from "react";

class UserClass extends React.Component {
  //getting props
  constructor(props) {
    super(props);

    //creating state variables
    //creating multiple state variables
    this.state = {
      count: 0,
      count2: 1,
    };

    console.log("child constructor");
  }

  componentDidMount() {
    console.log("child componentDidMount");
  }

  render() {
    const { name, city, contact } = this.props; //desturcturing props
    const { count, count2 } = this.state; //destructuring state varibles

    console.log("child render");
    return (
      <div className="user">
        <h2>Count = {count}</h2> {/* using state variable */}
        <h2>Count2 = {count2}</h2>
        <button
          onClick={() => {
            // updating state variables
            this.setState({ count: count + 1, count2: count2 + 2 });
          }}
        >
          Increment Count
        </button>
        <h3>Name : {name}</h3> {/* using props */}
        <h3>City : {city}</h3>
        <h3>Contact : {contact}</h3>
      </div>
    );
  }
}

export default UserClass;
