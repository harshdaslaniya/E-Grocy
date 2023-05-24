import React, { useState } from 'react';

const Orderdetail = () => {
    const order = 
        {
          id: 1,
          customerName: 'John Doe',
          sellerAddress: '123 Main St, City A',
          customerAddress: '456 Elm St, City B',
        }
    
    const [sellerOTP, setSellerOTP] = useState('');
    const [customerOTP, setCustomerOTP] = useState('');
  
    const handleSellerOTPChange = (e) => {
      setSellerOTP(e.target.value);
    };
  
    const handleCustomerOTPChange = (e) => {
      setCustomerOTP(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Perform verification logic here with the sellerOTP and customerOTP
      console.log('Seller OTP:', sellerOTP);
      console.log('Customer OTP:', customerOTP);
    };
  
    return (
      <div className="container mb-5">
        <h1 className="text-center">Order Details</h1>
        <div className="row mb-5">
          <div className="col-md-6 offset-md-3">
            <h3>Order ID: {order.id}</h3>
            <div>
              <strong>Customer:</strong> {order.customerName}
            </div>
            <div>
              <strong>Seller Address:</strong> {order.sellerAddress}
            </div>
            <div>
              <strong>Customer Address:</strong> {order.customerAddress}
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group mt-3">
                <label htmlFor="seller-otp">Seller OTP:</label>
                <input
                  type="text"
                  className="form-control"
                  id="seller-otp"
                  value={sellerOTP}
                  onChange={handleSellerOTPChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary mt-2">
                Verify OTPs
              </button>
              <div className="form-group mt-3">
                <label htmlFor="customer-otp">Customer OTP:</label>
                <input
                  type="text"
                  className="form-control"
                  id="customer-otp"
                  value={customerOTP}
                  onChange={handleCustomerOTPChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary mt-2">
                Verify OTPs
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  

export default Orderdetail;