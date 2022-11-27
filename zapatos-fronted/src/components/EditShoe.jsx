import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = "http://localhost:8000/api/product/";

const EditShoe = () => {
    // const [id, setId] = useState();
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState();
    const [categoria, setCategoria] = useState("");
    const [imagen, setImagen] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}${id}`, {
            nombre: nombre,
            precio: precio,
            categoria:categoria ,
            imagen: imagen,
        })
        navigate('/')
    }

    useEffect(() =>{
        const getProducById = async () => {
           const response = await axios.get(`${endpoint}${id}`)
           setNombre(response.data.nombre)
           setPrecio(response.data.precio)
           setCategoria(response.data.categoria)
           setImagen(response.data.imagen)
        }
        getProducById()
    }, [])

    return (
        <div>
            <form onSubmit={update}>
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
          Actualizar
        </button>
      </form>
        </div>
    )
}

export default EditShoe;