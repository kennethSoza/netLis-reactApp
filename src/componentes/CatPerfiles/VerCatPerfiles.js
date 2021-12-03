import React, {useState, useEffect} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';

function VerCatPerfiles(){
  const baseUrl="https://localhost:44342/api/perfiles";
  const [data, setData]=useState([]);

  const peticionPerfilGet=async()=>{
    await axios.get(baseUrl)
    .then(response =>{
      setData(response.data);
    }).catch(error=>{
      console.log(error);
    })
  }
  useEffect(()=>{
    peticionPerfilGet();
  },[])

  return(
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
        {data.map(gestor=>(
          <tr key={gestor.idPerfiles}>
            <td>{gestor.idPerfiles}</td>
            <td>{gestor.descripcion}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}
export default VerCatPerfiles;