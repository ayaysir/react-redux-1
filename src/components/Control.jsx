import React, { Component } from 'react';

class Control extends Component {
    render() {
        // alert(this.props.mode)
        return (
            <ul className="control-list">
                <li><button className="button" onClick={e => {
                    this.props.onClick('CREATE')
                    e.preventDefault()
                }}>create</button></li>
                {(this.props.mode !== 'WELCOME' && this.props.selectedId !== 0) &&
                    <>
                        <li><button className="button" onClick={e => {
                            this.props.onClick('UPDATE')
                            e.preventDefault()
                        }}>update</button></li>
                        <li><button className="button delete" onClick={e => {
                            // 생성, 업데이트는 a href 구현이 가능하나 삭제는 a href 로 구현하면 안된다.
                            // 어차피 이벤트를 사용할거면 버튼을 쓰는게 나으므로 셋 다 버튼으로 통일
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