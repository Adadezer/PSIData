import * as React from 'react';
import { useContext, useEffect } from 'react';
import axios from 'axios';
// import { useContext } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import IDataContext from '../context/IDataContext';

export default function StickyHeadTable() {
  const { nameColumnsContasPagar, setNameColumnsContasPagar } = useContext(IDataContext);

  const { dataContasPagar, setDataContasPagar } = useContext(IDataContext);

  const coluna = nameColumnsContasPagar.map((name) => (
    {
      id: name.COLUMN_NAME,
      label: name.COLUMN_NAME,
      maxWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('pt-BR'),
    }
  ));

  const getColumnsContasPagar = async () => {
    try {
      const result = await axios.get('http://localhost:3001/columnsContasPagar');
      setNameColumnsContasPagar(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getContasPagar = async () => {
    try {
      const result = await axios.get('http://localhost:3001/contasPagar');
      setDataContasPagar(result.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    getColumnsContasPagar();
    getContasPagar();
  }, []);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {coluna.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ maxWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {dataContasPagar
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {coluna.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={dataContasPagar.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
