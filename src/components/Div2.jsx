import { useState, React ,useEffect} from "react";



function Div(props) {
  console.log(props);
  const text = props.text;
const [selects,setSelects]=useState();

  const data = [
    {
      id: 0,
      CountryName: "USA",
      StateName: "North Carolina",
      CityName: "Texas",
      
    },
    {
      id: 1,
      CountryName: "UK",
      StateName: "FMO",
      CityName: "London",
      
    },
    {
      id: 2,
      CountryName: "PK",
      StateName: "PUNJAB",
      CityName: "LAHORE",
    
    },
    
  ];
  
  return (
    <div>
      <b>Select Country</b>
      <select onChange={(e)=>setSelects(e.target.value)} value={selects}>
        <option>Pakistan</option>
        <option>United States</option>
        <option>United Kingdom</option>
        

        {/* {data.map((product) => (
              <div className="border-solid border-2 p-10 m-8" key={product.id}>
                <img src={product.image} alt={product.name} />
               <div className="flex px-4">
                  <b className="text-2xl">{product.name}</b>
                  <i className="text-2xl "> Price {product.price}</i>
                </div>
                  <button className="bg-red-500 text-white text p-2 m-6">
                    Buy Now
                  </button>
                
              </div>
            ))}
  */}
      </select>
        <input
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
          placeholder="SELECT State Country City"
          style={{ height: "20px", width: "100px" }}
        />
    
    </div>
  );
}

export default function Div2(props) {
  const display = props.display;

  return (
    
    <div className="divBody2" style={props.style}>
 

        <Div
          onChange={props.onChange}
          value={props.value}
          text={true}
          className="inputBody"
        />

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
