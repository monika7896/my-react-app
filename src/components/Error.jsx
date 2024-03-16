import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log("object", err);
  return (
    <>
      <h2>Opps!!</h2>
      <h3>This is error page</h3>
      <p>{err.status}</p>
    </>
  );
};

export default Error;
