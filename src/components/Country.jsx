import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export default function Country(props) {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    axios.get("https://countriesnow.space/api/v0.1/countries")
      .then((res) => {
        console.log(res)
        setCountry(res.data.data)
      }
      )
  }, []);



  return (

    <div className='ChildDiv' style={props.style}>

      <label>Countries</label>

      <select id='cars' value={props.value} onChange={(event) => { props.callbackMethod(event.target.value) }}>

        <option>Select Country</option>

        {
          country.map((con, id) => {

            return (
              <option key={id} value={con.id}>{con.country}</option>
            )
          })

        }

      </select>
    </div>

  )
}








// import { useState, useEffect } from "react";
// import axios from "axios";
// import State from "./State";

// export default function Country() {
//   const [country, setCountry] = useState([]);
//   const [selectedCountry, setSelectedCountry] = useState();

//   useEffect(() => {
//     getCountries(); 
//   }, [selectedCountry]);

//   async function getCountries() {
//     await axios
//       .get("https://countriesnow.space/api/v0.1/countries")
//       .then((response) => {
//         setCountry(response.data.data);
//         console.log(country, "here");
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }

//   return (
//     <div className="divBody2">
//       <h1>Select Country</h1>
//       <select
//         value={selectedCountry}
//         onChange={(e) => setSelectedCountry(e.target.value)}
//       >
//         <option value="" selected disabled hidden>
//           Choose here
//         </option>
//         {country ? (
//           country.map((countryName) => <option>{countryName.country}</option>)
//         ) : (
//           <div>No Countries Available.</div>
//         )}
//       </select>

//       <h3>Selected Country: {selectedCountry}</h3>

//       <State selected={selectedCountry} />
//       <City selected={selectedState} />
//     </div>
//   );
// }



// import "../App.css";
// import { useState, useEffect } from "react";
// import axios from "axios";

// export default function Country(props) {
//   // getting json file
//   const [countries, setCountries] = useState([]);
//   // specified for countries work
//   const [countryName, setCountryName] = useState([]);

//   // useEffect(() => {
//   //   getCountries();
//   //   console.log(countries);
//   // }, []);

//   useEffect(() => {
//     const getCountries = async () => {
//       await axios
//         .get("https://countriesnow.space/api/v0.1/countries")
//         // back tick ``
//         // .get(https://countriesnow.space/api/v0.1/countries)
//         .then((response) => {
//           // handle success
//           //console.log(response.data.data[0]);
//           setCountries(response.data.data);
//           console.log(countries, "here");
//         })
//         .catch(function (error) {
//           // handle error
//           console.log(error);
//         });
//     };
//     getCountries();
//   }, [props.value]);

//   return (
//     <div className="divBody2">
//       {/* key={countries.id} */}
//       <h2>Country</h2>
//       <select
//         style={{ width: "100px" }}
//         value={props.value}
//         onChange={(e) => {
//           props.callBackMethod(e.target.value);
//         }}
//       >
//         {countries ? (
//           countries.map((coun, id) => (
//             <option key={id} value={coun.id}>
//               {coun.country}
//             </option>
//           ))
//         ) : (
//           // console.log(coun.name) ;

//           <div>asasasa</div>
//         )}
//       </select>
//       {countryName}
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
