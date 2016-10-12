import React from 'react'

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.onClickAddToMap = this.onClickAddToMap.bind(this)
    }

    onClickAddToMap(lon, lat) {
        alert("Lokalizacja zabytku: " + lon + " | "+ lat )
    }

    render() {
        return (
            <div>
                {this.props.monumentsData.map(
                    monument =>
                        <div key={monument.id}>
                            <h2> {monument.name} </h2>
                            <p> {monument.description} </p>
                            <button onClick={this.onClickAddToMap.bind(this,monument.lon, monument.lat )}>Dodaj do mojej mapy</button>
                        </div>
                )}
            </div>
        )
    }
}