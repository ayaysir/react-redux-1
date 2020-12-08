import React, { Component } from 'react';

class Update extends Component {
    state = {
        title: this.props.title,
        desc: this.props.desc,
        id: this.props.id,
    }

    onChangeHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        if(this.state.id === 0) {
            return null
        }
        return (
            <form onSubmit={e => {
                e.preventDefault()
                this.props.onSubmit(
                    Number(e.target.id.value),
                    e.target.title.value,
                    e.target.desc.value
                )
            }}>
                <input type="hidden" name="id" value={this.state.id} />
                <p><input 
                    type="text" 
                    name="title" 
                    onChange={this.onChangeHandler.bind(this)} 
                    placeholder="title" 
                    value={this.state.title} 
                /></p>
                <p><input 
                    type="text" 
                    name="desc" 
                    onChange={this.onChangeHandler.bind(this)} 
                    placeholder="description" 
                    value={this.state.desc} /></p>
                <p><button>제출</button></p>
            </form>

        );
    }
}

export default Update;