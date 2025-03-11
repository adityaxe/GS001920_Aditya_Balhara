import React, { useState, useCallback } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { FaTrash } from "react-icons/fa"; 
import "./Stores.css"; 

const Stores = () => {
  const [rowData, setRowData] = useState([
    { id: 1, store: "Sample store 1", city: "Atlanta", state: "GA" },
    { id: 2, store: "Sample Store 2", city: "Chicago", state: "IL" },
    { id: 3, store: "Sample Store 3", city: "Houston", state: "TX" },
  ]);

  
  const handleDelete = useCallback(
    (id) => {
      setRowData((prevData) => prevData.filter((row) => row.id !== id));
    },
    [setRowData]
  );

  
  const [columnDefs] = useState([
    { headerName: "S.No", field: "id", width: 80, editable: false },
    { headerName: "Store", field: "store", editable: true, flex: 1 },
    { headerName: "City", field: "city", editable: true, flex: 1 },
    { headerName: "State", field: "state", editable: true, width: 100 },
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

  
  const handleAddStore = () => {
    const newId = rowData.length ? rowData[rowData.length - 1].id + 1 : 1;
    const newStore = {
      id: newId,
      store: "New Store",
      city: "New City",
      state: "XX",
    };
    setRowData([...rowData, newStore]);
  };

  return (
    <div className="stores-container">
      <h2>Store Management</h2>
      <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={{ editable: true }}
          domLayout="autoHeight"
        />
      </div>
      <button className="add-store-btn" onClick={handleAddStore}>
        Add Store
      </button>
    </div>
  );
};

export default Stores;
