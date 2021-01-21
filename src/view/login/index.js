import react, {useState} from 'react'
import './login.css'
import IMG from './img.png'
import firebase from '../../config/Firebase';
import {Link,Redirect} from 'react-router-dom'
import 'firebase/auth';
import {useSelector, useDispatch} from 'react-redux'

function Login() {
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const dispatch = useDispatch()
        function logar() {
            firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado=>{
                setMsgTipo('sucesso')
                dispatch({type: 'LOG_IN', usuarioEmail: email})
            }).catch(erro =>{    
                setMsgTipo('erro')
            });
        }
    return(
        <>
         
        <div className="img-left col-md-6">
        {
            useSelector(state=> state.usuarioLogado)>0?<Redirect to="/"/>:null
            } 
            <img src={IMG} height="635" width="600"/>
            <h3 className="title-img-login">Página de Login</h3>
          
        </div>
        <div className="container col-md-6">
            <div className="conteudo">
                <ul className="nav abas-login">
                <li className="nav-item">
                    <Link to="/login" className="nav-link nav-login  active">Login</Link>
                </li>
                <li className="nav-item">
                    <Link to="/cadastro" className="nav-link nav-cadastro">Cadastre-se</Link>
                </li>
                </ul>

                <form className="mt-5">
                <h3 className="h3Cadastro">Preencha seu login</h3>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Informe seu email" className="form-control"/>
                    <input  onChange={(e) => setSenha(e.target.value)} type="password" placeholder="Informe sua senha" className="form-control"/>
                    
                    <div className="login-btn">
                    <button type="button" onClick={logar} className="btn btn-login">Logar</button>
                    <Link to="/altera" className="btn btn-senha">Esqueci a senha</Link>
                    </div>
                   
                    <div className="mensagens-login">
                        {
                        msgTipo === 'sucesso' &&
                        <span>Parabéns <strong>você está conectado! </strong></span>}
                        { msgTipo === 'erro' &&
                        <span>Login inválido! <strong>verifique se a senha ou usuário estão corretos!</strong></span>
                        }
                    </div>
                  
                </form>

                
            </div>
            
        </div>
        </>
    )
}

export default Login