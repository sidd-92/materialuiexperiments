import React, { Component, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "../routes";
import Header from "./Header";

import CircularProgress from "@material-ui/core/CircularProgress";

class DefaultLayout extends Component {
  render() {
    return (
      <div className="w-full h-screen">
        <div className="flex flex-col items-center">
          <Header history={this.props.history} />
        </div>

        <div className="grid grid-rows-1 grid-cols-1 mx-12">
          <div
            className="col-span-1 md:col-span-1 pt-0 xl:pt-4 pb-4"
            style={{ height: "calc(100vh - 4rem)" }}
          >
            <main>
              <Suspense fallback={<CircularProgress />}>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={(props) => (
                          <route.component {...props} routes={route.routes} />
                        )}
                      />
                    ) : null;
                  })}
                  <Redirect from="/" to="/404" />
                </Switch>
              </Suspense>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default DefaultLayout;
