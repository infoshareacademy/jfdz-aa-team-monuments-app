import React from 'react'
import { connect } from 'react-redux'
import { Grid } from 'react-bootstrap'
import './MonumentsList.css'

import Intro from './intro/Intro'
import UserMap from './user-map/UserMap'
import List from './list/List'

const mapStateToProps = (state) => ({
    displayingList: state.toggleMonumentsList.displayingList,
    monuments: state.monumentsListData.monuments,
})

const MonumentsList = ({displayingList, monuments}) => (
    <Grid>
        <Intro />
        <UserMap />
        <List />
    </Grid>
)

export default connect(mapStateToProps)(MonumentsList)
