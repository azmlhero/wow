import { React, useState, useEffect } from "react";
import Dropdown from "react-dropdown";

import "react-dropdown/style.css";
import State from "./State";

import Div2 from "./Div2";

import Country from "./Country";

export default function MainDiv(props) {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);

  return (
    <div>
      <div className="divBody">
        <Div2
          className="divBody2"
          style={{ borderBottom: "none", backgroundColor: "red" }}
        ></Div2>
        {/* <Country /> */}

        <CountryDiv callbackMethod={(value) => setCountryvalue(value)} />

        <StateDiv
          value={getcountryvalue}
          callbackMethods={(value) => setStateValue(value)}
        />

        <CityDiv value={getcountryvalue} values={sta} />
      </div>
    </div>
  );
}
