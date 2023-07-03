import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error: any = useRouteError();

  return (
    <>
      <h2>Sorry! Nothing found</h2>
      <p>{error.statusText || error.message}</p>
    </>
  );
}

export default ErrorPage;
