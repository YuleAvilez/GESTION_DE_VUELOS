import {NavLink} from 'react-router-dom'


import "../assets/Css/Login.css"
import { TextField} from '@mui/material'
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
const Login = () => {
  return (
    <div>

    <div>
    <div> 

         <form className='Container-Login'>
          
         <LocalAirportIcon className='logoLogin' sx={{ fontSize: 70 }}/>
         <h1>LOGIN</h1><br></br>
        <div className="input-container">

            <TextField className="color-input" id="standard-basic" label="Usuario" variant="standard" required/><br></br>
         
        </div>
        <div className="input-container">
           <TextField id="standard-basic" label="Contraseña" variant="standard" type={"password"} required/><br></br>

        </div>
        <div className="button-container">
                <button className='registrate'>Ingresar</button>
        </div>
            <div>
      <NavLink to= "/registro">
        Si no tienes cuenta, registrate
      </NavLink>
      </div>

      <div>
      <NavLink to= "/olvide-clave">
        Olvide Clave
      </NavLink>
      </div>
        </form>
    </div>

    </div>





    </div>
  )
}

export default Login
