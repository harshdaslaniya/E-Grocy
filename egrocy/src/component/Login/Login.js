import React from 'react'
import {
  useNavigate,
  Outlet
} from "react-router-dom";

import './login.css';


function Login() {
  const navigate = useNavigate();
  const handleOptionChange = () => {
      if (document.getElementById('btnradio1').checked) {
        navigate("customerlogin");
      }
      if (document.getElementById('btnradio2').checked) {
        navigate("sellerlogin");
      }
      if (document.getElementById('btnradio3').checked) {
        navigate("deliverymanlogin");
      }
    }
 
  return (
    <>

          <section className="vh-100 gradient-custom">
            <div className="container py-10 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                  <div className="card bg-dark text-white" style={{'borderRadius':"1 rem"}}>
                    <div className=" text-center">
                      <h3 className="fw-bold mb-2 text-uppercase">Login as</h3>
                      <div className="btn-group" role="group" aria-label="Basic radio toggle button group"> 
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio1"    defaultChecked onClick={handleOptionChange} />
                        <label className="btn btn-outline-light" htmlFor="btnradio1">Customer
                        </label>

                        <input type="radio" className="btn-check" name="btnradio" id="btnradio2"   onClick={handleOptionChange} />
                        <label className="btn btn-outline-light" htmlFor="btnradio2">Seller
                        </label>

                        <input type="radio" className="btn-check" name="btnradio" id="btnradio3" onClick={handleOptionChange}/>
                        <label className="btn btn-outline-light" htmlFor="btnradio3">Delivery-Man
                        </label>
                      </div>
                       <Outlet></Outlet>  
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        
    </>
  )
}

export default Login;