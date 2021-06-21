import "./App.css";
import Homepage from "./component/Homepage";
import PortfolioPage from "./component/PortfolioPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Paper, ThemeProvider, createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: "light",
  },
});

function App() {
  return (
    <div>
      <Router>
        <ThemeProvider theme={theme}>
          <Paper>
            <Switch>
              <Route exact component={Homepage} path="/" />
              <Route exact component={PortfolioPage} path="/portfoliopage" />
            </Switch>
          </Paper>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
