
import React from 'react'
import PropTypes from 'prop-types';

export class RestaurantView extends React.Component {

        constructor(props){
            super(props);
            console.log("restaurant view constructor");
            this.state = {
                restaurants : [],
                isLoaded : false
            }
        }

        componentDidMount() {
            console.log(" mount function called");
            this.getRestaurants();
        }

        getRestaurants() {
            
            console.log("fetching the restaurants ");
            fetch("http://localhost:8080/restaurants")
                .then(response =>  response.json())
                .then( response => {
                    console.log("got response from restaurants api "+JSON.stringify(response));
                    this.setState({
                        restaurants : response
                    });
                })
        
        }

        render() {
            const isLoaded = this.state.isLoaded;
            const el=        
            <table className="table">
            <thead className="restaurant-view-thead">
                <tr>
                <th>Restaurant ID</th>
                <th>Restaurant Name</th>
                <th>Location</th>
                </tr>
            </thead>
            <tbody className="restaurant-view-tbody">
            {this.state.restaurants.map( (restaurant,index) => {
                
                return (<tr key={index} className={"restaurant-" + (index + 1)}>
                    <td>{restaurant.restaurantId}</td>
                    <td>{restaurant.restaurantName}</td>
                    <td>{restaurant.location}</td>      
                </tr>)
            })}                      
            </tbody>
            </table>;
            return (  
                
               
                <div className="restaurants-view">
                    <h2>Restaurants</h2>    
                    {isLoaded}{
                     <div>HELLO </div>
                    }
                 </div>
                
            )
        }

}

RestaurantView.protoTypes = {
   restaurantId: PropTypes.number,
    restaurantName: PropTypes.string,
    location: PropTypes.string
};
