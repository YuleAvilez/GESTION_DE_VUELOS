import { Outlet } from 'react-router-dom';

import Header from '../Components/Header';
import Navegacion from '../Components/Navegacion';
import Footer from '../Components/Footer';

const Layout = () => {
  return (
    <>
       <Header/>
       <Navegacion/>
       {/* contenido central  */}
       <div className='main'>
           <Outlet/>
       </div>
       {/* fin contenido central */}
        <Footer/>
    </>
  )
}

export default Layout