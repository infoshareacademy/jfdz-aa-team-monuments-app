import React from 'react'
import { connect } from 'react-redux'
import { Grid } from 'react-bootstrap'
import './UserMonuments.css'

import UserList from './user-list/UserList'

const mapStateToProps = (state) => ({
    monuments: state.monumentsListData.monuments
})

const UserMonuments = ({
    monuments,
}) => (
    <Grid>
        <UserList monuments={monuments} />
    </Grid>
)

export default connect(mapStateToProps )(UserMonuments)