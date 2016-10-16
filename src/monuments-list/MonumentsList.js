import React from 'react'
import $ from 'jquery'
import {Grid} from 'react-bootstrap';
import './MonumentsList.css'

import List from './components/List'

export default class MonumentsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            monumentsData:[]
        }
    }

    componentWillMount () {
        var that = this;
        $.ajax({
            url: 'https://monuments-data.herokuapp.com/api/monuments',
            success: function(data) {return that.setState({ monumentsData: data}) },
            dataType: 'json'
        });
      }

    render() {
        return (
            <Grid>
                <List monumentsData={this.state.monumentsData}/>
                {this.props.children}
            </Grid>
        )
    }
}