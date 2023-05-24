import React from 'react'

function Alerts(props) {
  return (
      props.alert && <div className={`alert mb-0 alert-${props.alert.type} alert-dismissible fade show`}  role="alert">
        <strong>{props.alert.type === "success" ? 'Successfully:':''}{props.alert.type === "danger" ? 'Warning':''} :-</strong>  {props.alert.msg}
    </div>
        
  )
}

export default Alerts