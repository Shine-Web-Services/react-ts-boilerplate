import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Input from "tt-frontend-components/Input/Input.tsx";
import Button from "tt-frontend-components/Button/Button.tsx";
import {ERROR_INVALID_PASSWORD, ERROR_INVALID_CONFIRM_PASSWORD, ERROR_EMPTY_CONFIRM_PASSWORD} from "tt-frontend-message";

interface RouteProps {
  history: any;
}

const ResetPassword: React.FC<RouteProps> = ({ history }): JSX.Element => {
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [confirmPasswordError, setConfirmPasswordError] = useState<boolean>(false);

  const [doNotMatchError, setDoNotMatchError] = useState<boolean>(false);

  const [disableButton, setDisableButton] = useState<boolean>(false);

  const signupUser = async() => {
    setPasswordError(false);
    setConfirmPasswordError(false);
    setDoNotMatchError(false);

    if (password.trim() == '') {
      setPasswordError(true);
      return false;
    }

    if (confirmPassword.trim() == '') {
      setConfirmPasswordError(true);
      setDoNotMatchError(false);
      return false;
    }

    if (password.trim() !== confirmPassword.trim()) {
      setConfirmPasswordError(true);
      setDoNotMatchError(true);
      return false;
    }

    setDisableButton(true);

    let formData = {password: password}
    let response = await signUpUser(formData);

    setDisableButton(false);

    if (response) {
      history.push('/login');
    }
  }

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Reset Password</h5>
                <form className="form-signin">
                  <Input
                    label={"New Password"}
                    type={'password'}
                    value={password}
                    handleInputChange={(e) => setPassword(e.target.value)}
                    error={passwordError}
                    placeholder={"New Password"}
                    errorMessage={ERROR_INVALID_PASSWORD}
                    id="inputPassword"
                  />

                  <Input
                    label={"Confirm Password"}
                    type={'password'}
                    value={confirmPassword}
                    handleInputChange={(e) => setConfirmPassword(e.target.value)}
                    error={confirmPasswordError}
                    placeholder={"Confirm Password"}
                    errorMessage={(!doNotMatchError && confirmPasswordError) ? ERROR_EMPTY_CONFIRM_PASSWORD : (confirmPasswordError && doNotMatchError) ?  ERROR_INVALID_CONFIRM_PASSWORD : ''}
                    id="inputConfirmPassword"
                  />

                  <Button type={'button'} onClick={() => disableButton ? "" : signupUser()} label={"Sign Up"} disableBtn={disableButton} />

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

export default ResetPassword;
