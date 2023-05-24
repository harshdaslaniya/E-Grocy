import React from 'react';
import { Outlet } from 'react-router-dom';

function Additem() {

	return (
        <div>
        <section className="vh-100">
            <div className="container ">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                  <div className="card bg-dark text-white" style={{'borderRadius':"1 rem" , height:"700px"}}>
                    <div className=" text-center">
                      <h3 className="fw-bold mb-2 text-uppercase">Add Item</h3>

                      <Outlet></Outlet>





                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
	  
	);
  }
  

export default Additem;
