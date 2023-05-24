import React from 'react'

function Item(props) {
  return (
    <>
        <div className="container">
          <h1 className=''> {props.title}</h1>  
          <div className='button-rightside'>
            <button type="button" class="btn btn-secondary btn-sm" >
              Show more
            </button>
          </div>
          <ul className="cards">

            <li className="card hovercard">
              <div>
                <img src={props.image1}  className="card-img-top  rounded " alt="..."/>
              </div>
              <div className="card-link-wrapper ">
                <h3 className="card-title">{props.item1}</h3>
                <a href="/" className="card-link rounded">Add to cart</a>
              </div>
            </li>
            <li className="card hovercard">
              <div>
                <img src={props.image2} className="card-img-top" alt="..."/>
              </div>
              <div className="card-link-wrapper">
                <h3 className="card-title">{props.item2}</h3>
                <a href="/" className="card-link rounded">Add to cart</a>
              </div>
            </li>
            <li className="card hovercard">
              <div>
                <img src={props.image3} className="card-img-top" alt="..."/>
              </div>
              <div className="card-link-wrapper">
                <h3 className="card-title">{props.item3}</h3>
                <a href="/" className="card-link rounded">Add to cart</a>
              </div>
            </li>
            <li className="card hovercard">
              <div>
                <img src={props.image4} className="card-img-top" alt="..."/>
              </div>
              <div className="card-link-wrapper">
                <h3 className="card-title">{props.item4}</h3>
                <a href="/" className="card-link rounded">Add to cart</a>
              </div>
            </li>
            <li className="card hovercard">
              <div>
                <img src={props.image5} className="card-img-top" alt="..."/>
              </div>
              <div className="card-link-wrapper">
                <h3 className="card-title">{props.item5}</h3>
                <a href="/" className="card-link rounded">Add to cart</a>
              </div>
            </li>
            <li className="card hovercard">
              <div>
                <img src={props.image6} className="card-img-top" alt="..."/>
              </div>
              <div className="card-link-wrapper">
                <h3 className="card-title">{props.item6}</h3>
                <a href="/" className="card-link rounded">Add to cart</a>
              </div>
            </li>
            <li className="card hovercard">
              <div>
                <img src={props.image7} className="card-img-top" alt="..."/>
              </div>
              <div className="card-link-wrapper">
                <h3 className="card-title">{props.item7}</h3>
                <a href="/" className="card-link rounded">Add to cart</a>
              </div>
            </li>
            <li className="card hovercard">
              <div>
                <img src={props.image8} className="card-img-top" alt="..."/>
              </div>
              <div className="card-link-wrapper">
                <h3 className="card-title">{props.item8}</h3>
                <a href="/" className="card-link rounded">Add to cart</a>
              </div>
            </li>
            <li className="card hovercard">
              <div>
                <img src={props.image9} className="card-img-top" alt="..."/>
              </div>
              <div className="card-link-wrapper">
                <h3 className="card-title">{props.item9}</h3>
                <a href="/" className="card-link rounded">Add to cart</a>
              </div>
            </li>
            <li className="card hovercard">
              <div>
                <img src={props.image10} className="card-img-top" alt="..."/>
              </div>
              <div className="card-link-wrapper">
                <h3 className="card-title">{props.item10}</h3>
                <a href="/" className="card-link rounded">Add to cart</a>
              </div>
            </li>
          </ul>
        </div>
        
    </>
  )
}

export default Item