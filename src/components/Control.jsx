import React, { Component } from 'react';

class Control extends Component {
    render() {
        // alert(this.props.mode)
        return (
            <ul className="control-list">
                <li><a href="create" className="button" onClick={e => {
                    this.props.onClick('CREATE')
                    e.preventDefault()
                }}>create</a></li>
                {(this.props.mode !== 'WELCOME' && this.props.selectedId !== 0) &&
                    <>
                        <li><a href="update" className="button" onClick={e => {
                            this.props.onClick('UPDATE')
                            e.preventDefault()
                        }}>update</a></li>
                        <li><button className="button-delete" onClick={e => {
                            // 삭제는 a href 로 구현하면 안된다.
                            this.props.onClick('DELETE_PROCESS')
                            e.preventDefault()
                        }}>delete</button></li>
                    </>
                }

            </ul>
        );
    }
}

export default Control;