import React from 'react'
import aim from "./aim.jpg"
import vision from "./vision.jpg"
import tools from "./tools.jpg"
function About() {

  return (
    <div className="gradient-custom py-5">
      <div className='container'>
      <h1 className=' text-center text-light mb-5 ' style={{fontFamily:"Ink Free"}}> ABOUT US </h1>
        <div id="aim"  >
          <div>
            <h1 className='text-center fw-bolder text-light' style={{fontFamily:"Ink Free"}}>Aim:</h1>
          </div>
          <div>
              <div  style={{content: "", clear:"both", display:"table"}}>
                <img  src={aim} height="250" alt="aim" style={{borderRadius:"10%" ,float: "left",marginRight:"20px"}} />
                <h4 className=' text-center text-light my-5 mx-3' style={{fontFamily:"Ink Free"}}>We are planning to unite everyone by giving opportunity to join with our team and together we will make this avliable all over the india.</h4>
              </div>
          </div>
        </div>   
        <div id="vision" style={{height:"auto"}}>
  
          <div>
            <h1 className='text-center fw-bolder text-light' style={{fontFamily:"Ink Free"}}>Vision:</h1>
          </div>
          <div>
              <div  style={{content: "", clear:"both", display:"table"}}>
                <img  src={vision} height="250" alt="aim" style={{borderRadius:"10%" ,float: "right",marginLeft:"20px"}} />
                <h4 className=' text-center text-light my-5 mx-3' style={{fontFamily:"Ink Free"}}>Our team belives in unite and conquer with our best services we will make  delivery fastest and easy to purchase ,benefits for a daily member to make their savings increase by reasonable purchases. </h4>
              </div>
          </div>
        </div> 
      
        <div id="tools"  style={{height:"auto"}}>
          <div>
            <h1 className='text-center fw-bolder text-light' style={{fontFamily:"Ink Free"}}>Tools:</h1>
          </div>
          <div>
              <div  style={{content: "", clear:"both", display:"table"}}>
                <img  src={tools} height="250" alt="aim" style={{borderRadius:"10%" ,float: "left",marginRight:"20px"}} />
                <h4 className=' text-center text-light my-5 mx-3' style={{fontFamily:"Ink Free"}}>We use react js for fronted part and for backend part we use Nodejs .In Database we use Non sqp database that is MongoDb . IN addition for CSS we use CSS framework Bootstrap.  </h4>
              </div>
          </div>
        </div> 
      </div>    
    </div>

  )
}

export default About