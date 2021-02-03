import React, {Component} from 'react';


import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label,  Col, Row } from 'reactstrap';    
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
     Modal, ModalHeader, ModalBody,
     Input } from 'reactstrap';
import {Control, LocalForm, Errors} from 'react-redux-form';
import {NavLink} from 'react-router-dom';
import {Link, BrowserRouter} from 'react-router-dom';


class Header extends Component
{
	constructor(props){
		super(props);
		 this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
		this.toggleNav=this.toggleNav.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
    handleSubmit=(event)=>{
     console.log("current state:" + JSON.stringify(this.state))
     event.preventDefault();

}
    toggleNav(){

    	this.setState(  { isNavOpen: !this.state.isNavOpen});
    }


    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }
	render(){
 const required = (val) => val && val.length;
   const maxLength = (len) => (val) => !(val) || (val.length <= len);
   const minLength = (len) => (val) => val && (val.length >= len);
   const isNumber = (val) => !isNaN(Number(val));
   const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
		return (
            <>
		      
		        	<div className="header">
		        		<div className="row row-header">
		        			<div className="col-12 col-sm-6">
		        			
		        				<h1>Hello from My restaurant</h1>
		        		<BrowserRouter>		
		        	    <Nav navbar>
		           		<NavItem>
		           			<NavLink className="nav-link" to="/home">
		           			  <span className="fa fa-home fa-lg">Home</span>
		           			</NavLink>		           			
		           		</NavItem>
		             	<NavItem>
		           			<NavLink className="nav-link" to="/contact">
		           			  <span className="fa fa-address-card fa-lg">Contact Us</span>
		           			</NavLink>		           			
		           		</NavItem>
		           		<NavItem>
		           				<LocalForm>
		        				  <Row className="form-group">
                                    <Col md={10}>
                                    <Control.text model=".keyword" id="keyword" name="keywork"
                                        placeholder="Search...."
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(1), maxLength: maxLength(15)
                                        }}
                                      />
                                      <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 1 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                      />
                                </Col>
                                 <Col md={10}>
                                    <Button type="submit">go</Button>
                                </Col>
                            </Row>
                          
		        			</LocalForm>            			
		           		</NavItem>
		           </Nav>
		           </BrowserRouter>
		        				 
		        			    
		        			</div>
		        		</div>
		        	</div>
		     
          
		    </>    
			);
	}
}
export default Header;