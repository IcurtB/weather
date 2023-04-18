import React, { useEffect, useState } from "react";

const countriesURL = new URL("https://restcountries.com/v3.1/all");

export const Header = () => {
  const [contries, setContries] = useState(null);

  useEffect(() => {
    fetch(countriesURL)
      .then((res) => res.json())
      .then((data) => setContries(data));
  }, []);
  console.log("contries", contries);
  return (
    <div
      className="d-flex justy-content-center align-items-center  "
      style={{ height: "70px", background: "#48484a" }}
    >
      <div className="container-xl d-flex gap-3  align-items-center">
        <div className="input-group ">
          <div className="input-group-text">
            <span className="input-group-text" id="search-country"></span>
          </div>
          <input
            type="search"
            placeholder="Бишкек"
            className="form-control dropdown-toggle "
            aria-describedby="search-country"
          />
        </div>
      </div>
    </div>
  );
};
