import React from 'react'
import './home.css'
import Navbar from '../../componentes/navbar/index'
import Menu from '../../componentes/menu-lateral/index'

function Home() {
    return(
        <>
        <Navbar/>
        <Menu/>

        <div className="col-md-9 conteudo-home">
            <h4 className="tituloInial">Bem vindo a tela inicial</h4>

            <p>
                Para a lista de api com JSON irei usar a api publica : https://api.github.com/users/octocat/followers</p>
               <p> e para listar basta clicar no menu ao lado no link <b>listagem</b> <i class="far fa-smile-wink"></i>
            </p>
        </div>
        </>
    )
}
export default Home