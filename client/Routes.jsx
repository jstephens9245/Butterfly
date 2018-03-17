import React from 'react';
import store from './store';
import {Route, IndexRoute, Router, browserHistory} from 'react-router';

//containers
import HomepageContainer from './containers/HomepageContainer';

//action-creators

//components
import Index from './components/Index';

export default function Routes() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Index}>
       <IndexRoute component={HomepageContainer} />
     </Route>
    </Router>
  );
}
