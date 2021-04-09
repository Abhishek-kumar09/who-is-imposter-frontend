import Landing from "./landing/landing";
import Dashboard from "./User-Dashboard/dashboard";
import { Route, Switch } from "react-router-dom";
import { auth } from "./firebase";
import { useState, useEffect } from "react";

function App() {
  const [currentUser, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      // console.log('user', user)
    });
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/UserDashboard"
          component={Dashboard}
          user={currentUser}
        />
        <Route exact path="/" component={Landing} />
      </Switch>

      {/* <Dashboard /> */}
    </div>
  );
}

export default App;
