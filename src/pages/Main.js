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
                    <meta charset="UTF-8"/>
                    <title>
                        ARRAY[] | MAIN
                    </title>
                </Helmet>
                <body>
                <div class="image"/>
                <img src="1.jpg"/>
                <div>환영합니다</div>
                </body>
            </div>
        );
    }
}

export default Main;