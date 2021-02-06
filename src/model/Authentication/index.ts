import { Action, action, thunk, Thunk } from 'easy-peasy';
import crypt from 'crypto-js';

interface UserAuth {
  userName: string;
  password: string;
}

export interface AuthenticationModel {
  token: string;
  error: string;
  userRole: string;
  advisorAssets?: string[];
  advisorRoles?: string[];
  widgetToken?: string;
  marketingSource?: string;
  marketingMedium?: string;
  marketingCampaign?: string;
  setToken: Action<AuthenticationModel, string>;
  setUserRole: Action<AuthenticationModel, string>;
  setError: Action<AuthenticationModel, string>;
  setMarketingSource: Action<AuthenticationModel, string>;
  setMarketingMedium: Action<AuthenticationModel, string>;
  setMarketingCampaign: Action<AuthenticationModel, string>;
  setAdvisorAssets: Action<AuthenticationModel, string[]>;
  setAdvisorRoles: Action<AuthenticationModel, string[]>;
  setWidgetToken: Action<AuthenticationModel, string>;
  userDirectLogin: Thunk<AuthenticationModel>;
  fetchAdvisorAssets: Thunk<AuthenticationModel>;
  fetchAdvisorRoles: Thunk<AuthenticationModel>;
  createAdvisorAccount: Thunk<AuthenticationModel>;
  registerAdvisor: Thunk<AuthenticationModel, any>;
  authenticateAdvisor: Thunk<AuthenticationModel, UserAuth>;
  forgotPassword: Thunk<AuthenticationModel, string>;
  resetPassword: Thunk<AuthenticationModel, any>;
  adminResetPassword: Thunk<AuthenticationModel, any>;
  logoutAdvisor: Thunk<AuthenticationModel, any>;
  prepareStoreForNewSession: Thunk<AuthenticationModel, any>;
  triggerLoader: Thunk<AuthenticationModel, string>;
  closeLoader: Thunk<AuthenticationModel, any>;
  triggerNotification: Thunk<AuthenticationModel, any>;
  closeNotification: Thunk<AuthenticationModel, any>;
  registerWidget: Thunk<AuthenticationModel, any>;
}

const authenticationModel: AuthenticationModel = {
  token: '',
  error: '',
  setToken: action((state, payload) => {
    state.token = payload;
  }),
  setUserRole: action((state, payload) => {
    state.userRole = payload;
  }),
  setError: action((state, payload) => {
    state.error = payload;
  }),
  setAdvisorAssets: action((state, payload) => {
    state.advisorAssets = payload;
  }),
  setAdvisorRoles: action((state, payload) => {
    state.advisorRoles = payload;
  }),
  setWidgetToken: action((state, payload) => {
    state.widgetToken = payload;
  }),
  setMarketingSource: action((state, payload) => {
    state.marketingSource = payload;
  }),
  setMarketingMedium: action((state, payload) => {
    state.marketingMedium = payload;
  }),
  setMarketingCampaign: action((state, payload) => {
    state.marketingCampaign = payload;
  }),
  userDirectLogin: thunk(async (actions, payload, { getStoreActions }) => {
    
  }),
  createAdvisorAccount: thunk(async (actions, payload) => {
    
  }),
  
};

export default authenticationModel;
