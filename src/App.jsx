import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Head from './componentes - header/header';
import Foot from './componentes - footer/footer';
import ListaCelulares from './componentes - stock/ListaCelulares';
import Menu from './componentes - menu/menu';
import RegisterForm from './componentes - registro/RegisterForm.jsx';
import LoginForm from './componentes - login/LoginForm.jsx';
import OlvideContra from './componentes olvidopass/OlvideContra.jsx';


function App() {
  return (
    <div className='contenedor'>
      
      <Router>

        <Head />
        <Menu />
        
        
        <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<ListaCelulares />} />
        <Route path="/inicio" element={<ListaCelulares />} />
        <Route path="/registro" element={<RegisterForm />} />
        <Route path="/restaurar_contraseña" element={<OlvideContra />} />
      
        </Routes>
  
        <Foot />
      </Router>

      

    </div>
  );
}



export default App;
