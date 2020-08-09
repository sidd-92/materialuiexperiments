import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
const Page404 = React.lazy(() => import("./components/views/Page404"));
const PageLogin = React.lazy(() => import("./components/views/PageLogin"));
const PageSignup = React.lazy(() => import("./components/views/PageSignup"));
const DefaultLayout = React.lazy(() => import("./containers/DefaultLayout"));

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router basename="/">
          <React.Suspense fallback={<CircularProgress />}>
            <Switch>
              <Route
                exact
                path="/404"
                name="Page 404"
                render={(props) => <Page404 {...props} />}
              ></Route>
              <Route
                exact
                path="/login"
                name="Page Login"
                render={(props) => <PageLogin {...props} />}
              ></Route>
              <Route
                exact
                path="/signup"
                name="Page Signup"
                render={(props) => <PageSignup {...props} />}
              ></Route>
              <Route
                path="/"
                name="Home"
                render={(props) => <DefaultLayout {...props} />}
              />
            </Switch>
          </React.Suspense>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
