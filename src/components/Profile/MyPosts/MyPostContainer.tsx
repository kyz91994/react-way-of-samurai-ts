import {addPostActionCreator} from "../../../redux/profile-reducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../redux/redux-store";

const mapStateToProps = (state:AppStateType)=> {
    return {
        posts: state.profilePage.postsData
    }
}
const mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        addPost: (newPostBody:string) => {
            dispatch(addPostActionCreator(newPostBody))
        }
    }
}
export const MyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPost)
