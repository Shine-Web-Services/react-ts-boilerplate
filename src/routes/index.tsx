import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ValidatedRoute from 'tt-frontend-components/Base/ValidatedRoute';

import Login from 'tt-frontend-pages/Authentication/Login';
import Register from 'tt-frontend-pages/Authentication/Register';
import ForgotPassword from 'tt-frontend-pages/Authentication/ForgotPassword';
import ResetPassword from 'tt-frontend-pages/Authentication/ResetPassword';
import Board from 'tt-frontend-pages/Board/Board';

const Routes = () => {
  return (
    <Switch>
      <Route path={"/login"} component={Login} exact />
      <Route path={"/register"} component={Register} exact />
      <Route path={"/forgot-password"} component={ForgotPassword} exact />
      <Route path={"/reset-password"} component={ResetPassword} exact />
      <Route path={"/board"} component={Board} exact />

      <Route path="/" render={() => <Redirect to={'/login'} />} exact />
    </Switch>
  );
};

export default Routes;
