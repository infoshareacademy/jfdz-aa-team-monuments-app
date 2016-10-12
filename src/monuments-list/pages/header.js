import React from 'react'

export default class Header extends React.Component {
    handleClick(){
        this.props.onClickShowList();
    }
    
    render() {
        return (
            <div>
                <h3> {this.props.title} </h3>
                <p> {this.props.paragraph} </p>
                <button onClick={this.handleClick.bind(this)}> Click here to see full list </button>
            </div>
        )
    }
}