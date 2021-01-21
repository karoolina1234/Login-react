import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import store from '../src/store/index';
import { Provider }  from 'react-redux'
//Paginas 
import Login from './view/login/index'
import Cadastro from './view/cadastro/index'
import Home from './view/home/index'
import AlterarSenha from './view/recuperaSenha/index'
import Listagem from './view/listagemApi/index'
function App() {
  return (
<Provider store={store}>
<Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/altera" component={AlterarSenha} />
      <Route exact path="/listagem" component={Listagem} />
     <Route exact path="/login" component={Login} />
     <Route exact path="/cadastro" component={Cadastro} />
    </Router>
    
</Provider>
  
  );
}

export default App;
