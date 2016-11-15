import React from 'react'
import { connect } from 'react-redux'
import { showAllMonuments , showUserMonuments, showVisitedMonuments } from './actionCreators'
import { Row , Button } from 'react-bootstrap'
import './Filters.css'

const mapStateToProps = (state) => ({
    monuments: state.monumentsListData.monuments,
    userMonuments: state.login.userData.userMonuments,
    visitedMonuments: state.login.userData.visitedMonuments
})

const mapDispatchToProps = (dispatch)=> ({
    showAllMonuments: (monuments) => dispatch (showAllMonuments(monuments) ),
    showUserMonuments: (monuments , userMonuments) => dispatch (showUserMonuments(monuments , userMonuments) ),
    showVisitedMonuments: (monuments, visitedMonuments) => dispatch (showVisitedMonuments(monuments, visitedMonuments) )

})

const Filters = ({
    monuments,
    userMonuments,
    visitedMonuments,
    showAllMonuments,
    showUserMonuments,
    showVisitedMonuments
}) => (
    <Row className="show-grid filter-buttons"  >
        <Button onClick={()=> showAllMonuments(monuments) } >All</Button>
        <Button onClick={()=> showUserMonuments(monuments , userMonuments) } >My List</Button>
        <Button onClick={()=> showVisitedMonuments(monuments, visitedMonuments) } >Visited</Button>
    </Row>
)

export default connect(mapStateToProps, mapDispatchToProps)(Filters)