import React, {useState} from 'react';
import GithubLogo from './../assets/GitHub-Mark-01.svg';

function Header(props) {

    const [menuWidth, setMenuWidth] = useState({width: '0'});

    const toggleMenu = e => {
        document.querySelector('.hamburger-button').classList.toggle('open');
        if (menuWidth.width == '0') {
            setMenuWidth({width: '100%'});
        } else {
            setMenuWidth({width: '0'});
        }
    }

    const menuLink = e => {
        setMenuWidth({width: '0'});
        document.querySelector('.hamburger-button').classList.toggle('open');
    }

    return (
        <header className="section small header">
            <div className="right-col">

                <div className="title">
                    <h1 dangerouslySetInnerHTML={{__html: props.name}}></h1>

                    <button onClick={toggleMenu} title="Open overview" className="hamburger-button">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <div className="menu" style={menuWidth}>
                        <ul>
                            <li><a onClick={menuLink} href="#start">Start</a></li>
                            <li><a onClick={menuLink} href="#projects">Projects</a></li>
                            <li><a onClick={menuLink} href="#stack">Stack</a></li>
                            <li><a onClick={menuLink} href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="intro">
                    <p dangerouslySetInnerHTML={{__html: props.introduction}}></p>
                    <a className="github" title="Go to my github" href="https://github.com/torbratsberg"><img src={GithubLogo} alt="GitHub logo"/></a>
                </div>

            </div>
        </header>
    );
}

export default Header;

