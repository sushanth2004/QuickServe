import { useState } from "react";

const User = ({ name, city, contact }) => {
  const [count] = useState(0);
  const [count2] = useState(1);

  return (
    <div className="user">
      <h2>Count = {count}</h2>
      <h2>Count2 = {count2}</h2>
      <h3>Name : {name}</h3>
      <h3>City : {city}</h3>
      <h3>Contact : {contact}</h3>
    </div>
  );
};

export default User;
