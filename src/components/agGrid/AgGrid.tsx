import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { Typography } from '@mui/material';
import { useMemo } from 'react';

export const AgGrid = () => {
  const rowData = useMemo(() => [
    {日付: "2023/06/01", 売り上げ: "200000"},
    {日付: "2023/06/02", 売り上げ: "150000"},
    {日付: "2023/06/03", 売り上げ: "300000"},
    {日付: "2023/06/04", 売り上げ: "300000"},
    {日付: "2023/06/05", 売り上げ: "400000"}
  ], [])
  return (
    <>
      <Typography variant="h6" sx={{ textAlign: "center"}}>
        このページはAgGridを実装します
      </Typography>

    </>
  );
},;
