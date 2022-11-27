import { ShoeCard } from "./ShoeCard";
import React, { useEffect, useState } from "react";
import axios from "axios";
const endpoint = "http://localhost:8000/api";
import { Link } from "react-router-dom";

function ShoesManList() {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    const response = await axios.get(`${endpoint}/products`);
    setShoes(response.data);
  };

  const deleteShoe = async (id) => {
    await axios.delete(`${endpoint}/product/${id}`)
    getAllProducts();
  }

  //Arrays editados
  const listHombre = shoes.filter(shoe => shoe.categoria === "Hombre");
  const listWoman = shoes.filter(shoe => shoe.categoria === "Mujer");
  const listKid = shoes.filter(shoe => shoe.categoria === "Niño");

  return (
    <>
      <Link to="/create" className="btn btn-success btn-lg mt-2 mb-2 text-white">Agregar nuevo producto</Link>
      <div className="d-grid gap-2 grid grid-cols-3">
        <h1>Zapatos para Hombre</h1>
        {listHombre.map((shoe) => (

          <div key={shoe.id}>
            <h2>Nombre: {shoe.nombre}</h2>
            <p>Id: {shoe.id}</p>
            <p>Precio: {shoe.precio}</p>
            <img src={shoe.imagen}/>
            <Link to={'/edit/${shoe.id}'} className="btn btn-warning text-white">Editar</Link>
            <button onClick={() => deleteShoe(shoe.id)}className="btn btn-danger">Eliminar</button>
          </div>
        ))}
      </div>

      <div className="d-grid gap-2">
        <h1>Zapatos para Mujer</h1>
        {listWoman.map((shoe) => (

          <div key={shoe.id}>
            <h2>Nombre: {shoe.nombre}</h2>
            <p>Id: {shoe.id}</p>
            <p>Precio: {shoe.precio}</p>
            <img src={shoe.imagen}/>
            <Link to={'/edit/${shoe.id}'} className="btn btn-warning text-white">Editar</Link>
            <button onClick={() => deleteShoe(shoe.id)}className="btn btn-danger">Eliminar</button>
          </div>
        ))}
      </div>

      <div className="d-grid gap-2">
        <h1>Zapatos para Niño</h1>
        {listKid.map((shoe) => (

          <div key={shoe.id}>
            <h2>Nombre: {shoe.nombre}</h2>
            <p>Id: {shoe.id}</p>
            <p>Precio: {shoe.precio}</p>
            <img src={shoe.imagen} alt="30p"/>
            <Link to={'/edit/${shoe.id}'} className="btn btn-warning text-white">Editar</Link>
            <button onClick={() => deleteShoe(shoe.id)}className="btn btn-danger">Eliminar</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default ShoesManList;
