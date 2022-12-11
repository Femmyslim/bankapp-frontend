import React from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

function SweetAlert({message, type}) {

    return (
      <div>
        <button onClick={() => this.setState({ show: true })}>Alert</button>
        <SweetAlert
          show={this.state.show}
          title="Demo"
          text="SweetAlert in React"
          onConfirm={() => this.setState({ show: false })}
        />
      </div>
    );
  }


  export default SweetAlert