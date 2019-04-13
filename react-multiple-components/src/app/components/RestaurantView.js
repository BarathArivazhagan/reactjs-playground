import React from "react"
import './RestaurantView.css'

export class RestaurantView extends React.Component{

    constructor(props){
        super(props);        
    }

    render() {

        let restaurants = [];
        return (
            <div className="restaurants-view">
                <h2>Restaurants</h2>            
                <table className="table">
                <thead className="restaurant-view-thead">
                    <tr>
                    <th>Restaurant Name</th>
                    <th>Location</th>
                    </tr>
                </thead>
                <tbody className="restaurant-view-tbody">
                    <tr>
                    <td>Saravana Bhavan</td>
                    <td>Chennai</td>      
                    </tr>
                    <tr>
                    <td>Ratna Cafe</td>
                    <td>Bangalore</td>        
                    </tr>    
                </tbody>
                </table>
            </div>
        )
    }

}