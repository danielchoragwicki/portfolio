import React, { Component } from 'react'
import { Link, NavLink } from "react-router-dom"
import { Transition, Keyframes, animated, config } from 'react-spring'
import delay from 'delay'
import MediaQuery from 'react-responsive'
 

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
                    <Link to="/" className={`logo${ isOpen ? ' logo--active' : ''}`}>Daniel Chorągwicki</Link>
                <MediaQuery maxDeviceWidth={768}>
                    <button className={`menu-button${ isOpen ? ' menu-button--active' : ''}` } onClick={this.handleClick}>
                        <div className="menu-button__line"></div>
                        <div className="menu-button__line"></div>
                        <div className="menu-button__line"></div>
                    </button>
                </MediaQuery>
                <nav className={`menu${ isOpen ? ' menu--open' : ''}`}>
                    <ul className="menu__list">
                        <li className="menu__item">
                            <NavLink to="/o-mnie" className="menu__link" activeClassName="menu__link--active">O mnie</NavLink>
                        </li>
                        <li className="menu__item">
                            <NavLink to="/portfolio" className="menu__link" activeClassName="menu__link--active">Portfolio</NavLink>
                        </li>
                        <li className="menu__item">
                            <NavLink to="/kontakt" className="menu__link" activeClassName="menu__link--active">Kontakt</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

