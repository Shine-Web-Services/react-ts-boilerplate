import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


interface RouteProps {
  history: any;
}

const ForgotPassword: React.FC<RouteProps> = ({ history }): JSX.Element => {
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');


  useEffect(() => {

  }, []);

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Forgot Passwaord</h5>
                <form className="form-signin">
                  <div className="form-label-group">
                    <input autoComplete="inputEmail" type="email" id="inputEmail" className="form-control" placeholder="Email address"   />
                    <label htmlFor="inputEmail">Email address</label>
                  </div>

                  <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Submit</button>
                  <hr className="my-4" />
                  <p className="forgot-password text-right">
                      Go back to <Link to="/login">Sign In</Link>
                  </p>
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
