import React from "react";
import {RestaurantView } from './RestaurantView';
import './Home.css';

export class Home extends React.Component {

    render() {
        return (
            <div className="container-fluid Home"> 
                <h1> Welcome to Restaurant App</h1>
                <div className="row">
                    <RestaurantView/>
                </div>
            </div>
        )
    }

}

export default Home;