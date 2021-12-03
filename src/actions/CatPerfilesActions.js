import HttpClients from './services/HttpClients';

export const registrarPerfil = perfil => {
    return new Promise((resolve, eject) =>{
        HttpClients.post('/perfiles/nuevo', perfil).then(response =>{
            resolve(response);
        })
    })
}

