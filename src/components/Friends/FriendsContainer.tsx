import {SideBarPageType} from "../../redux/store";
import {connect} from "react-redux";
import {Friends} from "./Friends";
import {AppStateType} from "../../redux/redux-store";
type MapStateToProps = {
    sideBarPage : SideBarPageType
}
const mapStateToProps = (state: AppStateType):MapStateToProps => {
    return{
        sideBarPage : state.sideBarPage
    }
}
export const FriendsContainer = connect(mapStateToProps)(Friends)