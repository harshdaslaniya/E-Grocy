import React from 'react';

const Toast = (props) => {
//   const toastRef = useRef(null);
//   const [isToastOpen, setIsToastOpen] = useState(false);

//   const showAndHideToast = () => {
//     setIsToastOpen(true);

//     const toastElement = toastRef.current;
//     if (toastElement) {
//       const bootstrapToast = new window.bootstrap.Toast(toastElement);

//       bootstrapToast.show();

//       setTimeout(() => {
//         bootstrapToast.hide();
//         setTimeout(() => {
//           setIsToastOpen(false);
//         }, 300); // Delay before setting isToastOpen to false
//       }, 2000);

//       setIsToastOpen(true);
//     }
//   };

//   if (showToast && !isToastOpen) {
//     showAndHideToast();
//   }

  return (
    <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <strong class="me-auto">Bootstrap</strong>
      <small class="text-muted">11 mins ago</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
  </div>
  );
};

export default  Toast;
