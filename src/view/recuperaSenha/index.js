import React, {useState} from 'react'
import firebase from '../../config/Firebase';
import IMG from '../login/img.png'
import '../login/login.css'
import {Link,Redirect} from 'react-router-dom'
function AlterarSenha() {
    const [email, setEmail]  = useState();
    const [msg, setMsg] = useState();

    function recupSenha() {
        firebase.auth().sendPasswordResetEmail(email).then(resultado =>{
            setMsg('Enviamos um link no seu e-mail para você redefinir sua senha')
        }).catch(erro=>{
            setMsg('verifique se o e-mail esta correto')
        })
    }
    return(
       <>
          
          <div className="img-left col-md-6">
            <img src={IMG} height="635" width="600"/>
            <h3 className="title-img-login">Recuperar Senha</h3>
        </div>


        <div className="container col-md-6">
            <div className="conteudo">
            <form className="mt-5">
                <h3 className="h3Cadastro">Informe seu E-mail para enviarmos um link para redefinir sua senha</h3>
                    <input onChange={e=>setEmail(e.target.value)} type="email" placeholder="Informe seu email" className="form-control"/>
                    
                    <div className="login-btn">
                    <button type="button" onClick={recupSenha}  className="btn btn-login">Enviar senha</button>
                    <Link to="/login" className="btn btn-senha">Voltar para o login</Link>
                    </div>
                   
                   
                  
                </form>
            </div>
        </div>
       </>
    )
}
export default AlterarSenha