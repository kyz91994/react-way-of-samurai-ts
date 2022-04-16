import React from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import  {logout} from "../../redux/auth-reducer";

export type MapAuthStateToPropsType = {
    isAuth: boolean,
    login: string,
}
export type MapAuthDispatchToPropsType = {
    // getAuthUserData: () => void
    logout: () => void
 }
export type HeaderContainerType = MapAuthStateToPropsType & MapAuthDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerType> {
    // componentDidMount() {
    //     this.props.getAuthUserData()
    // }

    render(){
        return(
            <Header {...this.props}/>
        )
    }
}
const mapStateToProps = (state:AppStateType):MapAuthStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps,{logout})(HeaderContainer)
