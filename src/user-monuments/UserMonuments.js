import React from 'react'
import { connect } from 'react-redux'
import { Grid } from 'react-bootstrap'
import './UserMonuments.css'

import Filters from './filters/Filters'
import UserList from './user-list/UserList'

const mapStateToProps = (state) => ({
    monuments: state.monumentsListData.monuments,
    currentFilter: state.monumentsFilter.currentFilter,
    userMonuments: state.login.userData.userMonuments,
    visitedMonuments: state.login.userData.visitedMonuments
})

const UserMonuments = ({
    monuments,
    currentList,
    currentFilter,
    userMonuments,
    visitedMonuments
}) => (
    <Grid>
        <Filters />
        <UserList currentFilter={currentFilter} monuments={monuments} userMonuments={userMonuments} visitedMonuments={visitedMonuments}/>
    </Grid>
)

export default connect(mapStateToProps )(UserMonuments)