import React from 'react'
import { connect}  from 'react-redux'
import { updateUserData } from '../../login/actionCreators'
import { Button , Glyphicon } from 'react-bootstrap'
import './UserButtons.css'

const mapStateToProps = (state)=> ({
    userMonuments: state.login.userData.userMonuments,
    email: state.login.userData.userId
})

const mapDispatchToProps = (dispatch)=> ({
    addMonument: (email, monumentId, monuments) => {
        console.log('addMonument', email, monumentId, monuments);
        let newMonuments = monuments.concat([monumentId]);
        let userData = {
            userMonuments: newMonuments
        };
        dispatch(updateUserData(email, userData))
    }
})

const UserButtons = ({
    userMonuments,
    email,
    currentMonumentId,
    addMonument
})=> (
    <div>
        <Button className="monument-user-buttons" bsStyle ="warning" onClick={()=> addMonument(email, currentMonumentId, userMonuments) } >
            <Glyphicon glyph="plus" />
        </Button>
            
        <Button className="monument-user-buttons" bsStyle ="info" onClick={()=> console.log('Usuń') } >
            <Glyphicon glyph="minus" />
        </Button>
    
        <Button className="monument-user-buttons" bsStyle ="danger" onClick={()=> console.log('Ulubione') } >
            <Glyphicon glyph="ok" />
        </Button>
    </div>
    
)

export default connect (mapStateToProps, mapDispatchToProps)(UserButtons)