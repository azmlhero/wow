import React from "react";

const data = [
  {
    id: 0,
    name: "AKG Earphones",
    price: "300",
    image: "./assets/AKG.jpg",
    
  },
  {
    id: 1,
    name: "Beats Bluetooth Earphone ",
    price: "3000",
    image: "./assets/beatsBt.jpg",
   
  },
  {
    id: 2,
    name: "Gionee Earphone",
    price: "400",
    image: "./assets/Gionee.jpg",
  
  },
  {
    id: 3,
    name: "Ligtning Cable",
    price: "500",
    image: "./assets/lightningCable.jpg",
    
  },
];

export default function ProductList() {
  return (
    
      <div className="p-10">
        <h1 className="text-3xl font-bold">Products</h1>
        
          <div className="grid grid-flow-row grid-cols-4 gap-10">
            {data.map((product) => (
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
          </div>
        </div>
      
   
  );
}
