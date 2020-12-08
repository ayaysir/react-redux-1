import React, { Component } from 'react';

class Nav extends Component {
    render() {

        const tags = []
        // console.log(this)
        for(let data of this.props.data) {
            tags.push(<li key={data.id}><a href="/#" data-id={data.id} onClick={e => {
                // alert(data.id)
                // console.log("inner this", this, this.props, this.props.onClick)
                this.props.onClick(+e.target.dataset.id)
            }}>{data.title}</a></li>)
        }

        return (
            <nav>
                <ol>
                    {tags}
                </ol>
            </nav>
        );
    }
}

export default Nav;