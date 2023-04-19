import React, { useEffect, useState } from "react";

const countriesURL = new URL("https://restcountries.com/v3.1/all");

export const Header = ({ setOption }) => {
  const [contries, setContries] = useState(null);
  const [focus, setFocus] = useState(false);
  useEffect(() => {
    fetch(countriesURL)
      .then((res) => res.json())
      .then((data) => setContries(data));
  }, []);
  const handleFocus = () => setFocus(true);
  const hanldeBlur = () => setFocus(false);
  const [text, setText] = useState("");
  function handleOption(option) {
    setText(option.capital?.[0]);
    setOption(option);
    setFocus(false);
  }
  return (
    <div
      className="d-flex justy-content-center align-items-center  "
      style={{ height: "70px", background: "#48484a", zIndex: 1 }}
    >
      <div className="container-xl d-flex gap-3 align-items-center">
        <div
          className="input-group"
          style={{ zIndex: 1, position: "relative" }}
          tabIndex={1}
          onFocus={handleFocus}
          onBlur={hanldeBlur}
        >
          <div className="input-group-text">
            <span className="input-group-text" id="search-country"></span>
          </div>
          <input
            type="search"
            placeholder="Бишкек"
            className="form-control dropdown-toggle "
            aria-describedby="search-country"
            value={text}
            style={{ zIndex: 1 }}
            onChange={(e) => setText(e.target.value)}
          />
          {focus && (
            <div
              className="card"
              style={{
                position: "absolute",
                zIndex: 1,
                height: "fit-content",
                maxHeight: "300px",
                overflowY: "scroll",
                top: "40px",
                width: "calc(100%)",
              }}
            >
              <ul>
                {contries
                  ?.filter(
                    (item) =>
                      item.capital?.[0]
                        .toLowerCase()
                        .startsWith(text.toLowerCase()) ||
                      item.capital?.[0]
                        .toLowerCase()
                        .includes(text.toLowerCase())
                  )
                  .map((country) => (
                    <li
                      key={country.name.official}
                      onClick={() => {
                        handleOption(country);
                      }}
                      style={{ ":hover": { background: "red" } }}
                    >
                      {country.capital?.[0]}
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
