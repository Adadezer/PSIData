import * as React from 'react';
import { useContext, useEffect } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IDataContext from '../../context/IDataContext';

export default function TableInDatabaseNotExtract() {
  const {
    nameColumnsInDatabaseNotExtract,
    setNameColumnsInDatabaseNotExtract,
    dataInDatabaseNotExtract,
    setDataInDatabaseNotExtract,
    shouldRefresh,
    setShouldRefresh,
  } = useContext(IDataContext);

  const coluna = nameColumnsInDatabaseNotExtract.map((name) => (
    {
      id: name.COLUMN_NAME,
      label: name.COLUMN_NAME,
      maxWidth: 170,
      align: 'center',
      format: (value) => value.toLocaleString('pt-BR'),
    }
  ));

  const getColumnsInDatabaseNotExtract = async () => {
    try {
      const result = await axios.get('http://localhost:3001/columnsInDatabaseNotExtract');
      setNameColumnsInDatabaseNotExtract(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getInDatabaseNotExtract = async () => {
    try {
      const result = await axios.get('http://localhost:3001/inDatabaseNotExtract');
      setDataInDatabaseNotExtract(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (shouldRefresh) {
      getColumnsInDatabaseNotExtract();
      getInDatabaseNotExtract();
      setShouldRefresh(false);
    }
  }, [shouldRefresh]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <StyledTableRow>
              {coluna.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{ maxWidth: column.minWidth }}
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {dataInDatabaseNotExtract
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <StyledTableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {coluna.map((column) => {
                      const value = row[column.id];
                      return (
                        <StyledTableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </StyledTableCell>
                      );
                    })}
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={dataInDatabaseNotExtract.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
