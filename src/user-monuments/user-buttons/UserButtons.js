import React from 'react'
import { connect}  from 'react-redux'
import { updateUserData } from '../../login/actionCreators'
import { Button , Glyphicon } from 'react-bootstrap'
import './UserButtons.css'

const mapStateToProps = (state)=> ({
    userMonuments: state.login.userData.userMonuments,
    visitedMonuments: state.login.userData.visitedMonuments,
    userId: state.login.userData.userId
})

const mapDispatchToProps = (dispatch)=> ({
    addMonument: (userId, monumentId, monuments) => {
        let newMonumentsList = monuments.indexOf(monumentId.toString()) === -1 ? monuments.concat([monumentId]) : console.log('Already on your list');
        let userData = {
            userMonuments: newMonumentsList
        };
        dispatch(updateUserData(userId, userData));
    },
    removeMonument: (userId, monumentId, monuments) => {
        let newMonumentsList = monuments.filter(monument=> monument !== monumentId.toString());
        let userData = {
            userMonuments: newMonumentsList
        };
        dispatch(updateUserData(userId, userData));
    },

    addToVisited: (userId, monumentId, monuments) => {
        let newMonumentsList =
            monuments.indexOf(monumentId.toString()) === -1
                ? monuments.concat([monumentId])
                : monuments.filter(monument=> monument !== monumentId.toString());
        let userData = {
            visitedMonuments: newMonumentsList
        };
        dispatch(updateUserData(userId, userData));
    }
})

const UserButtons = ({
    userId,
    userMonuments,
    visitedMonuments,
    currentMonumentId,
    addMonument,
    removeMonument,
    addToVisited
})=> (
    <div>
        <Button className="monument-user-buttons" bsStyle="warning" onClick={() => addMonument(userId, currentMonumentId, userMonuments) } >
            <Glyphicon glyph="plus" />
        </Button>
            
        <Button className="monument-user-buttons" bsStyle="info" onClick={() => removeMonument(userId, currentMonumentId, userMonuments) } >
            <Glyphicon glyph="minus" />
        </Button>
    
        <Button className="monument-user-buttons" bsStyle={visitedMonuments.indexOf(currentMonumentId.toString())=== -1 ? "default" : "success" } onClick={() => addToVisited(userId, currentMonumentId, visitedMonuments) } >
            <Glyphicon glyph="ok" />
        </Button>
    </div>
    
)

export default connect (mapStateToProps, mapDispatchToProps)(UserButtons)