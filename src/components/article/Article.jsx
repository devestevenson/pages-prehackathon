import React, { useEffect, useState } from "react";
import "../article/Article.css";
import Imagen from "../article/imagen.jpg";

const Article = () => {
  const [nosotros, setNosotros] = useState([]);

  const getNosotros = async () => {
    let response = await fetch(
      "https://pre-hackathon-dvag.herokuapp.com/api/articles"
    );
    let data = await response.json();

    setNosotros(data.articles);
  };
  useEffect(() => {
    getNosotros();
  }, []);

  return (
    <div className="container-Article">
      {nosotros.map((nosotro) => (
        <div className="text">
          <h2>{nosotro.title}</h2>
          <p>{nosotro.description}</p>
        </div>
      ))}
      <div className="imagen">
        <img src={Imagen} alt="" />
      </div>
    </div>
  );
};

export default Article;
