import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
  function Toast({type, message}){
    const notify = () => {
        if(type === "error"){
            toast(message)
        }else {
            toast(message)
        }
    }
    return (<div>{notify}</div>)
  }


  export default Toast