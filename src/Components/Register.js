import React from 'react';
import particlesConfig from "../particles.json";
import Particles from "react-tsparticles";
import Tesla from '../imgs/bg4.jpg';
import teslabg from '../imgs/logo.png';
import { Link } from "react-router-dom";

function Register() {
    return (
        <div>
            <img className="imgBG" src={Tesla}/>
            <main>
                <view className="box">
                <img className="imgT" src={teslabg}/>
                <h2>Register</h2>
                <form style={{flexDirection: "row", flex: 0.5}}>
                    <div className="inputBox">
                        <label htmlFor="userName">Username</label>
                        <input type="text" name="userName" id="userName" placeholder="" required/>
                    </div>
                    <div className="inputBox">
                        <label htmlFor="userPassword">Password</label>
                        <input type="password" name="userPassword" id="userPassword" placeholder=""
                               required/>
                    </div>
                    <div className="inputBox">
                        <label htmlFor="userConfirmPassword">Confirm Password</label>
                        <input type="password" name="userPassword" id="userConfirmPassword"
                               placeholder=""
                               required/>
                    </div>
                    <button type="submit" name="" style={{ float: "left" }}>Submit</button>
                    <Link className="button" to="/login" style={{ float: "left" }}>Login</Link>
                    <Link className="button" to="/home" style={{ float: "left" }}>Home</Link>
                </form>
                </view>
                
            </main>
            <footer>
            </footer>
        </div>
    );
}

export default Register;