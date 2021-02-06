import React, { useState, useEffect } from 'react';


interface RouteProps {
  history: any;
}

const ForgotPassword: React.FC<RouteProps> = ({ history }): JSX.Element => {
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  

  useEffect(() => {
    
  }, []);


  /*const authenticate = (): void => {
    if (isNotEmpty(userName) && isNotEmpty(password)) {
      if (validateEmail(userName)) {
        authenticateAdvisor({
          userName: userName,
          password: password,
        });
      } else {
        triggerNotification({ type: 'error', message: ERROR_INVALID_EMAIL });
      }
    } else {
      triggerNotification({ type: 'error', message: ERROR_LOGIN_INVALID_VALUE });
    }
  };

  const navigateToRoute = (route): void => {
    history.push(route);
  };

  const navigateToForgotPassword = (): void => {
    history.push(POSITIVLY_FORGOT_PWD);
  };

  const navigateToRegister = (): void => {
    history.push(POSITIVLY_REGISTER);
  };*/

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Sign In</h5>
                <form className="form-signin">
                  <div className="form-label-group">
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address"   />
                    <label htmlFor="inputEmail">Email address</label>
                  </div>
                  <div className="form-label-group">
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password"  />
                    <label htmlFor="inputPassword">Password</label>
                  </div>
                  <div className="custom-control custom-checkbox mb-3">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
                  </div>
                  <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                  <hr className="my-4" />
                  <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2" /> Sign in with Google</button>
                  <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i className="fab fa-facebook-f mr-2" /> Sign in with Facebook</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ForgotPassword;
