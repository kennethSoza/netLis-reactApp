import {Button, Grid,TextField, Typography, Container} from '@mui/material';
import { useState } from 'react';
import style from '../../theme/Tools/Style';
import { registrarTipoOrden } from '../../actions/CatTipoOrden';


const RegistrarTipoOrden = () => {
    const [tipoorden, setTipoOrden] = useState({
        descripcion:''
    })

    const ingresarValores = e =>{
        const{name, value} = e.target;
        setTipoOrden(anterior => ({
            ...anterior,
            [name] : value
        }))
    }

    const nuevoTipoOrden = e =>{
        e.preventDefault();
        registrarTipoOrden(tipoorden).then(response => {console.log('Se registro el tipo de orden', response); window.localStorage.setItem("token_seguridad", response.data.token);})
        console.log("Datos del tipo de orden:", tipoorden)
    }
    
    return(
        <Container component="main" maxWidth="md" justify="center">
        <div style={style.paper}>
            <Typography component="h1" variant="h5">
                Registro de tipo orden
            </Typography>
            <form style={style.form}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <TextField name="descripcion" value={tipoorden.descripcion} onChange={ingresarValores} variant="outlined" fullWidth label="Ingrese la descripción del tipo de orden" />
                    </Grid>
                   
                </Grid>
                <Grid container justify="center">
                    <Grid item xs={12} md={12}>
                        <Button type="submit" onClick={nuevoTipoOrden} fullWidth variant="contained" color="primary" size="large" style={style.submit}>
                            Enviar
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    </Container>
    );
    
}

export default RegistrarTipoOrden;