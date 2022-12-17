import { BrowserRouter, 
  Routes, 
  Route } 
  from 'react-router-dom';
  //Layout
  import Layout from './Layout/Layout';

  //Paginas

  import Login from './pages/Login';
  import Registro from './pages/Registro';
  import OlvideClave from './pages/OlvideClave';
  import AcercaDe from './pages/AcercaDe';
  import Contactos from './pages/Contactos';

function App() {

  return (
<BrowserRouter>
       {/* Rutas publicas */}
       <Routes>
        <Route path='/' element={<Layout/>}>
             <Route index  element={<Login/>}/>
             <Route path='acerca-de' element={<AcercaDe/>}/>
             <Route path='contactos' element={<Contactos/>}/>
             <Route path='olvide-clave' element={<OlvideClave/>}/>
             <Route path='registro' element={<Registro/>}/>
        </Route>
       </Routes>
       {/* Rutas privadas */}
    </BrowserRouter>
  )
}

export default App
