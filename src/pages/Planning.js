import React, { useState, useCallback } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "./Planning.css";

const Planning = () => {
  const [rowData, setRowData] = useState([
    {
      id: 1,
      store: "Music Store",
      sku: "Rugged Utility Jacket",
      salesUnitsW1: 200,
      salesDollarsW1: "$ 8998.00",
      gmDollarsW1: "$ 8512.00",
      gmPercentW1: "94.60 %",
      salesUnitsW2: 0,
      salesDollarsW2: "$ 0.00",
      gmDollarsW2: "$ 8512.00",
      gmPercentW2: "94.60 %",
    },
    {
      id: 2,
      store: "Boutique",
      sku: "Floral Chiffon Wrap Dress",
      salesUnitsW1: 200,
      salesDollarsW1: "$ 29998.00",
      gmDollarsW1: "$ 27689.60",
      gmPercentW1: "54.30 %",
      salesUnitsW2: 0,
      salesDollarsW2: "$ 0.00",
      gmDollarsW2: "$ 27689.60",
      gmPercentW2: "54.30 %",
    },
    {
      id: 3,
      store: "Breeze Apparel",
      sku: "Lace-Up Combat Boots",
      salesUnitsW1: 199,
      salesDollarsW1: "$ 4973.01",
      gmDollarsW1: "$ 31.95",
      gmPercentW1: "0.60 %",
      salesUnitsW2: 14,
      salesDollarsW2: "$ 349.86",
      gmDollarsW2: "$ 31.95",
      gmPercentW2: "0.60 %",
    },
  ]);

  const getGMClass = (value) => {
    const percent = parseFloat(value);
    if (percent >= 80) return "gm-green";
    if (percent >= 30) return "gm-yellow";
    if (percent >= 10) return "gm-orange";
    return "gm-red";
  };

  const [columnDefs] = useState([
    { headerName: "Store", field: "store", flex: 2, editable: true },
    { headerName: "SKU", field: "sku", flex: 2, editable: true },
    {
      headerName: "Week 01",
      children: [
        { headerName: "Sales Units", field: "salesUnitsW1", width: 120, editable: true },
        { headerName: "Sales Dollars", field: "salesDollarsW1", width: 150, editable: true },
        { headerName: "GM Dollars", field: "gmDollarsW1", width: 150, editable: true },
        {
          headerName: "GM Percent",
          field: "gmPercentW1",
          width: 120,
          cellClass: (params) => getGMClass(params.value),
          editable: true,
        },
      ],
    },
    {
      headerName: "Week 02",
      children: [
        { headerName: "Sales Units", field: "salesUnitsW2", width: 120, editable: true },
        { headerName: "Sales Dollars", field: "salesDollarsW2", width: 150, editable: true },
        { headerName: "GM Dollars", field: "gmDollarsW2", width: 150, editable: true },
        {
          headerName: "GM Percent",
          field: "gmPercentW2",
          width: 120,
          cellClass: (params) => getGMClass(params.value),
          editable: true,
        },
      ],
    },
  ]);

  return (
    <div className="planning-container">
      <h2>Planning Data</h2>
      <div className="ag-theme-alpine" style={{ height: 500, width: "100%" }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={{ sortable: true, filter: true }}
          domLayout="autoHeight"
        />
      </div>
    </div>
  );
};

export default Planning;
