import React,{useState} from 'react'
import {
  Link
} from "react-router-dom";
import axios from "axios"




function CustomerLogin(props) {

      const [ user, setUser] = useState({
        emailAddress:"",
        password:""
    })
  const handleChange = (e) => {
      const {name , value} = e.target;
      setUser({
        ...user,
      [name] : value
      })
    }
  const login =()=>{
    axios.post("http://localhost:9003/customerLogin", user)
    .then(res => {
        props.showAlert(res.data.msg,res.data.type);
        props.setLoginUser(
          {
              "status":"Logout",
              "user":res.data.user
          })
  })
}
  return (
            <div className="card-body  text-center">
              <div className="mb-md-5 mt-md-4 pb-5">
                  <h4 className="fw-bold mb-2 text-uppercase">Customer</h4>
                  <p className="text-white-50 mb-5">Please enter your login and password!</p>
                <div className="form-outline form-white mb-4">
                    <input type="email" id="typeEmail" name="emailAddress" value={user.emailAddress} onChange={handleChange} className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="typeEmail">Email</label>
                </div>

                <div className="form-outline form-white mb-4">
                    <input type="password" id="typePasswordX" name="password" value={user.password} onChange={handleChange} className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="typePasswordX">Password</label>
                </div>

                  <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

                  <button className="btn btn-outline-light btn-lg px-5" onClick={login} type="submit">Login</button>

                {/* <div className="d-flex justify-content-center text-center mt-4 pt-1">
                    <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                    <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                    <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                </div>  */}

              </div>

              <div>
                  <p className="mb-0">Don't have an account? 
                  <Link to="/signup/customersignup" className="text-white-50 fw-bold">Sign Up</Link> 
                  </p>
              </div> 

            </div>
  )
}

export default CustomerLogin