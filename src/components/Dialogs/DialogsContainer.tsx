import React from "react"
import {addMessageActionCreator} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {DialogsPageType} from "../../redux/store";
import {compose, Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapDispatchToProps = {
    addMessage: (newMessageBody:string) => void
}

const mapStateToProps = (state: AppStateType): { dialogsPage: DialogsPageType } => {
    return {
        dialogsPage: state.dialogsPage,
        // isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        addMessage: (newMessageBody:string) => {
            dispatch(addMessageActionCreator(newMessageBody))
        }
    }
}

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps))(Dialogs)

