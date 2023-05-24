import React from 'react'
import selling from "./selling.jpg"
import buying from "./buying.jpg"
import delivery from "./delivery.jpg"
function Service() {
  return (
    <div className="gradient-custom py-5">
      <div className='container'>
        <h1 className=' text-center text-light mb-5' style={{fontFamily:"Ink Free"}}> SERVICES </h1>
        <div id="buying"  >
          <div>
            <h1 className='text-center fw-bolder text-light' style={{fontFamily:"Ink Free"}}>Buying:</h1>
          </div>
          <div>
              <div  style={{content: "", clear:"both", display:"table"}}>
                <img  src={buying} height="250" alt="aim" style={{borderRadius:"10%" ,float: "left",marginRight:"20px"}} />
                <h4 className=' text-center text-light my-5 mx-3' style={{fontFamily:"Ink Free"}}>Our platfrom provides buying services for different grocery items and household thing and for that delivery also given.</h4>
              </div>
          </div>
        </div>   
        <div id="selling" style={{height:"auto"}}>
  
          <div>
            <h1 className='text-center fw-bolder text-light' style={{fontFamily:"Ink Free"}}>Selling:</h1>
          </div>
          <div>
              <div  style={{content: "", clear:"both", display:"table"}}>
                <img  src={selling} height="250" alt="aim" style={{borderRadius:"10%" ,float: "right",marginLeft:"20px"}} />
                <h4 className=' text-center text-light my-5 mx-3' style={{fontFamily:"Ink Free"}}>Here Seller can get online selling option to boost there option.We provide a technical team which will help you easily maintain your store and quick changes and add you special products </h4>
              </div>
          </div>
        </div> 
      
        <div id="delivery"  style={{height:"auto"}}>
          <div>
            <h1 className='text-center fw-bolder text-light' style={{fontFamily:"Ink Free"}}>Delivery:</h1>
          </div>
          <div>
              <div  style={{content: "", clear:"both", display:"table"}}>
                <img  src={delivery} height="250" alt="aim" style={{borderRadius:"10%" ,float: "left",marginRight:"20px"}} />
                <h4 className=' text-center text-light my-5 mx-3' style={{fontFamily:"Ink Free"}}> we make sure to deliver your item securely and no comprise is done in the item regarding quantity or quality , we plan on delivery  under 30 mins for nearby malls and store . on delivery if  you are not  satisfied you can return on delivery item according to terms and condition.</h4>
              </div>
          </div>
        </div> 
      </div>    
    </div>
  )
}

export default Service