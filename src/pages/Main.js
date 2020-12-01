import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        return (
            <div className="Main">
                <Helmet>
                    <meta charset="UTF-8"/>
                    <title>
                        ARRAY[] | MAIN
                    </title>
                </Helmet>
                <img src="1.png" alt=""></img>
            </div>
        );
    }
}

export default Main;