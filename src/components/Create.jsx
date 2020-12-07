import React, { Component } from 'react';

class Create extends Component {
    render() {
        return (
            <form>
                <p><input type="text" name="title" placeholder="title" /></p>
                <p><input type="text" name="desc" placeholder="description" /></p>
                <p><button type="submit">제출</button></p>
            </form>

        );
    }
}

export default Create;