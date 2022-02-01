
import React, { Component } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const ContactForm = () => {

    return (
        <div className="contact-box">
            <div className="form">
                <TextField id="outlined-basic" label="Name" variant="outlined" className="textField" margin="normal" required/>
                <TextField id="outlined-basic" label="Title" variant="outlined" className="textField" margin="normal"/>
                <TextField id="outlined-basic" label="Company/Organization/Agency" variant="outlined" className="textField" margin="normal" required/>
                <TextField id="outlined-basic" label="Phone Number" variant="outlined" className="textField" margin="normal"/>
                <TextField id="outlined-basic" label="Email Address" variant="outlined" className="textField" margin="normal" required/>
                <TextField id="outlined-basic" label="Comments" ariant="outlined" className="textField" multiline minRows={6} margin="normal"/>
            </div>
            <Box textAlign='center'>
                <Button variant="contained" size="large" className="submitButton">Submit</Button>
            </Box>
        </div>
    );
  };

export default ContactForm;