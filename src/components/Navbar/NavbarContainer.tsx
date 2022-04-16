import React from "react";
import {connect} from "react-redux";
import {SideBarPageType} from "../../redux/store";
import Navbar from "./Navbar";
import {AppStateType} from "../../redux/redux-store";
type MapStateToPropsType = {
    sideBarPage: SideBarPageType
}

const mapStateToProps = (state:AppStateType):MapStateToPropsType=> {
    return{
        sideBarPage: state.sideBarPage
    }
}
export const NavbarContainer = connect(mapStateToProps)(Navbar)