import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import Spinner from 'positivly-framework/Spinner/Spinner';
import { positivlyActions, positivlyState } from 'positivly-hooks/Positivly';
import {
  POSITIVLY_LOGIN,
  POSITIVLY_HOME,
  POSITIVLY_REGISTER,
  POSITIVLY_FORGOT_PWD,
  POSITIVLY_RESET_PWD,
} from 'positivly-constants';

interface RouteProps {
  component: any;
}

const ValidatedRoute: React.FC<RouteProps> = React.memo(
  ({ component: Component, ...rest }): JSX.Element => {
    const [isActive, setIsActive] = useState<boolean>();
    const sessionActive = positivlyState((state: any) => state.positivly.sessionActive);
    const isSessionActive = positivlyState((state: any) => state.positivly.isSessionActive);

    useEffect(() => {
      checkActiveStatus();
    }, [sessionActive]);

    const checkActiveStatus = async () => {
      const status = await isSessionActive;
      setIsActive(status || sessionActive);
    };

    const isExempted = path => {
      return (
        path === POSITIVLY_LOGIN ||
        path === POSITIVLY_REGISTER ||
        path === POSITIVLY_FORGOT_PWD ||
        path === POSITIVLY_RESET_PWD
      );
    };

    return (
      <React.Fragment>
        {isActive !== undefined ? (
          <Route
            {...rest}
            render={props =>
              isActive ? (
                isExempted(props.location.pathname) ? (
                  <Redirect to={{ pathname: POSITIVLY_HOME, state: { from: props.location } }} />
                ) : (
                  <Component {...props} />
                )
              ) : isExempted(props.location.pathname) ? (
                <Component {...props} />
              ) : (
                <Redirect to={{ pathname: POSITIVLY_LOGIN, state: { from: props.location } }} />
              )
            }
          />
        ) : (
          <Spinner />
        )}
      </React.Fragment>
    );
  },
);

export default ValidatedRoute;