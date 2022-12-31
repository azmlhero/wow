import React, { useEffect, useState } from "react";

import axios from "axios";

export default function City(props) {
  const [city, setCity] = useState([]);

  useEffect(() => {
    axios
      .post("https://countriesnow.space/api/v0.1/countries/state/cities", {
        country: props.value,

        state: props.values,
      })
      .then((res) => {
        console.log(res.data.data);

        setCity(res.data.data);
      });
  }, [props.value, props.values]);

  return (
    <div className="divBody2" >
      <label >Cities</label>

      <select>
        <option value="Lahore">Select City</option>

        {city.map((cities, id) => {
          return (
            <option key={id} value={cities.index}>
              {cities}
            </option>
          );
        })}
      </select>
    </div>
  );
}

// import "../App.css";
// import { useState, useEffect } from "react";
// import axios from "axios";

// export default function City(props) {
//   const [cities, setCities] = useState([]);
//   //   const [cityName,setCityName]=useState([]);

//   //   useEffect(()=>{
//   //     getCities();
//   //   },[])

//   useEffect(() => {
//     const getCities = async () => {
//       axios
//         .post("https://countriesnow.space/api/v0.1/countries/states", {
//           country: props.country,
//           state: props.state,
//         })
//         .then((res) => {
//           // console.log(res.data.data[0,5]);

//           setCities(res.data.data);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     };
//     getCities();
//   }, [props.value]);

//   return (
//     <div className="divBody2">
//       <h2>City</h2>
//       <select
//         style={{ width: "100px" }}
//         value={props.value}
//         onChange={(e) => {
//             props.callBackMethod(e.target.value);}}
//       >
//         {/* <select style={{width:"100px"}}  value={props.value} onChange={(e)=>setCityName(e.target.value)}> */}

//         {cities ? (
//           cities.map((cy, id) => (
//             <option key={id} value={cy.id}>
//               {cy.name}
//             </option>
//           ))
//         ) : (
//           <div>ammar</div>
//         )}
//       </select>
//       {cities}
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
