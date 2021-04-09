import Landing from "./landing/landing";
import Dashboard from "./User-Dashboard/dashboard";
import { Route, Switch } from "react-router-dom";
import { auth } from "./firebase";
import { useState, useEffect } from "react";

function App() {
  const [currentUser, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
      setUser(user);
    });
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/UserDashboard"
          render={(props) => <Dashboard user={currentUser} {...props} />}
        />
        <Route exact path="/" user={currentUser} render={(props) => <Landing user={currentUser} {...props} /> } />
      </Switch>

      {/* <Dashboard /> */}
    </div>
  );
}

export default App;
