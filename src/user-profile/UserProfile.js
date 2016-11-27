import React from 'react'
import { Grid } from 'react-bootstrap'
import { connect } from 'react-redux'
import './UserProfile.css'

import Info from './info/Info'
import UserMonumentsInfo from './user-monuments-info/UserMonumentsInfo'

const mapStateToProps = (state) => ({
    firstName: state.login.userData.firstName,
    lastName: state.login.userData.lastName,
    userImage: state.login.userData.userImage,
    userId: state.login.userData.userId,
    userMonuments: state.login.userData.userMonuments,
    visitedMonuments: state.login.userData.visitedMonuments,
    monuments: state.monumentsListData.monuments
})

const UserProfile = ({
    firstName,
    lastName,
    userImage,
    userId,
    monuments,
    visitedMonuments
}) => (
    <Grid className="user-profile">
        <h3 className="user-profile-header" >Profil użytkownika</h3>
        <Info firstName={firstName} lastName={lastName} userImage={userImage} userId={userId} />
        <hr/>
        <UserMonumentsInfo monuments={monuments} visitedMonuments={visitedMonuments}/>
    </Grid>
)

export default connect(mapStateToProps)(UserProfile)
