import React from 'react';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const Contact = () => {
    return (
        <>
            <div className="container mt-2">
                <div className="row">
                    <h1 className="text-center font-weight-bold">Contact Us</h1>
                    <hr />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-10 col-md-6 mx-auto text-center">
                            <h3><AccountCircleIcon />Kaushik Kumar(Director)</h3>
                            <h3>GST (06BUBPK8631D1ZV)</h3>
                            <hr />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-10 col-md-6 mx-auto text-center">
                            <h2>Address</h2>
                            <p><HomeIcon /># 757, New Dilipgrah Googamadi Road,<br />Post-Office: Babyal,<br />Ambala Cantt, State-Haryana<br />Pin 133005</p>
                            <hr />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-10 col-md-6 mx-auto text-center">
                            <h2>Contact Number</h2>
                            <h4><WhatsAppIcon color='Success' />+91-9466636660</h4>
                            <h4><PhoneIcon />+91-8037234221</h4>
                            <hr />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-10 col-md-6 mx-auto text-center">
                            <h2>Email</h2>
                            <h4><EmailIcon />atharventerprises16@gmail.com</h4>
                            <hr />
                        </div>
                    </div>
                </div>
                </div>

               
            
        </>
    )
};

export default Contact;
