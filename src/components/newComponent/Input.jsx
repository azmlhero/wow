import { useState, React } from "react";

function Div(props) {
  console.log(props);
  const text = props.text;

  return (
    <div>
      {!text ? (
        <input type="checkbox" />
      ) : (
        <input
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
          placeholder="Ammar"
          style={{ height: "20px", width: "100px" }}
        />
      )}
    </div>
  );
}

export default function Div2(props) {
  const display = props.display;

  return (
    <div className="divBody2" style={props.style}>
      <h2>hello I am {props.value}</h2>

      {display ? (
        <Div
          text={false}
          className="inputBody"
          onChange={props.onChange}
          value={props.value}
        />
      ) : (
        <Div
          onChange={props.onChange}
          value={props.value}
          text={true}
          className="inputBody"
        />
      )}
    </div>
  );
}

// var amrgreet= (name,age)=> {console.log(`${name} says Hi  and the age of ${name} is ${age} `)};
// undefined
// amrgreet("Ammar","22");
// VM4806:1 Ammar says Hi  and the age of Ammar is 22
// undefined
// amrgreet("Ammar",22);
// VM4806:1 Ammar says Hi  and the age of Ammar is 22

// import {useState, React} from "react"
// export default function Text()
//   {
//     const [text, setText]=useState('ammar');
//   function ChangeText(e){
//     setText(e.target.value)
//   }
// return(
//   <div>
//   <input value={text} onChange={ChangeText}></input>

//     <h2> {text}   </h2>
//     <button> Reset {()=> setText('hello')}</button>
//   </div>
// );

//   }
/////////////////////

//MainDiv.js


// import { React, useState } from "react";

// import Div2 from "./Div2";

// export default function MainDiv(props) {
//   const [repeat, setRepeat] = useState("ammar");
//   return (
//     <div>
//       <div className="divBody" style={props.style}>
//         <Div2
//           value={repeat}
//           onChange={setRepeat}
//           display={false}
//           className="divBody2"
//           style={{ borderBottom: "none", backgroundColor: "red" }}
//         ></Div2>
//         <Div2
//           value={repeat}
//           onChange={setRepeat}
//           display={true}
//           className="divBody2"
//           style={{ borderBottom: "none", backgroundColor: "blue" }}
//         ></Div2>
//         <Div2
//           value={repeat}
//           onChange={setRepeat}
//           display={true}
//           className="divBody2"
//           style={{ backgroundColor: "yellow" }}
//         />
//       </div>

//       <div className="divBody">
//         <Div2
//           value={repeat}
//           display={false}
//           className="divBody2"
//           style={{ backgroundColor: "blue" }}
//         ></Div2>

//         <Div2
//           value={repeat}
//           display={false}
//           className="divBody2"
//           style={{ margin: "5px  0px 0px 0px", backgroundColor: "red" }}
//         ></Div2>
//         <Div2
//           display={true}
//           className="divBody2"
//           style={{ margin: "5px  0px 0px 0px", backgroundColor: "yellow" }}
//         ></Div2>
//       </div>
//       <div className="divBody">
//         <Div2
//           value={repeat}
//           display={false}
//           className="divBody2"
//           style={{ borderBottom: "none", backgroundColor: "red" }}
//         ></Div2>
//         <Div2
//           display={true}
//           className="divBody2"
//           style={{ backgroundColor: "blue" }}
//         ></Div2>

//         <Div2
//           value={repeat}
//           display={false}
//           className="divBody2"
//           style={{ margin: "5px  0px 0px 0px", backgroundColor: "yellow" }}
//         ></Div2>
//       </div>
//     </div>
//   );
// }

// {
//   /* <Div text={true} className="inputBody"/>
// <Div text={true} className="inputBody"/>
// <Div text={true} className="inputBody"/>
// <Div text={true} className="inputBody"/>
// <Div text={true} className="inputBody"/>
// <Div text={true} className="inputBody"/>
// <Div text={true} className="inputBody"/> */
// }
