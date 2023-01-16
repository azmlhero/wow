import { React, useState, useEffect } from "react";

import ChildDiv from "./newComponent/ChildDiv";

import Div2 from "./Div2";

export default function MainDiv(props) {
  const [text, setText] = useState("");
  const [check, setCheck] = useState("");

  return (
    <div>
      <div className="divBody">
        <Div2
          className="divBody2"
          style={{ borderBottom: "none", backgroundColor: "red" }}
        ></Div2>
        {/* <Country /> */}

        <ChildDiv
          onChange={(value) => setText(value)}
          value={text}
          style={{ backgroundColor: "black" }}
          field={true}
        />

        <ChildDiv
          onChange={(value) => setText(value)}
          value={text}
          style={{ margin: "", backgroundColor: "blue" }}
          field={true}
        />

        <ChildDiv
          onClick={(checked) => setCheck(checked)}
          style={{ margin: "", backgroundColor: "grey" }}
          field={false}
          checked={check}
        />
         <ChildDiv
          onClick={(checked) => setCheck(checked)}
          checked={check}

          style={{ margin: "", backgroundColor: "grey" }}
          field={false}
        />
      </div>
    </div>
  );
}
