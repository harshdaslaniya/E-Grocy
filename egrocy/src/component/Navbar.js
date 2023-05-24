import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from "./logo.png";
function Navbar(props) {

  const navigate = useNavigate();    
  const scrollToBottom = () =>{ 
    window.scrollTo({ 
      top: document.documentElement.scrollHeight, 
      behavior: 'smooth'
    }); 
  }; 
   
  const clickLogin =()=>{
    if(props.user.status === "Logout"){
      props.setLoginUser({
        "status":"Login",
        "user":""
       })
    }
    else{
      navigate("/login/customerlogin")
    }
    console.log(props.user);
  }

  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container-fluid">
            <Link className="navbar-brand fs-4" to="/"><img src={logo} alt="logo" style={{height:"35px" }}/></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" onClick={scrollToBottom}>About us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Store</Link>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="/">Bhavnagar</a></li>
                    <li><a class="dropdown-item" href="/">Ahmedabad</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item me-2">
                 <Link className="nav-link active"  aria-current="page" to="/login/customerlogin" ><h6 onClick={clickLogin}>{props.user.status}</h6></Link>
                </li>
                <li className="nav-item">
                  <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-light " type="submit">Search</button>
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Navbar