import React, { useState, useCallback } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { FaTrash } from "react-icons/fa";
import "./SKU.css";

const SKU = () => {
  const [rowData, setRowData] = useState([
    { id: 1, sku: "Cotton Shirt", price: "$ 139.99", cost: "$ 10.78" },
    { id: 2, sku: "Handbag", price: "$ 134.99", cost: "$ 20.79" },
    { id: 3, sku: "Minimalist Watch", price: "$ 49.99", cost: "$ 49.89" },
    { id: 4, sku: "Foldable Hat", price: "$ 194.99", cost: "$ 56.16" },
  ]);

  const handleDelete = useCallback(
    (id) => {
      setRowData((prevData) => prevData.filter((row) => row.id !== id));
    },
    [setRowData]
  );

  const [columnDefs] = useState([
    { headerName: "SKU", field: "sku", editable: true, flex: 2 },
    { headerName: "Price", field: "price", editable: true, flex: 1 },
    { headerName: "Cost", field: "cost", editable: true, flex: 1 },
    {
      headerName: "Actions",
      field: "actions",
      width: 100,
      cellRendererFramework: (params) => (
        <button
          className="delete-btn"
          onClick={() => handleDelete(params.data.id)}
        >
          <FaTrash />
        </button>
      ),
      editable: false,
    },
  ]);

  const handleAddSKU = () => {
    const newId = rowData.length ? rowData[rowData.length - 1].id + 1 : 1;
    const newSKU = {
      id: newId,
      sku: "New SKU",
      price: "$ 0.00",
      cost: "$ 0.00",
    };
    setRowData([...rowData, newSKU]);
  };

  return (
    <div className="sku-container">
      <h2>SKU Management</h2>
      <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={{ editable: true }}
          domLayout="autoHeight"
        />
      </div>
      <button className="add-sku-btn" onClick={handleAddSKU}>
        New SKU
      </button>
    </div>
  );
};

export default SKU;
