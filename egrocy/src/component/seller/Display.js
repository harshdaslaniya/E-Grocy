import React from 'react';
import dum from "./dummy1.png";

function Display() {

	return (
        <div className='container mb-5 '>
            <div className="row row-cols-1 row-cols-md-4 g-4">
            <div className="col">
                <div className="card h-100">
                <img src={dum} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                <img src={dum} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a short card.</p>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                <img src={dum} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                <img src={dum} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                <img src={dum} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                <img src={dum} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a short card.</p>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                <img src={dum} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                <img src={dum} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
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
  

export default Display;
