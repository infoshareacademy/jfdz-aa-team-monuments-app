import React from 'react'

export default class MonumentsList extends React.Component {

    constructor(props) {
        super(props);

        this.onClickChange = this.onClickChange.bind(this);
        
        this.state = {
            title: "Lista Zabytków Gdańska",
            paragraph: "Sample Paragraph Element"
        };
    }

    onClickChange() {
       this.setState({
           paragraph: "Witamy w Gdańsku"
       })
    }

    
    render() {
        return (
         <div>
             <h3> {this.state.title} </h3>
             <p> {this.state.paragraph} </p>
             <button onClick={this.onClickChange.bind(this)}> Click to change paragraph </button>
         </div>
        )
    }
}