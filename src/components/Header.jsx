import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <header className="title">
                <h1><a href="#welcome" onClick={() => 
                    this.props.onClick()
                }>WWW</a></h1>
                World Wide Web의 구성요소를 알아봅니다.
            </header>
        );
    }
}
