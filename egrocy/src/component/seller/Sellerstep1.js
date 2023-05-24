import React from 'react';
import { Link } from 'react-router-dom';

function Sellerstep1() {
    
  

	return (

    <div>
      <div className="card-body p-4 p-md-5">
            <h4 className="fw-bold mb-2 text-uppercase">Customer</h4>
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

              <div className="mt-4 pt-2">
                <Link to="/Seller/Additem/step2"><input className="btn btn-outline-primary btn-lg" type="button" value="Save & Next" /></Link>
              </div>

            </div>
          </div>
    </div>
                      




	);
  }
  

export default Sellerstep1;
