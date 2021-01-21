import React, { useEffect, useState } from 'react'
import Navbar from '../../componentes/navbar'
import Menu from '../../componentes/menu-lateral/index'
import axios from 'axios'
import './listagem.css'



function Listagem() {

    const api = {
        baseUrl:'https://api.github.com/'
      }
    
    const [dados, setDados] = useState([])

    useEffect(()=>{

        axios
        .get(api.baseUrl+'users/octocat/followers')
        .then((res)=>{
          setDados( res.data)
        })
    })
       
        
      
   
    return(
        <>
        <Navbar/>
        <Menu/>
        <div className="row col-md-9">
            <h5 className="listagemH5">Listagem de followers do github</h5>
            <div className="all-cards">
        {dados.map(dado=>(
        
        
                <div className="card">
                <img src={dado.avatar_url} class="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Login: {dado.login}</h5>
                        <p className="card-text">id do usuário: {dado.id}</p>
                    </div>
                </div>
        
      
      ))}
    </div>
    </div>
       </>
    )
   
 }

export default Listagem