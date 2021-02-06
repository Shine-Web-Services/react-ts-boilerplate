import { createTypedHooks } from 'easy-peasy';
import AuthenticationModel from 'positivly-model/Authentication';

const typedHooks = createTypedHooks<AuthenticationModel>();

export const authenticationActions = typedHooks.useStoreActions;
export const authenticationDispatch = typedHooks.useStoreDispatch;
export const authenticationState = typedHooks.useStoreState;
