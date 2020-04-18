import React from 'react'
import { Link } from 'react-router-dom';
import './Menu.scss';

const Menu = (props) => {
    return (
        <div onClick={props.handleMenu} className={props.menuActive ? 'Menu Menu--active' : 'Menu'}>
            <div className="Menu__list">
                <ul>
                    {/* <li><Link to='/'>Strona główna</Link></li> */}
                    <li><Link to='/about'>O nas</Link></li>
                    <li><Link to='/offer'>Oferta</Link></li>
                    <li><Link to='/attractions'>Atrakcje BHP</Link></li>
                    <li><Link to='/gallery'>Galeria</Link></li>
                    <li><Link to='/contact'>Kontakt</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Menu
