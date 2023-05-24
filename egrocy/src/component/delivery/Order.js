import React from 'react';

const Order = () => {
    const orders = [
        {
          id: 1,
          customerName: 'John Doe',
          sellerAddress: '123 Main St, City A',
          customerAddress: '456 Elm St, City B',
        },
        {
          id: 2,
          customerName: 'Jane Smith',
          sellerAddress: '789 Oak St, City C',
          customerAddress: '987 Pine St, City D',
        },
        // Add more orders as needed
      ];
    
    

      return (
        <div className="container mb-5">
          <h2 className="text-center">List of Orders</h2>
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <ul className="list-group">
                {orders.map((order) => (
                  <li key={order.id} className="list-group-item">
                    <div>
                      <strong>Order ID:</strong> {order.id}
                    </div>
                    <div>
                      <strong>Customer:</strong> {order.customerName}
                    </div>
                    <div>
                      <strong>Seller Address:</strong> {order.sellerAddress}
                    </div>
                    <div>
                      <strong>Customer Address:</strong> {order.customerAddress}
                    </div>
                    <button
                      className="btn btn-primary mt-2"
                      onClick={() => {}}
                    >
                      Select Order
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      );
    };
    

export default Order;