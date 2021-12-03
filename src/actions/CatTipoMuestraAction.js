import HttpClients from './services/HttpClients';

export const registrarTipoMuestra = tipomuestra => {
    return new Promise((resolve, eject) =>{
        HttpClients.post('/tipomuestra/nuevo', tipomuestra).then(response =>{
            resolve(response);
        })
    })
}

