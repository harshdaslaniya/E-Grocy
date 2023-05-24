import React,{useState} from 'react'
import axios from 'axios';

function DeliverySignup1(props) {

  const [ user, setUser] = useState({
    firstName: "",
    lastName: "",
    password:"",
    confirmPassword: "",
    emailAddress:"",
    phoneNumber:"",
    image:null
})
// useEffect(() => {
//   console.log(user);
// }, [user]);
const handleChange = (e) => {
  const { name, value } = e.target;

  if (name === 'image') {
    setUser({
      ...user,
      image: e.target.files[0]
    });
  } else {
    setUser({
      ...user,
      [name]: value
    });
  }
}; 
const onClick=()=>{
  
  const{ firstName, lastName, password, confirmPassword, emailAddress, phoneNumber , image} = user
  if(!(firstName && lastName && password && confirmPassword && emailAddress && phoneNumber && image )){
    props.setalert({type:'error',msg:'All data not filled'});
  }
  else{
    if(password === confirmPassword){
      axios.post("http://localhost:8000/customerSignup" ,user)
      .then( res => {
        props.setalert({type:res.data.type,msg:res.data.msg});
      })
      
    }
    else{
      props.setalert({type:'warning',msg:'Password & ConfirmPassword not same'});
    }
    
  }
}

  return (
    <div className="card-body p-4 p-md-5">
            <h4 className="fw-bold mb-2 text-uppercase">Delivery-man</h4>
            <form>
              <div className="row">
                <div className="col-md-6 mb-4">

                  <div className="form-outline">
                    <input type="text" id="firstName" name="firstName" value={user.firstName} onChange={handleChange} className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="firstName">First Name</label>
                  </div>

                </div>
                <div className="col-md-6 mb-4">

                  <div className="form-outline">
                    <input type="text" id="lastName" name="lastName" value={user.lastName} onChange={handleChange} className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="lastName">Last Name</label>
                  </div>

                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-4 pb-2">

                  <div className="form-outline">
                  <input type="password" id="password" name="password" value={user.password} onChange={handleChange} className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="password">Password</label>
                  </div>

                </div>
                <div className="col-md-6 mb-4 pb-2">

                  <div className="form-outline">
                  <input type="password" id="confirmPassword" name="confirmPassword" value={user.confirmPassword}  onChange={handleChange} className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="phoneNumber">Confirm Password</label>
                  </div>

                </div>
              </div>  
              <div className="row">
                <div className="col-md-6 mb-4 pb-2">

                  <div className="form-outline">
                    <input type="email" id="emailAddress" name="emailAddress" value={user.emailAddress} onChange={handleChange} className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="emailAddress">Email</label>
                  </div>

                </div>
                <div className="col-md-6 mb-4 pb-2">

                  <div className="form-outline">
                    <input type="tel" id="phoneNumber" name="phoneNumber" value={user.phoneNumber} onChange={handleChange} className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="phoneNumber">Phone Number</label>
                  </div>

                </div>
              </div>

              <div class="input-group">
                <input type="file" accept="image/*"  class="form-control" id="image" name='image' onChange={handleChange} aria-describedby="inputGroupFileAddon04" aria-label="Upload"/>
              </div>
      
              <div className="mt-4 pt-2">
                <input className="btn btn-outline-primary btn-lg" type="button" onClick={onClick} value="Submit" />
              </div>

            </form>
          </div>
  )
}

export default DeliverySignup1