import React from 'react';
import particlesConfig from "../particles.json";
import Particles from "react-tsparticles";
import Tesla from '../imgs/bg4.jpg';
import teslabg from '../imgs/logo.png';
import { Link } from "react-router-dom";

function Login() {
    return (
        <div>
            <img className="imgBG" src={teslabg}/>
            <main className="box">
            <img className="imgT" src={teslabg}/>
                <h2>Login</h2>
                <form>
                    <div className="inputBox">
                        <label htmlFor="userName">Username</label>
                        <input type="text" name="userName" id="userName" placeholder="" required/>
                    </div>
                    <div className="inputBox">
                        <label htmlFor="userPassword">Password</label>
                        <input type="password" name="userPassword" id="userPassword" placeholder=""
                               required/>
                    </div>
                    <div>
                        <button type="submit" name="" style={{ float: "left" }}>Submit</button>
                        <Link className="button" to="/register" style={{ float: "left" }}>Register</Link>
                    </div>
                </form>
            </main>
            <footer>
            </footer>
        </div>
    );
}

export default Login;