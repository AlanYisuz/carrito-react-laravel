import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const endpoint = "http://localhost:8000/api/product";

function ShoeForm() {
  const [id, setId] = useState(0);
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState(0);
  const [categoria, setCategoria] = useState("");
  const [imagen, setImagen] = useState("");
  const navigate = useNavigate();

  const storage = async (e) => {
    e.preventDefault();
    await axios.post(endpoint, {
      id: id,
      nombre: nombre,
      precio: precio,
      categoria: categoria,
      imagen: imagen,
    });
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={storage}>
        <div>
          <label>Nombre:</label>
          <input
            className="form-label"
            type="text"
            placeholder="Nombre Zapato"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div>
          <label>Id:</label>
          <input
            className="form-label"
            type="number"
            placeholder="Id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>

        <div>
          <label>Precio:</label>
          <input
            className="form-label"
            type="number"
            placeholder="Precio"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
        </div>

        <div>
          <label>Categoria:</label>
          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="" hidden>-------------</option>
            <option value="Hombre">Hombre</option>
            <option value="Mujer">Mujer</option>
            <option value="Niño">Niño</option>
          </select>
        </div>

        <div>
          <label>Imagen:</label>
          <input
            className="form-label"
            type="text"
            placeholder="Imagen"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Agregar
        </button>
      </form>
    </div>
  );
}

export default ShoeForm;
