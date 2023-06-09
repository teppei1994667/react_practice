import { Grid, Typography } from "@mui/material";
import { useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

export const AgGrid = () => {
  const rowData = [
    { 日付: "2023/06/01", 売り上げ: "200000" },
    { 日付: "2023/06/02", 売り上げ: "150000" },
    { 日付: "2023/06/03", 売り上げ: "300000" },
    { 日付: "2023/06/04", 売り上げ: "300000" },
    { 日付: "2023/06/05", 売り上げ: "400000" },
  ];

  const columnDefs = useMemo(
    () => [{ field: "日付", width: 1000 }, { field: "売り上げ", width: 1000 }],
    []
  );
  return (
    <>
      <Typography variant="h6" sx={{ textAlign: "center" }}>
        このページはAgGridを実装します
      </Typography>
      <Grid container spacing={0.75} sx={{width: "100vw", height: "50vh", marginTop: "50px"}}>
        <Grid item sx={{width: "100%", height: "100%"}} className="ag-theme-alpine">
          <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
        </Grid>
      </Grid>
    </>
  );
};
