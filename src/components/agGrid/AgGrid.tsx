import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useMemo, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

export type rowDataType = {
  日付: string;
  売り上げ: number;
  人件費: number;
};

export const AgGrid = () => {
  const gridRef = useRef<AgGridReact>(null);

  // 外部からのデータ取得を前提に実装している
  const [rowData, setRowData] = useState<rowDataType[]>();
  useEffect(() => {
    setRowData([
      { 日付: "2023/06/01", 売り上げ: 200000, 人件費: 12000 },
      { 日付: "2023/06/02", 売り上げ: 150000, 人件費: 12000 },
      { 日付: "2023/06/03", 売り上げ: 300000, 人件費: 12000 },
      { 日付: "2023/06/04", 売り上げ: 300000, 人件費: 12000 },
      { 日付: "2023/06/05", 売り上げ: 400000, 人件費: 12000 },
    ]);
  }, [rowData]);

  // カラム定義
  const columnDefs = useMemo(
    () => [
      { field: "日付", width: 300 },
      { field: "売り上げ", width: 300 },
      { field: "人件費", width: 300 },
    ],
    []
  );

  const defaultColDef = useMemo(() => ({
    sortable: true,
  }), []);

  return (
    <Box sx={{ width: "100%", height: "auto" }}>
      <Typography variant="h6" sx={{ textAlign: "center" }}>
        このページはAgGridを実装します
      </Typography>
      <Grid
        container
        sx={{
          width: "100%",
          height: "50vh",
          marginTop: "50px",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          sx={{ width: "90%", height: "100%" }}
          className="ag-theme-alpine"
        >
          <AgGridReact
            ref={gridRef}
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
          ></AgGridReact>
        </Grid>
      </Grid>
    </Box>
  );
};
