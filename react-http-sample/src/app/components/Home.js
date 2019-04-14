import React from 'react'
import { RestaurantView } from './RestaurantView'

export class Home extends React.Component {
    

    constructor(props){
        super(props);
        console.log("Home constructor is invoked");
        this.state ={
            isLoaded: false
        }
        this.handleViewRestaurants= this.handleViewRestaurants.bind(this);
    }

    handleViewRestaurants(props) {
        console.log("view restaurants clicked");
        this.setState({isLoaded : true});
    }

    render() {
       
        var isLoaded = this.props.isLoaded;
        console.log("render is invoked "+isLoaded);
        return (
            <div className="home">
                <button type="button" onClick = {this.handleViewRestaurants} className="btn btn-outline-primary">View Restaurants</button>
                <RestaurantView isLoaded={isLoaded}/>
            </div>
        )
    }
}