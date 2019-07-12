import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ROUTES from './constants/route';

import Home from './views/home';
import Detail from './views/detail';

function Router() {
  return <BrowserRouter>
    <Route path={ROUTES.ROOT} exact component={Home} />
    <Route path={ROUTES.DETAIL} component={Detail} />
  </BrowserRouter>
}

export default Router;
