import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [fastName, setfastName] = useState("")
  const [lastName, setlastName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const [userConfirmPassword, setUserConfirmPassword] = useState("")
  
  const SignIn = (e) => {
    e.preventDefault();
    console.log(fastName,lastName,userEmail,userPassword,userConfirmPassword);
    
  };

  return (
    <div className="">
      <main className="form-signin w-100 m-auto mt-3">
        <form onSubmit={SignIn} className="mt-5">
          <h1 className="h3 mb-3 fw-bold text-center"> Sign in</h1>
          <div className="form-floating mt-3">
            <input type="text" className="form-control"
             placeholder="First Name"
              value={fastName} onChange={(e)=> {setfastName(e.target.value);
             }}/>
            <label >First Name</label>
          </div>

          <div className="form-floating mt-3">
            <input type="text" className="form-control" 
            placeholder="Last Name " value={lastName} 
            onChange={(e)=>setlastName(e.target.value)}/>
            <label >Last Name</label>
          </div>

          <div className="form-floating mt-3">
            <input type="email"
             className="form-control" placeholder="Enter Your Email"
             value={userEmail} 
              onChange={(e)=>setUserEmail(e.target.value)} />
            <label >Enter Your Email</label>
          </div>

          <div className="form-floating mt-3">
            <input
              type="password"
              className="form-control"  placeholder="Password"
               value={userPassword} 
              onChange={(e)=>setUserPassword(e.target.value)} />
            <label >Password</label>
            
          </div>

          <div className="form-floating mt-3">
            <input
              type="password"
              className="form-control "  
              placeholder="Confirm Password" value={userConfirmPassword} 
              onChange={(e)=>setUserConfirmPassword(e.target.value)} />
            <label>Confirm Password</label>
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
