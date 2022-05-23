import React from 'react'
import './Hero.css'
import {FaDatabase, FaAsterisk, FaAccusoft, FaFacebook, FaTwitter, FaGithub} from 'react-icons/fa'
export default function Hero() {
  return (
    <div className="hero">
        <div className="container">
            <div className="content">
                <div className="col-1">
                    <h1>Data to enrich your</h1>
                    <h1><span className="primary-color">online business</span></h1>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aspernatur quibusdam optio, excepturi amet quis maxime consectetur officiis tenetur impedit!
                    </p>
                    <div className="used-by">
                        <p>USED BY</p>
                        <div className="icons">
                            <i> <FaDatabase /> staxx</i>
                            <i> <FaAsterisk /> star AI </i>
                            <i> <FaAccusoft /> Accusoft </i>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <div className="form-layout">
                        <div className="form-container">
                        <div className="sign-in-text">
                            <div className="social-media">
                                <i> <FaFacebook size={20} /> </i>
                                <i> <FaTwitter size={20} /> </i>
                                <i> <FaGithub size={20} /> </i>
                            </div>
                            <div className="divider">
                                <p><span>or</span></p>
                            </div>
                            <form action=''>
                                <input type="text" placeholder='name' />
                                <input type="email" placeholder='Email' />
                                <input type="password" placeholder='password' />
                            </form>
                            <div className="form-footer">
                                <p>by signing up , you agree to our
                                    <span className="primary-color">Terms,Data policy</span>
                                    <span className="primary-color">Cookies policy</span>.
                                </p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
