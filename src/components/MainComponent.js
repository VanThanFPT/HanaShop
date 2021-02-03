import React, {Component} from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import {DISHES} from '../Data/data';
import {Switch, Route, Redirect, withRouter, BrowserRouter} from 'react-router-dom';

class Main extends Component  {

  constructor(props) {
    super(props);
    this.state={
      dishes: DISHES
    }
  }


  
  render() {
    const HomePage = () => {
      return(
           <Home dishes={this.state.dishes} />
      );
    }
    const ContactPage = () => {
      return(
           <Contact/>
      );
    }
   return (

    <div className="App">
    
       <Header/>
        <BrowserRouter>
       <Switch>
        <Route exac path="/home" component={HomePage}/> 
        <Route exac path="/contact" component={ContactPage}/> 
        <Redirect to="/home" />
        </Switch>
        </BrowserRouter>
       <Footer/>
    
     </div>

  );
  }
}

export default Main;