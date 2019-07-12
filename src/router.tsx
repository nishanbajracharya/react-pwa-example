import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ROUTES from './constants/route';

import Detail from './views/detail';
import Home from './views/home';

function AppRouter() {
  return <BrowserRouter>
    <Route path={ROUTES.ROOT} component={Home} />
    <Route path={ROUTES.DETAIL} component={Detail} />
  </BrowserRouter>;
}

export default AppRouter;
