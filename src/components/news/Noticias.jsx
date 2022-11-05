import React, { useEffect, useState } from "react";
import "../news/Noticias.css";

const Noticias = () => {
  const [noticias, setNoticias] = useState([]);

  const getNoticias = async () => {
    let response = await fetch("https://pre-hackathon-dvag.herokuapp.com/api/novelties/");
    let data = await response.json();
    setNoticias(data.novelties);
  };
  useEffect(() => {
    getNoticias();
  }, []);

  return (
    <div className="container-Noticia">
      <div className="container-tarjeta">
        <div className="image-noticia">
          <img
            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>

        <div className="container-Article">
          {noticias.map((noticia) => (
            <div className="text">
              <h3>{noticia.title}</h3>
              <p className="fecha">{noticia.createdAt}</p>
              <p className="autor">{noticia.fullname}</p>
              <p className="description">{noticia.description}</p>
            </div>
          ))}
        </div>
        {/* <h3>titulo</h3>
        <p className="fecha">05-20-22</p>
        <p className="autor">Pipito torres</p>
        <p className="descripcion"> grupo feliz</p> */}
      </div>
    </div>
  );
};

export default Noticias;
