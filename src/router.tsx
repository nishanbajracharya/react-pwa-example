import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import ROUTES from './constants/route';

import Home from './views/home';
import Detail from './views/detail';

function AppRouter() {
  return <BrowserRouter>
    <Route path={ROUTES.ROOT} exact component={Home} />
    <Route path={ROUTES.DETAIL} component={Detail} />
    <Redirect to={ROUTES.ROOT} />
  </BrowserRouter>
}

export default AppRouter;
