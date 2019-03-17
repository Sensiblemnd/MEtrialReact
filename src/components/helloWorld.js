

import React from 'react';

export default class HelloWorld extends React.Component {
    constructor(props){
        super(props);
        this.state = { name:'sdfsdf' };
    }

    render() {
        return (
            <div>
                Hello { this.state.name }!
            </div>
        );
    }
}