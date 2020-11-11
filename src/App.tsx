import React from "react";
import Dashboard from "./components/Dashboard";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "./App.css";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#dc082c",
    },
  },
});
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Dashboard />
    </MuiThemeProvider>
  );
}

export default App;
