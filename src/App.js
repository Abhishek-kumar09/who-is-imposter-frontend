import Landing from "./landing/landing";
import Dashboard from "./User-Dashboard/dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const User = () => {
  return <h1>Welcome User</h1>;
};

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
