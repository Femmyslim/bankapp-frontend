import React from "react"
import Kuda from "./Kuda";
import World from "../images/Kuda_world.svg"
import "../css/App.css"




const Home = ()=>{

    return(
        <>
            <Kuda />
    

               <div className="container-fluid d-flex justify-content-between">
                  <div>
                        <div className="p-class border border-2 text-purple">
                            <p>Please check that you are visiting the correct URL <a className="text-green" href="https://app.kuda.com">https://app.kuda.com</a></p>
                        </div>
                        <div className="form border border-1 rounded-2">
                            <h2> Sign In to Kuda</h2>
                            <div className= "card-body">
                                <p id="p-class2">To sign in, please type in the email address linked to your Kuda account.</p>
                                <form action="">
                                    <div id="email">
                                    <label htmlFor="Email Address">Email Address</label>
                                    <br />
                                    <input type="text" id="Email Address" placeholder="example@gmail.com" required />
                                    </div>
                                    <div id="password">
                                    <label htmlFor="Password">Password</label>
                                    <br />
                                    <input type="Password" name="" id="Password" placeholder="********" required />
                                    </div>
                                    <span>Forgot Password? <a href="">Reset it</a></span>
                                    <button className="btn1 border border-2 dark rounded-4">Sign In</button>
                                    <span>If you don't have a Kuda account, download the app <a href="">here</a> and open an account in a few minutes.</span>
                                </form>
                            </div>
                        </div>
                    </div>  

                    <div className="image">
                        <img src={World} alt="" />
                    </div> 

                </div>

                
                
                
        </>    
    )
}

export default Home