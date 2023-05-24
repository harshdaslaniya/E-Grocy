import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Delivery() {

	return (
        <div>
  


      <div>
            <a className="btn btn-primary m-3" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
              MENU👈🏻
            </a>


            <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">MENU👉🏻</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <div>
                    <Link to="/Delivery/Home" style={{textDecoration:"none"}} className='text-light ms-3 me-3'><button  type="button" className="btn btn-primary btn-lg m-3 ms-5 me-5">Home</button></Link>
                    <Link to="/Delivery/Order" style={{textDecoration:"none"}} className='text-light ms-3 me-3'><button  type="button" className="btn btn-primary btn-lg m-3 ms-5 me-5">Order</button></Link>
                    <Link to="/Delivery/Orderdetail" style={{textDecoration:"none"}} className='text-light ms-3 me-3'><button  type="button" className="btn btn-primary btn-lg m-3 ms-5 me-5">Order Detail</button></Link>
                </div>

              </div>
            </div>
        </div>
     
        <Outlet></Outlet> 


        </div>
	  
	);
  }
  

export default Delivery;
