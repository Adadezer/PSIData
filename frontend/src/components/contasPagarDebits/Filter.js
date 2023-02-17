import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Button, Grid, TextField } from '@mui/material';
import { useContext } from 'react';
import axios from 'axios';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import formatDate from '../../helpers/formatDate';
import FilterContext from '../../context/FilterContext';
import IDataContext from '../../context/IDataContext';
import 'dayjs/locale/pt-br';

function Filter() {
  const {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    bankCode,
    setBankCode,
  } = useContext(FilterContext);

  const { setShouldRefresh } = useContext(IDataContext);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleBankCodeChange = (event) => {
    setBankCode(event.target.value);
  };

  const handleApply = async () => {
    const data = {
      dataInicio: formatDate(startDate.$d),
      dataFim: formatDate(endDate.$d),
      codBanco: bankCode,
    };

    try {
      await axios.delete('http://localhost:3001/deleteLancamentos')
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

      await axios.post('http://localhost:3001/lancamentosContasPagar', data)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      
      setShouldRefresh(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <DatePicker
            required
            label="De"
            value={startDate}
            onChange={handleStartDateChange}
            views={['year', 'month', 'day']}
            renderInput={(params) => <TextField {...params} />}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DatePicker
            required
            label="Até"
            value={endDate}
            onChange={handleEndDateChange}
            views={['year', 'month', 'day']}
            renderInput={(params) => <TextField {...params} />}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-basic"
            label="Código do banco"
            variant="outlined"
            value={bankCode}
            onChange={(event) => handleBankCodeChange(event)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="outlined" color="primary" onClick={handleApply}>
            Aplicar filtro
          </Button>
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
}

export default Filter;
