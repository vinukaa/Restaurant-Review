import React from 'react';
import {SideBarContainer, Icon, CloseIcon, SideBarMenu, SideBarLink} from './SideBarElements';

const SideBar = ({isOpen, toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarMenu>
                <SideBarLink to="/">Western Restaurants</SideBarLink>
                <SideBarLink to="/">Eastern Restaurants</SideBarLink>
                <SideBarLink to="/">Asian Restaurants</SideBarLink>
            </SideBarMenu>
        </SideBarContainer>
    )
}

export default SideBar
