import React from 'react'
import $ from 'jquery'
import {Grid} from 'react-bootstrap';

import Header from './pages/Header'
import List from './pages/List'

export default class MonumentsList extends React.Component {
    componentWillMount () {
        var that = this;
        $.ajax({
            url: 'https://monuments-data.herokuapp.com/api/monuments',
            success: function(data) {return that.setState({ monumentsData: data}) },
            dataType: 'json'
        });
      }

    constructor(props) {
        super(props);
        this.onClickShowList = this.onClickShowList.bind(this);
        
        this.state = {
            title: "Lista Zabytków Gdańska",
            paragraph: "Chcesz zobaczyć listę gdańskich zabytków?",
            monumentsData:[]
        }
    }

    onClickShowList() {
       this.setState({
           paragraph: "A kto by nie chciał?"
       })
    }

    render() {
        return (
            <Grid>
                <Header title={this.state.title} paragraph={this.state.paragraph} onClickShowList={this.onClickShowList.bind(this)}/>
                <List monumentsData={this.state.monumentsData}/>
                {this.props.children}
            </Grid>
        )
    }
}