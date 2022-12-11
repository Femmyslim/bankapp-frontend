import React from 'react';
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css';

function SweetAlert({message, type}) {
  //type 1=success and 0=error

    return (
      <div>
        <button onClick={() => this.setState({ show: true })}>Alert</button>
        <SweetAlert
          icon={type ===0 ? "error" : "success"}
          show={true}
          title={type ===0 ? "error" : "success"}
          text={message}
        />
      </div>
    );
  }


  export default SweetAlert