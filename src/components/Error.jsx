import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="error">
      <h1>Oops!</h1>
      <h2>you are in trouble!!</h2>
      <h3>
        {err.status} : page {err.statusText}
      </h3>
      <h4>{err.data}</h4>
    </div>
  );
};

export default Error;
