import HttpClients from './services/HttpClients';

export const registrarTipoOrden = tipoorden => {
    return new Promise((resolve, eject) =>{
        HttpClients.post('/tipoorden/nuevo', tipoorden).then(response =>{
            resolve(response);
        })
    })
}

