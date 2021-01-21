import react,{useState} from 'react'
import '../login/login.css'
import 'firebase/auth';
import firebase from '../../config/Firebase';
import {Link, Redirect} from 'react-router-dom'
import IMG from '../login/img.png'
function Cadastro() {
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const [msg, setMsg] = useState(); 
    const [carregando, setCarregando] = useState();


        function cadastrar() {
            setCarregando(1);
            setMsgTipo(null);

            if(!email || !senha){
                setMsgTipo('erro')
                setMsg("Você precisa informar o email e senha para fazer o cadastro")
                return;
            }

            firebase.auth().createUserWithEmailAndPassword(email, senha).then(resultado =>{
                setMsgTipo('sucesso')
                setCarregando(0)
            }).catch(erro=>{
                setCarregando(0)
                setMsgTipo('erro')
                switch(erro.message){
                    case 'Password should be at least 6 characters':
                        setMsg("A senha deve ter pelo menos 6 caracteres");
                        break;
                    case 'The email address is already in use by another account.':
                        setMsg("Email já esta sendo usado por outro usuário");
                        break
                    case 'The email address is badly formatted.':
                          setMsg("Formato do e-mail inválido");
                          break;
                    default:
                           setMsg("Não foi possivel cadastrar tente novamente mais tarde");
                           break;
                }
            })
        }


    return(
        <>
         <div className="img-left col-md-6">
            <img src={IMG} height="635" width="600"/>
            <h3 className="title-img-login">Página de Cadastro</h3>
          
        </div>
        
        <div className="container col-md-6">
        <div className="conteudo">
            <ul className="nav abas-login">
            <li className="nav-item">
                <Link to="/login" className="nav-link nav-login  ">Login</Link>
            </li>
            <li className="nav-item">
                <Link to="/cadastro" className="nav-link nav-cadastro active">Cadastre-se</Link>
            </li>
            </ul>
            
               
                <form className="mt-5">

                <h3 className="h3Cadastro">Preencha os dados de cadastro</h3>

                <input onChange={(e) => setEmail(e.target.value)} className='form-control' placeholder="informe um e-mail valido" type="email"/>
                <input  onChange={(e) => setSenha(e.target.value)} className='form-control' placeholder="informe uma senha" type="password"/>

                <div className="login-btn">
                {
                    carregando ? <div class="spinner-border sppiner-cadastro" role="status"><span class="visually-hidden"></span></div>
                    :  <button type="button" onClick={cadastrar} className="btn btn-cadastro">Cadastrar</button>
                }
                </div>

                    <div className="msg-login text-center my-4">
                    {msgTipo === 'sucesso' && <span><strong>Usuário Cadastrado!</strong></span>}
                    { msgTipo === 'erro' && <span><strong>{msg}</strong></span>}
                </div>


                </form>
                </div>
           
        </div>
      
        </>
    )
}

export default Cadastro