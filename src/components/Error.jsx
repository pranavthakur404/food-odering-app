import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <>
      <h1>Opps Something went wrong !!</h1>
      <p>{error.error.message}</p>
    </>
  );
};
export default Error;
