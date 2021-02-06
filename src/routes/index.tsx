import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ValidatedRoute from 'tt-frontend-components/Base/ValidatedRoute';

import Login from 'tt-frontend-pages/Authentication/Login';
import Register from 'tt-frontend-pages/Authentication/Register';
import ForgotPassword from 'tt-frontend-pages/Authentication/ForgotPassword';
import ResetPassword from 'tt-frontend-pages/Authentication/ResetPassword';


import {
  POSITIVLY_LOGIN,
  POSITIVLY_REGISTER,
  POSITIVLY_FORGOT_PWD,
  POSITIVLY_RESET_PWD,
  POSITIVLY_HOME,
  POSITIVLY_DASHBOARD,
  POSITIVLY_LEADS,
  POSITIVLY_PORTFOLIOS,
  POSITIVLY_WIDGET_REGISTRATION,
  POSITIVLY_PROFILE_PDF,
  POSITIVLY_RESPONSE_PDF,
  POSITIVLY_PROPOSAL_PDF,
  POSITIVLY_ENHANCED_PROPOSAL_PDF,
  CUSTOM_WIDGET,
  POSITIVLY_ADMIN_GLOBAL_SETTINGS,
  POSITIVLY_ADMIN_USER,
} from 'tt-frontend-constants';

const Routes = () => {
  return (
    <Switch>
      <Route path={"/login"} component={Login} exact />
      <ValidatedRoute path={POSITIVLY_REGISTER} component={Register} exact />
      <ValidatedRoute path={POSITIVLY_FORGOT_PWD} component={ForgotPassword} exact />
      <ValidatedRoute path={POSITIVLY_RESET_PWD} component={ResetPassword} exact />
      
      <Route path="/" render={() => <Redirect to={POSITIVLY_LOGIN} />} exact />
    </Switch>
  );
};

export default Routes;
