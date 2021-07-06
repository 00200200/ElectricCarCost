import React from 'react';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as HiIcons from 'react-icons/hi'
import * as BiIcons from 'react-icons/bi'
import * as TiIcons from 'react-icons/ti'
import * as RiIcons from 'react-icons/ri'

export const SideBarData = [
    {
        title: 'Strona Główna',
        path: '/',
        icon: <AiIcons.AiOutlineHome/>,
        className: 'nav-text'
    },
    {
        title: 'Oblicz',
        path: '/Oblicz',
        icon: <HiIcons.HiCalculator/>,
        className: 'nav-text'
    },    {
        title: 'Porównaj',
        path: '/Porównaj',
        icon: <BiIcons.BiGitCompare/>,
        className: 'nav-text'
    },
    //
    // {
    //     // title: 'Mapa',
    //     // path: '/Map',
    //     icon: <BiIcons.BiMap/>,
    //     className: 'nav-text'
    // },
    // {
    //     // title: 'Kontakt',
    //     // path: '/Contact',
    //     icon: <TiIcons.TiContacts/>,
    //     className: 'nav-text'
    // },
    // {
    //     // title: 'O nas',
    //     // path: '/AboutUs',
    //     icon: <RiIcons.RiInformationLine/>,
    //     className: 'nav-text'
    // }

    ]
;

export default SideBarData;