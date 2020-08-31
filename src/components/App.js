import React, { useReducer } from "react";
import Typography from "@material-ui/core/Typography";
import TextFieldInput from "./textField";
import "./App.css";
import AppContext from "../contexts/AppContext";
import reducer from "../reducers";
import EnhancedTable from "./Events";

function App() {
  const [state, dispatch] = useReducer(reducer, []);
  console.log(state);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <header className="header">
        <Typography variant="h6" align="center">
          My Todo
        </Typography>
      </header>
      <TextFieldInput></TextFieldInput>
      <EnhancedTable></EnhancedTable>
    </AppContext.Provider>
  );
}

export default App;
