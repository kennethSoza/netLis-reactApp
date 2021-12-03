import *   as React from 'react';
import {useState, setState, useEffect} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';

const columns = [
  { id: 'name', label: 'Id', minWidth: 170 },
  { id: 'code', label: 'Descripción', minWidth: 100 },
];


export default function StickyHeadTable() {
  
const baseUrl = "https://localhost:44342/api/sexo";

const [data, setData]=useState([]);

const peticionSexoGet=async()=>{
  await axios.get(baseUrl)
  .then(response=>{
    setData(response.data);
    console.log(data);
  }).catch(error =>{
    console.log(error);
  })
}

useEffect(()=>{
  peticionSexoGet();
},[])


  return (
    
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
           {data.map(gestor=>(
             <tr>
               <td>{gestor.idSexo}</td>
               <td>{gestor.descripcion}</td>
             </tr>
           ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
