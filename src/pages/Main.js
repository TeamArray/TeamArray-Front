import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import array from './1.png'; 
import add from './2.PNG';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

 
import './Main.css';

 

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        return (
            <div className="page">
                <Helmet>
                    <title>
                        ARRAY[] | MAIN
                    </title>
                </Helmet>
                <h2 className="text">환영합니다</h2>
                <h1 className="text">TEAM-ARRAY[]는 생각보다...</h1><img src={array} alt="array" />;  <img src={add} alt="add" />;
                </div>
        );
    }
}

export default Main;