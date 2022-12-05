import { ShoeCard } from "./ShoeCard";
import React, { useEffect, useState } from "react";
import axios from "axios";
const endpoint = "http://localhost:8000/api";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ShoesManList() {
  const [shoes, setShoes] = useState([]);
  const [karts, setKarts] = useState([]);
  const [sales, setSales] = useState([]);

  useEffect(() => {
    getAllProducts();
    getAllSales();
  }, []);

  const getAllProducts = async () => {
    const response = await axios.get(`${endpoint}/products`);
    setShoes(response.data);
  };

  const getAllSales = async () => {
    const response = await axios.get(`${endpoint}/sales`);
    setSales(response.data);
  };

  const deleteShoe = async (id) => {
    await axios.delete(`${endpoint}/product/${id}`);
    getAllProducts();
  };

  const getShoe = async (id) => {
    const kart = await axios.get(`${endpoint}/product/${id}`);
    setKarts(karts.concat(kart.data));
  };

  const storageSale = async (id, nombre, precio, categoria, imagen) => {
    await axios.post(`${endpoint}/sale`, {
      id: id,
      nombre: nombre,
      precio: precio,
      categoria: categoria,
      imagen: imagen,
    });

    //navigate("/");
  };

  //Arrays editados
  const listHombre = shoes.filter((shoe) => shoe.categoria === "Hombre");
  const listWoman = shoes.filter((shoe) => shoe.categoria === "Mujer");
  const listKid = shoes.filter((shoe) => shoe.categoria === "Niño");

  return (
    <>
      <Link
        to="/create"
        className="btn btn-success btn-lg mt-2 mb-2 text-white"
      >
        Agregar nuevo producto
      </Link>
      <div className="d-grid gap-2 grid grid-cols-3 lista">
        <h1>Zapatos para Hombre</h1>
        {listHombre.map((shoe) => (
          <div key={shoe.id} className="contenedor">
            <h2>Nombre: {shoe.nombre}</h2>
            <p>Id: {shoe.id}</p>
            <p>Precio: {shoe.precio}</p>
            <img src={shoe.imagen} className="algo" />
            <Link
              to={"/edit/${shoe.id}"}
              className="btn btn-warning text-white"
            >
              Editar
            </Link>
            <button
              onClick={() => deleteShoe(shoe.id)}
              className="btn btn-danger"
            >
              Eliminar
            </button>
            <button
              onClick={() => getShoe(shoe.id)}
              className="btn btn-primary"
            >
              Agregar a carrito
            </button>
          </div>
        ))}
      </div>
      <br />

      <div className="d-grid gap-2 lista">
        <h1>Zapatos para Mujer</h1>
        {listWoman.map((shoe) => (
          <div key={shoe.id} className="contenedor">
            <h2>Nombre: {shoe.nombre}</h2>
            <p>Id: {shoe.id}</p>
            <p>Precio: {shoe.precio}</p>
            <img src={shoe.imagen} />
            <Link
              to={"/edit/${shoe.id}"}
              className="btn btn-warning text-white"
            >
              Editar
            </Link>
            <button
              onClick={() => deleteShoe(shoe.id)}
              className="btn btn-danger"
            >
              Eliminar
            </button>
            <button
              onClick={() => getShoe(shoe.id)}
              className="btn btn-primary"
            >
              Agregar a carrito
            </button>
          </div>
        ))}
      </div>
      <br />

      <div className="d-grid gap-2  lista">
        <h1>Zapatos para Niño</h1>
        {listKid.map((shoe) => (
          <div key={shoe.id} className="contenedor">
            <h2>Nombre: {shoe.nombre}</h2>
            <p>Id: {shoe.id}</p>
            <p>Precio: ${shoe.precio}</p>
            <img src={shoe.imagen} alt="30p" />
            <Link
              to={"/edit/${shoe.id}"}
              className="btn btn-warning text-white"
            >
              Editar
            </Link>
            <button
              onClick={() => deleteShoe(shoe.id)}
              className="btn btn-danger"
            >
              Eliminar
            </button>
            <button
              onClick={() => getShoe(shoe.id)}
              className="btn btn-primary"
            >
              Agregar a carrito
            </button>
          </div>
        ))}
      </div>

      <div className="container-fluid p-5 bg-primary text-white">
        <div className="text-center">
          <h1>Carrito de Compras</h1>
          <p>Producto/s</p>
        </div>
        {karts.map((zap) => (
          <div key={zap.id} className="row">
            <div className="col-sm-6">
              <h4>Producto: {zap.nombre}</h4>
              <p>Id: {zap.id}</p>
              <p>Precio: ${zap.precio}</p>
            </div>
            <div className="col-sm-6">
              <p>Imagen: </p>
              <img src={zap.imagen} alt="30px" className="imagen" />
              <button
                onClick={() =>
                  storageSale(
                    zap.id,
                    zap.nombre,
                    zap.precio,
                    zap.categoria,
                    zap.imagen
                  )
                }
                type="submit"
              >
                Confirmar compra
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="container-fluid p-5 bg-dark text-white">
        <div>
          <h1>Productos vendidos</h1>
        </div>
        {sales.map((sal) => (
          <div key={sal.id} className="row">
            <div className="col-sm-6">
              <h4>Producto: {sal.nombre}</h4>
              <p>Id: {sal.id}</p>
              <p>Precio: ${sal.precio}</p>
            </div>
            <div className="col-sm-6">
              <p>Imagen: </p>
              <img src={sal.imagen} alt="30px" className="imagen" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ShoesManList;
