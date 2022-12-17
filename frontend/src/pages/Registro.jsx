import React from 'react'

import "../assets/Css/Registro.css"
import { TextField} from '@mui/material'
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
const Registro = () => {
  return (
    <div>

<form className='formulario-registro'>
        <LocalAirportIcon sx={{ fontSize: 60 }}/>
        <h1>Registrate con nosotros</h1>
        <div className="input-container2">
        
            <TextField id="standard-basic" label="Nombre completo" placeholder='ej: Juan David' variant="standard" required/><br></br>  
        </div>

        <div className="input-container2">
            <TextField id="standard-basic" label="Correo Electronico" placeholder='example@gmail.com' variant="standard" required/><br></br>  
        </div>
        
        <div className="input-container2">
            <TextField id="standard-basic" label="Usuario" variant="standard"required/><br></br>      
        </div>

        <div className="input-container2">
        <TextField id="standard-basic" label="Contraseña" variant="standard" type={"password"} required/><br></br>         
        </div>
        <div className="input-container2">
        <TextField id="standard-basic" label="Confirmar Contraseña" variant="standard" type={"password"} required/><br></br>         
        </div>
        <div className="button-container2">
                <button className='registrate'>Regístrarse</button>
        </div>
        </form>

      
    </div>
  )
}

export default Registro
