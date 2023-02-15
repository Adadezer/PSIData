import React, { useContext, useState } from 'react';
import Axios from 'axios';
import LoadingButton from '@mui/lab/LoadingButton';
import IDataContext from '../context/IDataContext';
import '../App.css';

function BotaoEnviar() {
  const [file, setFile] = useState();
  const { setShouldRefresh } = useContext(IDataContext);
  const [loading, setLoading] = useState(false);

  const send = async () => {
    const data = new FormData();
    data.append('file', file);

    setLoading(true);
  
    await Axios.post('http://localhost:3001/uploadExtrato', data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    setShouldRefresh(true);
    setLoading(false);
  };

  return (
    <>
      <form action="#">
        <div className="flex">
          <input
            type="file"
            id="file"
            className="input_container"
            accept="application/vnd.ms-excel, .xlsx, .xls, .csv"
            onChange={(event) => {
              const file = event.target.files[0];
              setFile(file);
            }}
          />
        </div>
      </form>
      <LoadingButton loading={loading} variant="outlined" onClick={send}>
        Enviar
      </LoadingButton>
    </>
  );
}

export default BotaoEnviar;
