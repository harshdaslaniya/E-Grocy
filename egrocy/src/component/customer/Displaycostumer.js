import React from 'react';
import dum from "../seller/dummy1.png";

function Displaycostumer() {

	return (
        <div className='container mb-5 mt-5'>
            <h1>Item Category</h1>
            <div className="row row-cols-1 row-cols-md-4 g-4">
            <div className="col">
                <div className="card h-100">
                <img src={dum} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <button className="btn btn-outline-warning "  type="button">Add to Cart</button> {/* <input type='button' className='btn btn-outline-warning'><a href="/" className="card-link rounded">Add to cart</a></input> */}
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                <img src={dum} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a short card.</p>
                </div>
                <button className="btn btn-outline-warning "  type="button">Add to Cart</button> {/* <input type='button' className='btn btn-outline-warning'><a href="/" className="card-link rounded">Add to cart</a></input> */}
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                <img src={dum} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                </div>
                <button className="btn btn-outline-warning "  type="button">Add to Cart</button> {/* <input type='button' className='btn btn-outline-warning'><a href="/" className="card-link rounded">Add to cart</a></input> */}
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                <img src={dum} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <button className="btn btn-outline-warning "  type="button">Add to Cart</button> {/* <input type='button' className='btn btn-outline-warning'><a href="/" className="card-link rounded">Add to cart</a></input> */}
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                <img src={dum} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <button className="btn btn-outline-warning "  type="button">Add to Cart</button> {/* <input type='button' className='btn btn-outline-warning'><a href="/" className="card-link rounded">Add to cart</a></input> */}
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                <img src={dum} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a short card.</p>
                </div>
                <button className="btn btn-outline-warning "  type="button">Add to Cart</button> {/* <input type='button' className='btn btn-outline-warning'><a href="/" className="card-link rounded">Add to cart</a></input> */}
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                <img src={dum} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                </div>
                <button className="btn btn-outline-warning "  type="button">Add to Cart</button> {/* <input type='button' className='btn btn-outline-warning'><a href="/" className="card-link rounded">Add to cart</a></input> */}
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                <img src={dum} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <button className="btn btn-outline-warning "  type="button">Add to Cart</button> {/* <input type='button' className='btn btn-outline-warning'><a href="/" className="card-link rounded">Add to cart</a></input> */}
                </div>
            </div>
            </div>
	  

        {/* // pagination********************************************************************* */}

        <nav aria-label="...">
        <ul className="pagination justify-content-center m-5 ">
            <li className="page-item ">
            <a className="page-link" href='/'>Previous</a>
            </li>
            <li className="page-item"><a className="page-link" href="/">1</a></li>
            <li className="page-item active" aria-current="page">
            <a className="page-link" href="/">2</a>
            </li>
            <li className="page-item"><a className="page-link" href="/">3</a></li>
            <li className="page-item">
            <a className="page-link" href="/">Next</a>
            </li>
        </ul>
        </nav>
        </div>

	);
  }
  

export default Displaycostumer;
