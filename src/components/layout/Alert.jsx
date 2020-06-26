import React, { useContext } from "react";

const Alert = (type, msg) => {
  return (
    // alert !== null && (
    <div className={`alert alert-${type}`}>
      <i className="fas fa-info-circle" />
    </div>
    // )
  );
};

export default Alert;
