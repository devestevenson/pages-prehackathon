import React from 'react'
import Article from './components/article/Article'
import Footer from './components/footer/Footer'
import Navbar from './components/menu/Navbar'
import Noticias from './components/news/Noticias'
import User from './components/users/User'



const App = () => {
  return (
    <div>
      <Navbar/>
      <div className='noticias-grid'>
      <Noticias/>
      <Noticias/>
      <Noticias/>


      </div>
      
      <Article/>
      <div className='usuarios'>
      <User/>
      <User/>
      <User/>
      </div>

      <Footer/>
    </div>
  )
}

export default App

