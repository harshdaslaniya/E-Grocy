import React from 'react';
import { Link } from 'react-router-dom';

function Updatedetail() {
    
  

	return (
        <div>
        <section className="vh-100">
            <div className="container ">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                  <div className="card bg-dark text-white" style={{'borderRadius':"1 rem" , height:"700px"}}>
                    <div className=" text-center">
                      <h3 className="fw-bold mb-2 text-uppercase">Update details</h3>

                        <div>
                        <div className="card-body p-4 p-md-5">

                                <div>
                                <div className="row">

                                    <div className="form-outline">
                                        <input type="text" name="ProductName" className="form-control form-control-lg" />
                                        <label className="form-label" htmlFor="ProductName"> Name</label>
                                    </div>

                                </div>

                                <div className="row">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" aria-label="Text input with dropdown button"/>
                                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Categeroy</button>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                    <li className="dropdown-item" >Fruit</li>
                                    <li className="dropdown-item" >Grocery</li>
                                    <li className="dropdown-item" >Vegetable</li>
                                    <li className="dropdown-item" >House Hold</li>
                                    </ul>
                                </div>
                                <label className="form-label" htmlFor="Category">Category</label>  
                                </div>  
                                <div className="row">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" aria-label="Text input with dropdown button"/>
                                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Price per</button>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                    <li className="dropdown-item" >Per Item</li>
                                    <li className="dropdown-item" >Per K.g</li>
                                    <li className="dropdown-item" >Per Dozen</li>
                                    <li className="dropdown-item" >Per Litre</li>
                                    </ul>
                                </div>
                                <label className="form-label" htmlFor="Price">Price</label>  
                                </div>  
                                

                                <div className="row">
                                    <div className="col-12">
                                    <div class="input-group">
                                    <span class="input-group-text text-bg-dark">Description</span>
                                    <textarea class="form-control" aria-label="With textarea"></textarea>
                                    </div>
                                    </div>
                                </div>

                                    <div className="row mt-4 pt-2">
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                            <Link to="/Seller/Displayitem"><input className="btn btn-outline-primary btn-lg" type="button" value="⬅️ Back" /></Link>
                                            </div>

                                        </div>
                                        <div className="col-md-6 mb-4">

                                            <div className="form-outline">
                                            <input className="btn btn-outline-primary btn-lg" type="button" value="Save " />
                                            </div>

                                        </div>
                                    </div>
                               
                                </div>
                            </div>
                        </div>

                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>



	);
  }
  

export default Updatedetail;
