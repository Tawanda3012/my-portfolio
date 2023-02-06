import React from 'react'
import Mails from '../../assets/Home/mailz.png'
import Footer from '../Home/Footer/Footer'
import Form from './Form'


function Contact() {
  return (
    <div className='container'>
        <div className="contact">
            <h3>Contact Me</h3>
            <p>Lets Keep in Touch</p>
            <div className="con">
                <div className="row">
                    <div className="col-md-6">
                        <div className="con-text">
                            <p>Get in Touch</p>
                        </div>
                        <div className="con-icon">
                        <i className="fa fa-google-plus-square"></i>
                        <i className="fa fa-github-square"></i>
                        <i className="fa fa-facebook-square"></i>
                        <i className="fa fa-instagram"></i>
                        <i className="fa fa-linkedin"></i>
                        </div>
                        <div className="con-img">
                        <p>Send Your Email Here!</p>
                        <img src={Mails} className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                         <Form/>
                    </div>
                </div>
               <Footer/>
            </div>
        </div>

    </div>
  )
}

export default Contact

