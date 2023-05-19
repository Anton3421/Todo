import React, { useState } from "react";
import { render } from "react-dom";
import { AgGridReact } from "ag-grid-react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

function TodoList() {
  const [todo, setTodo] = useState({ description: "", date: "", priority: "" });
  const [todos, setTodos] = useState([]);
  const gridRef = React.useRef();

  const columns = [
    { field: "description", sortable: true, filter: true },
    { field: "date", sortable: true, filter: true },
    {
      field: "priority",
      sortable: true,
      filter: true,
      cellStyle: (params) =>
        params.value === "High" ? { color: "red" } : { color: "black" },
    },
  ];

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const deleteTodo = () => {
    if (gridRef.current.getSelectedNodes().length > 0) {
      setTodos(
        todos.filter((todo, index) =>
            index !== gridRef.current.getSelectedNodes()[0].childIndex));
    } else {
      alert("Select row first");
    }
  };

  const addTodo = (event) => {
    setTodos([...todos, todo]);
  };

  return (

    <div>
      <h1>Todolist</h1>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >

        <TextField
          label="description"
          variant="standard"
          name="description" 
          value={todo.description}
          onChange={inputChanged} />
          <TextField
          label="Date"
          variant="standard"
          name="date" value={todo.date}
          onChange={inputChanged} />
          <TextField
          label="Priority"
          variant="standard"
          name="priority" value={todo.priority}
          onChange={inputChanged} />

        <Button variant="contained" onClick={addTodo}>
          Add
        </Button>{" "}
        <Button variant="contained" color="error" onClick={deleteTodo}>Delete</Button>
      </Stack>
      <div
        className="ag-theme-material"
        style={{ height: "700px", width: "50%", margin: "auto" }}
      >
        <AgGridReact
          ref={gridRef}
          onGridReady={(params) => (gridRef.current = params.api)}
          rowSelection="single"
          columnDefs={columns}
          rowData={todos}
        ></AgGridReact>
      </div>
    </div>
  );
}

export default TodoList;