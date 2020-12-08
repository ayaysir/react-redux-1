import React, { Component } from 'react';

class Create extends Component {
    render() {
        return (
            <form onSubmit={e => {
                e.preventDefault()
                this.props.onSubmit(
                    e.target.title.value,
                    e.target.desc.value
                )
            }}>
                <p><input type="text" name="title" placeholder="title" /></p>
                <p><input type="text" name="desc" placeholder="description" /></p>
                <p><button>제출</button></p>
            </form>

        );
    }
}

export default Create;