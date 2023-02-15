import React, { useRef, useState } from 'react';
import {
  Box, Button, InputAdornment, TextField, 
} from '@mui/material';
import { AttachFile } from '@mui/icons-material';

export default function SpreadsheetSelect() {
  const [files, setFiles] = useState([]);
  const ref = useRef(null);

  const handleChange = (e) => {
    if (!e.target.files) return;

    const files = Array.from(e.target.files);
    setFiles(files);
  };

  const getFileNames = () => (
    files?.reduce(
      (fileNames, file) => `${fileNames}${fileNames !== '' ? ',' : ''} ${file.name}`,
      '',
    ) || ''
  );

  return (
    <Box
      position="relative"
      height={57}
      width="100%"
      data-testid="app-spreadsheet-select"
    >
      <Box position="absolute" width="100%">
        <TextField
          fullWidth
          label="Selecione uma planilha"
          value={getFileNames()}
          required
          sx={{ pointerEvents: 'none' }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <AttachFile />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Button
        component="label"
        onKeyDown={(e) => e.key === '32' && ref.current?.click()}
        fullWidth
        sx={{ height: '100%' }}
      >
        <input
          ref={ref}
          type="file"
          onChange={handleChange}
          accept="application/vnd.ms-excel, .xlsx, .xls, .csv"
          hidden
          multiple
        />
      </Button>
    </Box>
  );
}
