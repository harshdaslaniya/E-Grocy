import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Seller() {

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
                    <button  type="button" className="btn btn-primary btn-lg m-3 ms-5 me-5"><Link to="/Seller/Home" style={{textDecoration:"none"}} className='text-light ms-3 me-3'>Home</Link></button>
                    <button  type="button" className="btn btn-primary btn-lg m-3 ms-5 me-5"><Link to="/Seller/Additem/step1" style={{textDecoration:"none"}} className='text-light ms-3 me-3'>Add Item</Link></button>
                    <button  type="button" className="btn btn-primary btn-lg m-3 ms-5 me-5"><Link to="/Seller/Display" style={{textDecoration:"none"}} className='text-light ms-3 me-3'>Display</Link></button>
                </div>

              </div>
            </div>
        </div>
     
        <Outlet></Outlet> 


        </div>
	  
	);
  }
  

export default Seller;
