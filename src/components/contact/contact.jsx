import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <div className="">
      <main className="form-signin w-100 m-auto mt-3">
        <form className="mt-5">
          <h1 className="h3 mb-3 fw-bold text-center"> Sign in</h1>

          <div className="form-floating mt-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">First Name</label>
          </div>

          <div className="form-floating mt-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Last Name</label>
          </div>

          <div className="form-floating mt-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Enter Your Email</label>
          </div>

          <div className="form-floating mt-3">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>

          <div className="form-floating mt-3">
            <input
              type="password"
              className="form-control "
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Confirm Password</label>
          </div>
          <div className="form-check text-start my-3">
            <input
              className="form-check-input"
              type="checkbox"
              value="remember-me"
              id="flexCheckDefault"
            />
            <label className="form-check-label" for="flexCheckDefault">
              Remember me
            </label>
          </div>
          <button className="btn btn-primary w-100 py-2 fw-semibold" type="submit">
            Sign in
          </button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
