import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <header>
                <h1><a href="#welcome" onClick={() => 
                    this.props.onClick()
                }>WEB</a></h1>
                World Wide Web
            </header>
        );
    }
}
