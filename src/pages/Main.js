import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import imgA from './1.jpg';


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
                    <meta charset="UTF-8"/>
                    <title>
                        ARRAY[] | MAIN
                    </title>
                </Helmet>
                <h1>환영합니다</h1>
                <h1>TEAM-ARRAY[]는 생각보다 엄청나답니다</h1>
                <img src={imgA} width="100" height="100" alt="test"/>
            </div>
        );
    }
}

export default Main;