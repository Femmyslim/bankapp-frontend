import React from "react";
import logo from "../images/Kuda_logo.svg"



const Kuda = () => {


    function openAccount(){

       alert(`visit the next link`)
        
    }

    return(
        <div>

            <nav className="navbar navbar-light bg-light  mx-5 justify-content-between" >
                    <img src={logo} width="100" height="30" alt=""/>
                <button className="btn border border-3 dark solid px-2 rounded-3 text-primary solid"  type="submit" onClick={openAccount}>Open an Account</button>
            </nav>
        </div>
        
    )
}

export default Kuda