import React from "react";

const LetraHino = ({ letra }) => {
  return (
    <div className="hino">
      <span
        className="hino-estrofe"
        dangerouslySetInnerHTML={{ __html: letra.replace(/\n/g, "<br>") }}
      />
    </div>
  );
};

export default LetraHino;
