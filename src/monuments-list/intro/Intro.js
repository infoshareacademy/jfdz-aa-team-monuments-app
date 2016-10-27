import React from 'react'
import { connect } from 'react-redux'
import { showMonumentsList, hideMonumentsList } from './actionCreators'
import { Row , Col, Button} from 'react-bootstrap'
import './Intro.css'

const mapStateToProps = (state) => ({
    displayingList: state.toggleMonumentsList.displayingList
})

const mapDispatchToProps = (dispatch) => ({
    showList: () => dispatch(showMonumentsList()),
    hideList: () => dispatch(hideMonumentsList())
})

const Intro = ({displayingList, showList, hideList}) => (

        <Row className="show-grid">
            <Col xs={12} className="monuments-list-header">
                <h3> Lista Zabytków Gdańska </h3>
                <p> Chcesz zobaczyć listę gdańskich zabytków? </p>
                <p>
                    <Button onClick={() => !displayingList ? showList() : hideList()}>
                    {!displayingList ? 'Pokaż listę' : 'Ukryj listę'}
                    </Button>
                </p>
            </Col>
        </Row>
  
)

export default connect(mapStateToProps, mapDispatchToProps)(Intro)