import React, {useEffect,useState} from 'react'
import "./User.css"

const User = () => {
    const [user, setUser] = useState([])

    
    const getUser = async () => {
        let response = await fetch("url")
        let data = await response.json()
        setUser(data)
    }
    useEffect(() => {
        getUser();
      }, []);





  return (
    <div className='container-User'>
       <div className="users">
        <img className='foto' src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=412&q=80" alt="" />
        <div className="informacion">
            <h4 className='nombre'>Nombre Completo</h4>
            <p className='profesion'>Profesión</p>
            <p className='nacionalidad'>Nacionalidad</p>

        </div>
       </div>
      



    </div>
  )
}

export default User
