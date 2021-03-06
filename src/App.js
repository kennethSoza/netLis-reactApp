import logo from './logo.svg';
import './App.css';
import AppDrawer from './componentes/navegacion/drawer/Drawer';
import TablePerfiles from './componentes/CatPerfiles/VerCatPerfiles';
import RegistrarSexo from './componentes/Sexos/RegistrarSexo';
import VerCatSexos from './componentes/Sexos/VerCatSexos';
import RegistrarPerfil from './componentes/CatPerfiles/RegistrarCatPerfiles';
import RegistrarTipoOrden from './componentes/CatTipoOrden/RegistrarCatTipoOrden';
import RegistrarTipoMuestra from './componentes/CatTipoMuestras/RegistrarTipoMuestra'
import { AppBar, Drawer } from '@mui/material';

function App() {
  return (
    <div className="App">
        <div className="container">
        <RegistrarTipoMuestra/>
        </div>
    </div>
    
  );
}

export default App;
