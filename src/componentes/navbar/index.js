import React from 'react'
import './nav.css'
import {useSelector, useDispatch} from 'react-redux';
import {Link,Redirect} from 'react-router-dom'

function Navbar() {
    const dispatch = useDispatch()
    return(
        <>
        <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Dashboard</span>
            {
                 useSelector(state=> state.usuarioLogado)>0?
                 <Link onClick={() => dispatch({type:"LOG_OUT"})}  className="link-nav"><i className="fas fa-sign-out-alt"></i> Sair</Link>
            : <Redirect to="/login"/>
            }
            
        </div>
        </nav>
        </>
    )
}export default Navbar