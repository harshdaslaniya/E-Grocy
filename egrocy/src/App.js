import  {useState ,useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './component/Navbar';
import './App.css';
import Login from './component/Login/Login';
import Dashboard from './component/customer/Dashboard';
import Displaycostumer from './component/customer/Displaycostumer';
import Cart from './component/customer/Shopcart';
import Orderstatus from './component/customer/Orderstatus';
import {
  BrowserRouter as Router,
  Outlet,
  Route,
  Routes
} from "react-router-dom";
import Footer from './component/Footer';
import CustomerLogin from './component/Login/CustomerLogin';
import SellerLogin from './component/Login/SellerLogin';
import DeliveryLogin from './component/Login/DeliveryLogin';
import Signup from './component/Signup/Signup';
import CustomerSignup from './component/Signup/CustomerSignup';
import DeliverySignup1 from './component/Signup/DeliverySignup1';
import SellerSignup1 from './component/Signup/SellerSignup1';
import About from './component/aboutUs/About';
import Service from './component/services/Service';
import Nothing from './nothing';
import Seller from './component/seller/Seller';
import Home from './component/seller/Home';
import Additem from './component/seller/Additem';
import Sellerstep2 from './component/seller/Sellerstep2';
import Sellerstep1 from './component/seller/Sellerstep1';
import Display from './component/seller/Display';
import Displayitem from './component/seller/Displayitem';
import Updatephoto from './component/seller/Updatephoto';
import Updatedetail from './component/seller/Updatedetail';
import Delivery from './component/delivery/Delivery';
import Homed from './component/delivery/Home';
import Order from './component/delivery/Order';
import Orderdetail from './component/delivery/Orderdetail';

function App() {
  const [alert , setalert]=useState({
    msg:"",
    type:""
  })
  useEffect(() => {
    if(alert.type === "success")
    {
        toast.success(alert.msg, {
            position: toast.POSITION.TOP_RIGHT
        });
    }
    else if(alert.type === "error")
    {
        toast.error(alert.msg, {
            position: toast.POSITION.TOP_RIGHT
        });
    }
    else if(alert.type === "warning")
    {
        toast.warning(alert.msg, {
            position: toast.POSITION.TOP_RIGHT
        });
    }
}, [alert]);

  const [ user, setLoginUser] = useState({
    "status":"Login",
    "user":""
  })
  
 
  return (
    <>
    <Router>
    <div >
      <Navbar user={user} setLoginUser={setLoginUser}></Navbar>

        <ToastContainer />
      <Routes>
        
        <Route  path="/" element={<Dashboard/ >} />
        <Route  path="/Display" element={<Displaycostumer/ >} />
        <Route  path="/tester" element={<Nothing setalert={setalert}  / >} />
        <Route  path="/AboutUs" element={<About/ >} />
        <Route  path="/Services" element={<Service/>} />
        <Route  path="/Cart" element={<Cart/>} />
        <Route  path="/Orderstatus" element={<Orderstatus/>} />
        {/* in sub route not use "/" before giving path */}
        <Route  path="Seller" element={<Seller/>} >
          <Route  path="Home" element={<Home/>} />
          <Route  path="Display" element={<Display/>} />
          <Route  path="DisplayItem" element={<Displayitem/>} />
          <Route  path="UpdatePhoto" element={<Updatephoto/>} />
          <Route  path="UpdateDetail" element={<Updatedetail/>} />
          <Route  path="AddItem" element={<Additem/>} >
            <Route  path="Step1" element={<Sellerstep1/>} />
            <Route  path="Step2" element={<Sellerstep2/>} />
          </Route>
        </Route>
        <Route  path="Delivery" element={<Delivery/>} >
          <Route  path="Home" element={<Homed/>} />
          <Route  path="Order" element={<Order/>} />
          <Route  path="Orderdetail" element={<Orderdetail/>} />
        </Route>
          <Route  path="login" element={<Login/ >}>
              <Route  path='customerlogin' element={<CustomerLogin  setLoginUser={setLoginUser} / >} />
              <Route  path='sellerlogin' element={<SellerLogin/ >} />
              <Route  path='deliverymanlogin' element={<DeliveryLogin/ >} />                
          </Route>
          <Route  path="signup" element={<Signup/ >}>
              <Route  path='customersignup' element={<CustomerSignup setalert={setalert}  / >} />
              <Route  path='sellersignup' element={<SellerSignup1/ >} />
              <Route  path='deliverymansignup' element={<DeliverySignup1 setalert={setalert} / >} />  
          </Route>
      </Routes>   
      <Outlet/>
    </div>
      <div >
      <Footer></Footer>
      <button onClick={()=>{setalert({msg:"done bhai done",type:"success"}); console.log(alert);}}>898</button>
      </div>
    </Router>
    </>
  );
}

export default App;

