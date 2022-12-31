import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function State(props) {

    const [sta, setStateValue] = useState([])

    useEffect(() => {
        axios.post("https://countriesnow.space/api/v0.1/countries/states", {
            "country": props.value
        }).then((res) => {
            setStateValue(res.data.data.states)
        }
        )
    }, [props.value])

    return (

        <div className='ChildDiv' id='ChildDiv2'>

            <label for="cars">State</label>

            <select id="cars" value={props.values} onChange={(event) => { props.callbackMethods(event.target.value) }} >

                



                <option value="Punjab">Select State</option>
                {
                    sta.map((sta, id) => {

                        return (
                            <option key={id} value={sta.name} >{sta.name}</option>
                        )
                    })

                }

            </select>
        </div>

    )
}





// import { useState, useEffect } from "react";
// import City from "./City";
// import axios from "axios";

// export default function State(props) {
//   const [states, setStates] = useState([]);
//   const [selectedState, setSelectedState] = useState();

//   useEffect(() => {
//     getStates();
//   }, [props]);

//   async function getStates() {
//     await axios
//       .get("https://countriesnow.space/api/v0.1/countries/states")
//       .then((res) => {
//         res.data.data.map((names) => {
//           console.log(props.selected);
//           if (names.name === props.selected) {
//             const st = names.states;
//             setStates(st);
//           }
//         });
//       });
//   }

//   return (
//     <div>
//       <h1>Select States</h1>
//       <select
//         value={selectedState}
//         onChange={(e) => setSelectedState(e.target.value)}
//       >
//         <option value="" selected disabled hidden>
//           Choose here
//         </option>
//         {states ? (
//           states.map((state) => <option>{state.name}</option>)
//         ) : (
//           <div>No States Available.</div>
//         )}
//       </select>
//       <h3>Selected States: {selectedState}</h3>
//     </div>
//   );
// }
// import "../App.css";
// import { useState, useEffect } from "react";
// import axios from "axios";

// function Pest(props) {
//   const [states, setStates] = useState([]);
//   const [stateName, setStateName] = useState([]);

//   // useEffect(()=>{
//   //   getStates();
//   // },[props.value])

//   useEffect(() => {
//     const getStates = async () => {
//       axios
//         .post("https://countriesnow.space/api/v0.1/countries/states", {
//           "country": props.country,
//         })
//         .then((res) => {
//           // console.log(res.data.data[0,5]);

//           setStates(res.data.data);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     };
//     getStates();
//   }, [props.value]);

//   return (
//     <div>
//       <select
//         style={{ width: "100px" }}
//         value={props.value}
//         onChange={(e) => props.callBackMethod2(e.target.value)}
//       >
//         {/* <select style={{width:"100px"}}  value={props.value} onChange={(e)=>setStateName(e.target.value)}> */}

//         {states ? (
//           states.map((stat, id) => (
//             <option key={id} value={stat.id}>
//               {stat.name}
//             </option>
//           ))
//         ) : (
//           <div>ammar</div>
//         )}
//       </select>
//       {states}
//     </div>
//   );
// }

// export default function State() {
//   return (
//     <div className="divBody2">
//       <h2>State</h2>
//       <Pest />
//     </div>
//   );
// }

// // import { people } from './data.js';
// // import { getImageUrl } from './utils.js';

// // export default function List() {
// //   const chemists= people.filter(person=>person.profession==="chemist");
// //  const mix= people.filter(person=>person.profession!=="chemist");
// //   const  chemistsItems =chemists.map(person=>

// //    <li key={person.id}>
// //    <img src={getImageUrl(person)}
// //      alt={person.name}/>

// //      <p><b>{person.name}:</b>
// //        {" "+ person.profession + " "}
// //        known for {person.accomplishment}
// //      </p>

// //    </li>
// //    );
// //   const listItems = mix.map(person =>
// //     <li key={person.id}>
// //       <img
// //         src={getImageUrl(person)}
// //         alt={person.name}
// //       />
// //       <p>
// //         <b>{person.name}:</b>
// //         {' ' + person.profession + ' '}
// //         known for {person.accomplishment}
// //       </p>
// //     </li>
// //   );
// //   return (
// //     <article>
// //       <h1>Scientists</h1>
// //       <h1>Chemist</h1>
// //       <ul>{chemistsItems}</ul>
// //       <h1>Everyone Else</h1>
// //       <ul>{listItems}</ul>

// //     </article>
// //   );
// // }
