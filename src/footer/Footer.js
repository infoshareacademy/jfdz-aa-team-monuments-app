import React from 'react'
import './Footer.css'
import logo from '../logo.svg'

export default class Footer extends React.Component {

    render() {
        return(
            <div className="app-footer">
                <img id="footer-logo" src={logo}/>
                <h5><strong> Zabytki Gdańska </strong></h5>
                <ul>
                    <li><a href="http://aa-team.jfdz2.is-academy.pl" title="Strona www o naszym zespole" target="blank">nasz zespół</a></li>
                    <li><a href="https://github.com/infoshareacademy/jfdz-aa-team-monuments-app" title="Repozytorium aplikacji na GitHub" target="blank">repozytoriom</a></li>
                    <li><a href="http://infoshareacademy.com" title="Info Share Academy" target="blank">iSAcademy</a></li>
                </ul>
                <p><small>Gdańsk 2016</small></p>
            </div>
        )
    }
}
