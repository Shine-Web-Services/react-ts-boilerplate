import React, { useState, useEffect } from 'react';


interface RouteProps {
  history: any;
}

const ResetPassword: React.FC<RouteProps> = ({ history }): JSX.Element => {
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
                <h5 className="card-title text-center">Reset Password</h5>
                <form className="form-signin">

                  <div className="form-label-group">
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password"  />
                    <label htmlFor="inputPassword">New Password</label>
                  </div>

                  <div className="form-label-group">
                    <input type="password" id="inputConfirmPassword" className="form-control" placeholder="Confirm Password"  />
                    <label htmlFor="inputConfirmPassword">Confirm Password</label>
                  </div>

                  <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Reset Password</button>
                  <hr className="my-4" />

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ResetPassword;
