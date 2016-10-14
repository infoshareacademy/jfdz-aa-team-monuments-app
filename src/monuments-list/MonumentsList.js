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
        
        this.state = {
            monumentsData:[]
        }
    }

    render() {
        return (
            <Grid>
                <Header/>
                <List monumentsData={this.state.monumentsData}/>
                {this.props.children}
            </Grid>
        )
    }
}