import {Button, Grid,TextField, Typography, Container} from '@mui/material';
import { useState } from 'react';
import style from '../../theme/Tools/Style';
import { registrarTipoMuestra } from '../../actions/CatTipoMuestraAction';


const RegistrarTipoMuestra = () => {
    const [tipomuestra, setTipoMuestra] = useState({
        descripcion:''
    })

    const ingresarValores = e =>{
        const{name, value} = e.target;
        setTipoMuestra(anterior => ({
            ...anterior,
            [name] : value
        }))
    }

    const nuevoTipoMuestra = e =>{
        e.preventDefault();
        registrarTipoMuestra(tipomuestra).then(response => {console.log('Se registro el tipo de muestra', response); window.localStorage.setItem("token_seguridad", response.data.token);})
        console.log("Datos del tipo de muestra:", tipomuestra)
    }
    
    return(
        <Container component="main" maxWidth="md" justify="center">
        <div style={style.paper}>
            <Typography component="h1" variant="h5">
                Registro de tipo muestra
            </Typography>
            <form style={style.form}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <TextField name="descripcion" value={tipomuestra.descripcion} onChange={ingresarValores} variant="outlined" fullWidth label="Ingrese la descripción del tipo de muestra" />
                    </Grid>
                   
                </Grid>
                <Grid container justify="center">
                    <Grid item xs={12} md={12}>
                        <Button type="submit" onClick={nuevoTipoMuestra} fullWidth variant="contained" color="primary" size="large" style={style.submit}>
                            Enviar
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    </Container>
    );
    
}

export default RegistrarTipoMuestra;