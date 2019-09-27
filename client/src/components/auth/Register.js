import React, { useState, useContext, useEffect } from "react";
import AuthContext from '../../context/auth/AuthContext';

const Register = props => {
const authContext = useContext(AuthContext);

// const {register, isAuthentication} = authContext

  const [user, setUser] = useState({
    name: "",
    email: "",
    passord: "",
    password2: ""
  });
  const {name, email, password, password2  } = user
  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e =>{
      e.preventDefault();
      console.log("from submited");
  }
  return (
    <div className="from-container">
      <h1>
        Account
        <span className="text-primary"> Register </span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            name="password2"
            value={password2}
            onChange={onChange}
            required
          />
        </div>
        <input
          type="submit"
          value="Register"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

export default Register;