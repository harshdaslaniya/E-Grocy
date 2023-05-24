import React from 'react';
import axios from 'axios';

function nothing(props){

  const handleSignup = async () => {

const user ="";
axios.post('http://localhost:8000/customer/signup', user)
  .then(response => {
    console.log('Success:', response.data);
    // Handle successful response
  })
  .catch(error => {
    if (error.response) {
      // The request was made and the server responded with a status code
      console.log('Error:', error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.log('No response from server:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error:', error.message);
    }
  });

  };

  return (
    <div>
      {/* Your component JSX */}
      <button onClick={handleSignup}>Signup</button>
      {/* Display the alert message */}
      {alert.type && alert.msg && (
        <div className={`alert ${alert.type}`}>{alert.msg}</div>
      )}
    </div>
  );
};
export default nothing;
