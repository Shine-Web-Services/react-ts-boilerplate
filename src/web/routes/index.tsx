import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ValidatedRoute from 'positivly-components/Base/ValidatedRoute';

import Login from 'positivly-pages/Authentication/Login';
import Register from 'positivly-pages/Authentication/Register';
import ForgotPassword from 'positivly-pages/Authentication/ForgotPassword';
import ResetPassword from 'positivly-pages/Authentication/ResetPassword';
import WidgetRegistration from 'positivly-pages/Authentication/WidgetRegistration';
import Home from 'positivly-pages/Home/Home';
import Dashboard from 'positivly-pages/Dashboard/Dashboard';
import Leads from 'positivly-pages/Leads/Leads';
import AdminGlobalSettings from '../pages/AdminEnterPrise/AdminGlobalSettings/AdminGlobalSettings';
import AdminUser from '../pages/AdminEnterPrise/AdminUser/AdminUser';
import Portfolios from 'positivly-pages/Portfolios/Portfolios';
import ProposalPdf from 'positivly-pages/Pdf/ProposalPdf';
import EnhancedProposalPdf from 'positivly-pages/Pdf/EnhancedProposalPdf';
import ProfilePdf from 'positivly-pages/Pdf/ProfilePdf';
import ResponsePdf from 'positivly-pages/Pdf/ResponsePdf';
import CustomWidget from 'positivly-pages/CustomWidget/CustomWidget';

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
} from 'positivly-constants';

const Routes = () => {
  return (
    <Switch>
      <ValidatedRoute path={POSITIVLY_LOGIN} component={Login} exact />
      <ValidatedRoute path={POSITIVLY_REGISTER} component={Register} exact />
      <ValidatedRoute path={POSITIVLY_FORGOT_PWD} component={ForgotPassword} exact />
      <ValidatedRoute path={POSITIVLY_RESET_PWD} component={ResetPassword} exact />
      <ValidatedRoute path={POSITIVLY_HOME} component={Home} exact />
      <ValidatedRoute path={POSITIVLY_DASHBOARD} component={Dashboard} exact />
      <ValidatedRoute path={POSITIVLY_LEADS} component={Leads} exact />
      <ValidatedRoute path={POSITIVLY_ADMIN_GLOBAL_SETTINGS} component={AdminGlobalSettings} exact />
      <ValidatedRoute path={POSITIVLY_ADMIN_USER} component={AdminUser} exact />
      <ValidatedRoute path={`${POSITIVLY_DASHBOARD}/:section/:subSection`} component={Dashboard} />
      <ValidatedRoute path={`${POSITIVLY_DASHBOARD}/:section`} component={Dashboard} />
      <ValidatedRoute path={POSITIVLY_PORTFOLIOS} component={Portfolios} exact />
      <ValidatedRoute path={CUSTOM_WIDGET} component={CustomWidget} exact />
      <Route path={POSITIVLY_WIDGET_REGISTRATION} component={WidgetRegistration} exact />
      <Route path={`${POSITIVLY_RESPONSE_PDF}/:id/`} component={ResponsePdf} exact />
      <Route path={`${POSITIVLY_PROFILE_PDF}/:id/:plus?`} component={ProfilePdf} exact />
      <Route path={`${POSITIVLY_PROPOSAL_PDF}/:id/:amount?`} component={ProposalPdf} exact />
      <Route path={`${POSITIVLY_ENHANCED_PROPOSAL_PDF}/:id/:amount?`} component={EnhancedProposalPdf} exact />
      <Route path="/" render={() => <Redirect to={POSITIVLY_LOGIN} />} exact />
    </Switch>
  );
};

export default Routes;
