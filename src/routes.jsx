import * as React from "react";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

import {HomeComponent} from "./components/homeContainer";
import {AppHomeComponent} from "./components/apphome/appContainer";
import {NotFoundComponent} from "./components/notFound/notFoundContainer";

export const Routes = () => (
    <Router>
  <Switch >

      <Route exact path="/" component={HomeComponent}   />
      <Route exact path="/sitemap" component={AppHomeComponent}  />
      <Route  path="*" component={NotFoundComponent} />

  </Switch>
    </Router>

);
