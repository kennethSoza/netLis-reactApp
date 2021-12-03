import {Button, Grid,TextField, Typography, Container} from '@mui/material';
import { useState } from 'react';
import style from '../../theme/Tools/Style';
import { registrarSexo } from '../../actions/CatSexosAction';


const RegistrarSexo = () => {
    const [sexo, setSexo] = useState({
        descripcion:''
    })

    const ingresarValores = e =>{
        const{name, value} = e.target;
        setSexo(anterior => ({
            ...anterior,
            [name] : value
        }))
    }

    const nuevoSexo = e =>{
        e.preventDefault();
        registrarSexo(sexo).then(response => {console.log('Se registro el sexo con éxito', response); window.localStorage.setItem("token_seguridad", response.data.token);})
        console.log("Datos del sexo:", sexo)
    }
    
    return(
        <Container component="main" maxWidth="md" justify="center">
        <div style={style.paper}>
            <Typography component="h1" variant="h5">
                Registro de Sexo
            </Typography>
            <form style={style.form}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <TextField name="descripcion" value={sexo.descripcion} onChange={ingresarValores} variant="outlined" fullWidth label="Ingrese la descripción del sexo" />
                    </Grid>
                   
                </Grid>
                <Grid container justify="center">
                    <Grid item xs={12} md={12}>
                        <Button type="submit" onClick={nuevoSexo} fullWidth variant="contained" color="primary" size="large" style={style.submit}>
                            Enviar
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    </Container>
    );
    
}

export default RegistrarSexo;