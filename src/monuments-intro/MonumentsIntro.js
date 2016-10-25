import React from 'react'
import { connect } from 'react-redux'
import { showMonumentsList, hideMonumentsList } from './actionCreators'

import {Grid , Row , Col, Button} from 'react-bootstrap'
import { Link } from 'react-router'
import './MonumentsIntro.css'

const mapStateToProps = (state) => ({
    displayingList: state.toggleMonumentsList.displayingList,
})

const mapDispatchToProps = (dispatch) => ({
    showList: () => dispatch(showMonumentsList()),
    hideList: () => dispatch(hideMonumentsList())
})

const MonumentsIntro = ({displayingList, showList, hideList}) => (
    <Grid>
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
    </Grid>
)

// const mapDispatchToProps = (dispatch) => ({
//     increment: (value) => dispatch(increment(value)),
//     decrement: (value) => dispatch(decrement(value))
// })
//
// export default class MonumentsIntro extends React.Component {
//     constructor(props) {
//         super(props);
//         this.onClickShowList = this.onClickShowList.bind(this);
//
//         this.state = {
//             displayList: true,
//             buttonText: "Pokaż Listę",
//             buttonUrl:"/show-list"
//         }
//     }
//
//     onClickShowList() {
//         this.state.displayList
//             ? this.setState( { displayList: false, buttonText: "Ukryj Listę", buttonUrl:"/list" })
//             : this.setState({ displayList: true, buttonText: "Pokaż listę", buttonUrl:"/show-list" })
//     }
//
//     render() {
//         console.log(this.props.children)
//         return (
//             <Grid>
//                 <Row className="show-grid">
//                     <Col xs={12} className="monuments-list-header">
//                         <h3> Lista Zabytków Gdańska </h3>
//                         <p> Chcesz zobaczyć listę gdańskich zabytków? </p>
//                         <Link to={this.state.buttonUrl}>
//                             <p><Button onClick={this.onClickShowList}> {this.state.buttonText}</Button></p>
//                         </Link>
//                         <Link to={this.props.children !== null ? '/list' : '/show-list'}>
//                             {this.props.children !== null ? 'Ukryj' : 'Pokaż'}
//                             </Link>
//                         {this.props.children}
//                     </Col>
//                 </Row>
//             </Grid>
//         )
//     }
// }

export default connect(mapStateToProps, mapDispatchToProps)(MonumentsIntro)