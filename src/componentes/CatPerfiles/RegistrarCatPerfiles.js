import {Button, Grid,TextField, Typography, Container} from '@mui/material';
import { useState } from 'react';
import style from '../../theme/Tools/Style';
import { registrarPerfil } from '../../actions/CatPerfilesActions';


const RegistrarPerfil = () => {
    const [perfil, setPerfil] = useState({
        descripcion:''
    })

    const ingresarValores = e =>{
        const{name, value} = e.target;
        setPerfil(anterior => ({
            ...anterior,
            [name] : value
        }))
    }

    const nuevoPerfil = e =>{
        e.preventDefault();
        registrarPerfil(perfil).then(response => {console.log('Se registro el perfil con éxito', response); window.localStorage.setItem("token_seguridad", response.data.token);})
        console.log("Datos del perfil:", perfil)
    }
    
    return(
        <Container component="main" maxWidth="md" justify="center">
        <div style={style.paper}>
            <Typography component="h1" variant="h5">
                Registro de nuevo perfil
            </Typography>
            <form style={style.form}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <TextField name="descripcion" value={perfil.descripcion} onChange={ingresarValores} variant="outlined" fullWidth label="Ingrese la descripción del perfil" />
                    </Grid>
                   
                </Grid>
                <Grid container justify="center">
                    <Grid item xs={12} md={12}>
                        <Button type="submit" onClick={nuevoPerfil} fullWidth variant="contained" color="primary" size="large" style={style.submit}>
                            Enviar
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    </Container>
    );
    
}

export default RegistrarPerfil;