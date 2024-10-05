import React, { useEffect, useState } from "react";
import "./contact.css";

const Contact = () => {

  const [userDetails, setUserDetails] = useState({ firstName: "", LastName: "", email: "", Password: "", ConfirmPassword: "" });
  console.log(userDetails);


  const [userErr, setUserErr] = useState({ firstNameErr: false, LastNameErr: false, emailErr: false, PasswordErr: false, ConfirmPasswordErr: false });
  console.log(userDetails);

  const SignIn = (e) => {
    e.preventDefault();
    if (userDetails.firstName === "" && userDetails.LastName === "" && userDetails.email === "" && userDetails.Password === "" && userDetails.ConfirmPassword === "") {
      setUserErr({ firstNameErr: true, LastNameErr: true, emailErr: true, PasswordErr: true, ConfirmPasswordErr: true, })
    }else
    {

      setUserDetails({ firstName: "", LastName: "", email: "", Password: "", ConfirmPassword: "" });
    }
  }





  useEffect(() => {
    if (userDetails.firstName !== "") {
      setUserErr({ ...userErr, firstNameErr: false })
    }
    if (userDetails.LastName !== "") {
      setUserErr({ ...userErr, LastNameErr: false })
    }
    if (userDetails.email !== "") {
      setUserErr({ ...userErr, emailErr: false })
    }
    if (userDetails.Password !== "") {
      setUserErr({ ...userErr, PasswordErr: false })
    }
    if (userDetails.ConfirmPassword !== "") {
      setUserErr({ ...userErr, ConfirmPasswordErr: false })
    }

  }, [userDetails]);



  return (
    <div className="">
      <main className="form-signin w-100 m-auto mt-3">
        <form onSubmit={SignIn} className="mt-5">
          <h1 className="h3 mb-3 fw-bold text-center"> Sign in</h1>

          <div className="form-floating mt-3">
            <input type="text"
              style={{ border: userErr.firstNameErr && "2px solid red", }}
              className="form-control"
              placeholder="First Name" name="FirstName"
              onChange={(e) => {
                setUserDetails({ ...userDetails, firstName: e.target.value })

              }} />
            {userErr.firstNameErr && (
              <span className="text-danger">First Name</span>
            )}
          </div>

          <div className="form-floating mt-3">
            <input type="text"
              style={{ border: userErr.LastNameErr && "2px solid red", }}
              className="form-control"
              placeholder="Last Name" name="LastName"
              onChange={(e) => {
                setUserDetails({ ...userDetails, LastName: e.target.value })
              }} />
            {userErr.LastNameErr && (
              <span className="text-danger"> Last Name</span>
            )}
          </div>

          <div className="form-floating mt-3">
            <input type="email"

              style={{ border: userErr.emailErr && "2px solid red", }}
              className="form-control" name="email"

              onChange={(e) => {
                setUserDetails({ ...userDetails, email: e.target.value })
              }} />
            {userErr.emailErr && (
              <span className="text-danger">Enter Your Email</span>
            )}

          </div>

          <div className="form-floating mt-3">
            <input
              type="password"
              style={{ border: userErr.PasswordErr && "2px solid red", }}
              className="form-control" placeholder="Password" name="Password"

              onChange={(e) => {
                setUserDetails({ ...userDetails, Password: e.target.value })
              }} />
            {userErr.PasswordErr && (
              <span className="text-danger">Password</span>
            )}

          </div>

          <div className="form-floating mt-3">
            <input
              type="password"
              style={{ border: userErr.ConfirmPasswordErr && "2px solid red", }}
              className="form-control "
              placeholder="Confirm Password" name="ConfirmPassword"
              onChange={(e) => {
                setUserDetails({ ...userDetails, ConfirmPassword: e.target.value })
              }} />
            {userErr.ConfirmPasswordErr && (
              <span className="text-danger">Confirm Password</span>
            )}
          </div>

          <div className="form-check text-start my-3">
            <input
              className="form-check-input"
              type="checkbox"
              value="remember-me"
              id="flexCheckDefault" />
            <label className="form-check-label">
              Remember me
            </label>
          </div>
          <button
            className="btn btn-primary w-100 py-2 fw-semibold"
            type="submit" >
            Sign in
          </button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
