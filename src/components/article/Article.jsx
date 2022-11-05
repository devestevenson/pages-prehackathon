import React, {useEffect, useState} from 'react'
import "../article/Article.css"
import Imagen from "../article/imagen.jpg"

const Article = () => {
    const [nosotros, setNosotros] = useState([])

    const getNosotros = async () => {
        let response = await fetch("https://pre-hackathon-dvag.herokuapp.com/api/articles")
        let data = await response.json()
       
        setNosotros(data.articles)
    }
    useEffect(() => {
        getNosotros();
      }, []);



  return (
    <div className='container-Article'>
      {
      nosotros.map(nosotro =>(
      <div className='text'>
        <h2>{nosotro.title}</h2>
        <p>{nosotro.description}</p>
      </div>
    ))
  }
      {/* <div className="text">

        <h2>Conoce nuestra historia</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sapiente fugit placeat voluptas error et, sed accusamus ratione minima aperiam sint excepturi, repellat omnis adipisci! Magnam quas adipisci quia asperiores.

        Consequuntur itaque necessitatibus qui. Eum quam animi delectus eveniet, fugit explicabo, nobis facilis corrupti molestias, quos nemo laudantium consequuntur consequatur. Minima doloribus, natus nobis nam nihil dolor mollitia obcaecati autem.
       </p>    
      </div> */}
      <div className="imagen">
        <img src={Imagen} alt="" />
      </div>
    </div>
  )
}

export default Article
