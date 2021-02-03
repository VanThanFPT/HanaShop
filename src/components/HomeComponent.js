import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';

class Home extends Component{
 
   constructor(props){
   	 super(props);
   }
   render(){
    const menu = this.props.dishes.map((dish) => {
        return(
            <Card>
            <CardImg src={dish.image} alt={dish.name} />
            <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
            </CardBody>
            </Card>
       );
    });

    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                  {menu}
                </div>
           
            </div>
        </div>
    );
  }
}

export default Home;