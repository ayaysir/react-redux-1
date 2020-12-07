import React, { Component } from 'react';

class Control extends Component {
    render() {
        return (
            <ul>
                <li><a href="create" onClick={e => {
                    this.props.onClick('CREATE')
                    e.preventDefault()
                }}>create</a></li>
                <li><a href="update" onClick={e => {
                    this.props.onClick('UPDATE')
                    e.preventDefault()
                }}>update</a></li>
                <li><button onClick={e => {
                    // 삭제는 a href 로 구현하면 안된다.
                    this.props.onClick('DELETE')
                    e.preventDefault()
                }}>delete</button></li>
            </ul>
        );
    }
}

export default Control;