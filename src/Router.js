import React from 'react';
import Main from './Components/Main';
import Search from './Components/Search';
import { Switch, Route, Redirect } from 'react-router';

const Router = () => {
  return (
    <Switch>
      <Route exact path='/' component={Main} />
      <Route path='/search' component={Search} />
    </Switch>
  );
};

export default Router;
