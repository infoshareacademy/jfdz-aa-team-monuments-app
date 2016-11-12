import React from 'react'
import { connect } from 'react-redux'
import { Grid } from 'react-bootstrap'
import './UserMonuments.css'

import Filters from './filters/Filters'
import UserList from './user-list/UserList'

const mapStateToProps = (state) => ({
    monuments: state.monumentsListData.monuments,
    currentList: state.monumentsFilter.currentList
})

const UserMonuments = ({
    monuments,
    currentList,
}) => (
    <Grid>
        <Filters />
        <UserList currentList={currentList} />
    </Grid>
)

export default connect(mapStateToProps )(UserMonuments)