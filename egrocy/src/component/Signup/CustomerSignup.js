import React ,{useState}from 'react'
import './Signup.css'
import axios from "axios"
function CustomerSignup(props) {
  const [ user, setUser] = useState({
    name:"",
    email:"",
    password:"",
    confirmPassword: "",
    phone:"",
    address:""
})

const handleChange = (e) => {
  const {name , value} = e.target;
  setUser({
    ...user,
  [name] : value
  })
  console.log(user);
}

const onClick = ()=>{
  if(user.password === user.confirmPassword){
      axios.post('http://localhost:8000/customer/signup', user,{ withCredentials: true })
      .then(response => {
        props.setalert({msg:response.data.msg,type:response.data.type})
      })
      .catch(error => {
        if (error.response) {
          // The request was made and the server responded with a status code
          console.log('Error:', error.response.data);
          props.setalert({msg:error.response.data.msg,type:"error"})
        } else if (error.request) {
          console.log("aaaaaaaaa");
          // props.setalert({msg:error.response.request,type:"error"})
          console.log('No response from server:', error.request);
        } else {
          // props.setalert({msg:error.message.msg,type:"error"})
          console.log('Error:', error.message);
        }
      });
  }
  else{
    props.setalert({msg:"password and confirm password not Same",type:"warning"})
  }
}
  return (
    <div className="card-body p-4 p-md-5">
            <h4 className="fw-bold mb-2 text-uppercase">Customer</h4>
            <div>
              <div className="row">
                <div className="col-12 mb-4">
                  <div className="form-outline">
                    <input type="text" name="name" value={user.name}  id="name" onChange={handleChange} className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="firstName">Name</label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-4 pb-2">

                  <div className="form-outline">
                  <input type="password" name="password" value={user.password} id="password" onChange={handleChange} className="form-control form-control-lg" autoComplete='off' />
                    <label className="form-label" htmlFor="password">Password</label>
                  </div>

                </div>
                <div className="col-md-6 mb-4 pb-2">

                  <div className="form-outline">
                  <input type="password" name="confirmPassword" value={user.confirmPassword} id="confirmPassword" onChange={handleChange} className="form-control form-control-lg" autoComplete='off'/>
                    <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
                  </div>

                </div>
              </div>  
              <div className="row">
                <div className="col-md-6 mb-4 pb-2">

                  <div className="form-outline">
                    <input type="email" name="email" value={user.email} id="email" onChange={handleChange} className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="emailAddress">Email</label>
                  </div>

                </div>
                <div className="col-md-6 mb-4 pb-2">

                  <div className="form-outline">
                    <input type="tel" name="phone" value={user.phone} id="phone" onChange={handleChange} className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="phoneNumber">Phone Number</label>
                  </div>

                </div>
              </div>

              <div className="row">
                <div className="col-12">
                <div className="form-outline">
                    <input type="textarea" name="address" value={user.address} id="address" onChange={handleChange} className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="address">Address</label>
                  </div>
                  
                </div>
              </div>

              <div className="mt-4 pt-2">
                <input className="btn btn-outline-primary btn-lg" onClick={onClick} type="button" value="Submit" />
              </div>

            </div>
          </div>
  )
}

export default CustomerSignup