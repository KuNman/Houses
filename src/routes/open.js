import React from 'react';
import {Route, Switch} from 'react-router-dom';

const DASHBOARD = '/';

const Dashboard = React.lazy(() => import('../components/dashboard'));

const openRoutes = [
  {
    path: DASHBOARD,
    exact: true,
    component: Dashboard,
  },
];

const OpenRoutes = () => {
  return <Switch>
    {openRoutes.map((route, key) => {
      return <Route
        key={key}
        path={route.path}
        exact={route.exact || false}
        component={route.component}
      />;
    })}
  </Switch>;
};

export {OpenRoutes};
