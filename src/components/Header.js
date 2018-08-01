import React, { Component } from 'react'
import { Transition, Keyframes, animated, config } from 'react-spring'
import delay from 'delay'
import MediaQuery from 'react-responsive';
 

export default class Header extends Component {
    state = {
        isOpen: false
    }
    handleClick= e => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }))
    }
    render() {
        const { isOpen } = this.state;
        return (
            <header className="header">
                    <a href="#" className={`logo${ isOpen ? ' logo--active' : ''}`}>daniel chorągwicki</a>
                <MediaQuery maxDeviceWidth={768}>
                    <button className={`menu-button${ isOpen ? ' menu-button--active' : ''}` } onClick={this.handleClick}>
                        <div className="menu-button__line"></div>
                        <div className="menu-button__line"></div>
                        <div className="menu-button__line"></div>
                    </button>
                </MediaQuery>
                <nav className={`menu${ isOpen ? ' menu--open' : ''}`}>
                    <ul className="menu__list">
                        <li className="menu__item"><a href="#" className="menu__link">O mnie</a></li>
                        <li className="menu__item"><a href="#" className="menu__link" >Portfolio</a></li>
                        <li className="menu__item"><a href="#" className="menu__link menu__link--active">Kontakt</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

