import React, { useEffect, useState } from "react";
import axios from "axios";
const endpoint = 'http://localhost:8000/api'
import {Link} from "react-router-dom"

export function ShoeCard() {


  const [shoes, setShoes] = useState([]);

  useEffect(()=>{
    getAllProducts()
  },[]);

  const getAllProducts = async () => {
    const response = await axios.get(`${endpoint}/products`)
    setShoes(response);
  }

  return (
    <>
        <div className="d-grid gap-2">
            {shoes.map( (shoe) => (
                <div key={shoe.id}>
                <h2>Nombre: {shoe.nombre}</h2>
                <p>Id: {shoe.id}</p>
                <p>Precio: {shoe.precio}</p>
                <p>Imagen: {shoe.imagen}</p>
                </div>
            ))}
        </div>
    </>
  );
}
