import React from "react";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h2 className="text-6xl">Oops!!!</h2>
      <p className="text-3xl">{error.statusText || error.message}</p>
      {
        error.status === 404 && <div>
            <h3>Page Not Fount</h3>
            <Link to={'/'} className="btn"><button>Go Back</button></Link>
        </div>
      }
    </div>
  );
}
