import React, {useState} from 'react';
import "../styles/components-styles/pageNav.scss"
// import "../styles/general/mixins.scss"
import {Link} from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import {SideBarData} from './SideBarData'
import {DivStyled} from "./PageNav.styles";

const PageNav = () => {
    const [sidebar, setSideBar] = useState(false)

    const showSideBar = () => {
        setSideBar(!sidebar)
    }
    return (
        <>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={showSideBar}/>
                </Link>
                <span>Menu</span>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu '}>
                <ul className="nav-menu-items" onClick={showSideBar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <AiIcons.AiOutlineClose onClick={showSideBar}/>
                        </Link>
                    </li>
                    {SideBarData.map((item, index) => {
                        return (
                            <li key={index} className={item.className}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    );
}

export default PageNav;
