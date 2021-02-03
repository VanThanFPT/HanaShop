import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label,  Col, Row } from 'reactstrap';
import {Control, LocalForm, Errors} from 'react-redux-form';
class Contact extends Component{
 constructor(props) {
        super(props);


        this.handleSubmit = this.handleSubmit.bind(this);
   
      
}

handleSubmit=(event)=>{
     console.log("current state:" + JSON.stringify(this.state))
     event.preventDefault();

}






render() {
   const required = (val) => val && val.length;
   const maxLength = (len) => (val) => !(val) || (val.length <= len);
   const minLength = (len) => (val) => val && (val.length >= len);
   const isNumber = (val) => !isNaN(Number(val));
   const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
    return(
        <div className="container">
        
                    <LocalForm onSubmit={(values) =>this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                      />
                                      <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                      />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        className="form-control"
                                         validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                       />
                                    <Errors
                                        className="text-danger"
                                        model=".lastname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" id="telnum" name="telnum"
                                        placeholder="Tel. Number"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                                        }}
                                        />
                                    
                                    <Errors
                                        className="text-danger"
                                        model=".telnum"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 numbers',
                                            maxLength: 'Must be 15 numbers or less',
                                            isNumber: 'Must be a number'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control"
                                         validators={{
                                            required, validEmail
                                        }}
                                       />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid Email Address'
                                        }}
                                     />
                                </Col>
                            </Row>
                             <Row className="form-group">
                               
                                <Col md={10}>
                                    <Button type="submit">submit</Button>
                                </Col>
                            </Row>
               </LocalForm>
           
        </div>
    );
 }

}
export default Contact;