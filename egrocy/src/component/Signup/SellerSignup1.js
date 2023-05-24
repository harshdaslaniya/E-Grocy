import React ,{useState} from 'react'
import TimePicker from 'react-time-picker';
import "./Signup.css"

function SellerSignup1() {
    const [time1, setTime1] = useState('10:00');
    const [time2, setTime2] = useState('10:00');
  
  const handleTimeChange1 = (newTime) => {
    setTime1(newTime);
  };
  const handleTimeChange2 = (newTime) => {
    setTime2(newTime);
  };
  
  const [ user, setUser] = useState({
    Name: "",
    lastName: "",
    password:"",
    confirmPassword: "",
    emailAddress:"",
    phoneNumber:"",
    address:""
})
const handleChange = (e) => {
  const {name , value} = e.target;
  setUser({
    ...user,
  [name] : value
  })  
}
  return (
        <div className="card-body p-4 p-md-5">
          <h4 className="fw-bold mb-2 text-uppercase">Seller</h4>
          <form>
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="form-outline">
                  <input type="text" name="firstName" value={user.firstName}  id="Name" onChange={handleChange} className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="firstName">Name</label>
                </div>

              </div>
              <div className="col-md-6 mb-4">

                <div className="form-outline">
                  <input type="text" name="lastName" value={user.lastName} id="Shop Name" onChange={handleChange} className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="lastName">Shop Name</label>
                </div>

              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-4 pb-2">

                <div className="form-outline">
                <input type="password" name="password" value={user.password} id="password" onChange={handleChange} className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="password">Password</label>
                </div>

              </div>
              <div className="col-md-6 mb-4 pb-2">

                <div className="form-outline">
                <input type="password" name="confirmPassword" value={user.confirmPassword} id="confirmPassword" onChange={handleChange} className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
                </div>

              </div>
            </div>  
            <div className="row">
              <div className="col-md-6 mb-4 pb-2">

                <div className="form-outline">
                  <input type="email" name="emailAddress" value={user.emailAddress} id="emailAddress" onChange={handleChange} className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="emailAddress">Email</label>
                </div>

              </div>
              <div className="col-md-6 mb-4 pb-2">

                <div className="form-outline">
                  <input type="tel" name="phoneNumber" value={user.phoneNumber} id="phoneNumber" onChange={handleChange} className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="phoneNumber">Phone Number</label>
                </div>

              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-4 pb-2">

                <div className="form-outline">
                <TimePicker
                  onChange={handleTimeChange1}
                  value={time1}
                  format='h:mm a'
                  clearIcon={null}
                  disableClock={true}
                  className="time-picker"
                />
                <label className="form-label mt-1" htmlFor="time1">Opening Time</label>
                </div>

              </div>
              <div className="col-md-6 mb-4 pb-2">

                <div className="form-outline">
                <TimePicker
                  onChange={handleTimeChange2}
                  value={time2}
                  format='h:mm a'
                  clearIcon={null}
                  disableClock={true}
                  className="time-picker"
                />
                <label className="form-label mt-1" htmlFor="time2">Closing Time</label>
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
              <input className="btn btn-outline-primary btn-lg" type="submit" value="Submit" />
            </div>

          </form>
        </div>
  )
}

export default SellerSignup1