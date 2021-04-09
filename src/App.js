import Landing from "./landing/landing";
import Dashboard from "./User-Dashboard/dashboard";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/UserDashboard" component={Dashboard} />
        <Route exact path="/" component={Landing} />
      </Switch>

      {/* <Dashboard /> */}
    </div>
  );
}

export default App;
