import React from 'react';
import {Route, Switch} from 'react-router-dom';

const DASHBOARD = '/';
const LIST = '/list';
const DETAILS = '/details/';

const Dashboard = React.lazy(() => import('../components/dashboard'));
const List = React.lazy(() => import('../components/houses/list'));
const Details = React.lazy(() => import('../components/houses/details'));

const openRoutes = [
  {
    path: DASHBOARD,
    exact: true,
    component: Dashboard,
  },
  {
    path: LIST,
    exact: true,
    component: List,
  },
  {
    path: DETAILS,
    component: Details,
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

export {OpenRoutes, LIST, DETAILS};
