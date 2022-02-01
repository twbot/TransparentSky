
import React, { Component } from "react";


import ContactForm from './ContactForm';
import '../styling/Contact.css';

const Contact = () => {

  return (
    <div className="contact">
        <div className="contact-header">
          <p className="clip-text clip-text--cover clip-text-one">CONTACT US</p>
        </div>
        <ContactForm />
    </div>
  );
};

export default Contact;