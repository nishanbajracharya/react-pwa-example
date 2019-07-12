import React from 'react';

import style from './home.module.css';
import Appbar from '../../components/appbar';

import * as Route from 'RouteProps';

function Home(props: Route.Props) {
  return <div>
    <Appbar userId={props.match.params.id} />
    Home
  </div>;
}

export default Home;
