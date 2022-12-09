import React from "react";

const Error = ({ statusCode }) => (
  <p>{statusCode ? `${statusCode}, bitch` : "An error occurred on client"}</p>
);

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null;
  return { statusCode };
};

export default Error;
