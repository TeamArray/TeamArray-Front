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
            <div>
                <Helmet>
                    <title>
                        ARRAY[] | MAIN
                    </title>
                </Helmet>
                <h1>
                    환영합니다!
                </h1>
            </div>
        );
    }
}

export default Main;