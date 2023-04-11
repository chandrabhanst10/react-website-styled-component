import React from "react";
import {
  CloseIcon,
  Icon,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
  SidebarWrapper,
  SideBtnWrap,
  SiderbarContainer,
} from "./SidebarElements";

const Sidebar = ({isOpen,toggle}) => {
  return (
    <SiderbarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to={"about"} onClick={toggle}>About</SidebarLink>
          <SidebarLink to={"discover"} onClick={toggle}>Discover</SidebarLink>
          <SidebarLink to={"services"} onClick={toggle}>Services</SidebarLink>
          <SidebarLink to={"signup"} onClick={toggle}>Sign Up</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to={"/signin"}>Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SiderbarContainer>
  );
};

export default Sidebar;
