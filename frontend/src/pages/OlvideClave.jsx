import React from 'react'

import "../assets/Css/OlvideClave.css"
import { TextField} from '@mui/material'
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
const OlvideClave = () => {
  return (
    <div>

       <form className='formulario-contraseña'>
       <LocalAirportIcon sx={{ fontSize: 51 }}/>
        <h1>Recupera tu contraseña</h1><br></br>

        <div className="input-container2">
        <TextField id="standard-basic" label="Correo Electronico" variant="standard" required /><br></br>
        </div>

        <div className="button-container">
                <button className='contraseña'>Recuperar contraseña</button>
        </div>
        </form>
    </div>
  )
}

export default OlvideClave
