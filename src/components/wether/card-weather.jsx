import React from "react";

export const CardWeather = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <h6 className="card-subtitle">{}</h6>
        <hr className="hr" />
      </div>
    </div>
  );
};
