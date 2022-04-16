import React from "react"
import c from './Mypost.module.css'
import Post from "./Post/Post";
import {ProfilePageType} from "../../../redux/store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validator";
import {TextArea} from "../../common/FormsControls/FormsControl";


type MyPostPropsType = {
    profilePage: ProfilePageType
    addPost: (newPostBody: string)=>void
}
type FormDataType = {
    myPost: string
}
const maxLength10 = maxLengthCreator(10)

const MyPostForm = (props:InjectedFormProps<FormDataType>) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea} name={'myPost'} validate={[required, maxLength10]} placeholder='Add post'/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
const MyPostReduxForm = reduxForm<FormDataType>({form: 'myPost'})(MyPostForm)

const  MyPost = (props: MyPostPropsType) => {
    let posts = props.profilePage.postsData.map((p,index) => <Post key={index} message={p.message} likesCount={p.likesCount}/>)
    const onSubmit = (formData:FormDataType) => {
        props.addPost(formData.myPost)
    }
    return (
        <div className={c.posts}>
            <h3>My posts</h3>
            <div>
                <MyPostReduxForm onSubmit={onSubmit} />
            </div>
            <div className={c.postsBlock}>
                {
                    posts
                }
            </div>
        </div>
    )
}

export default MyPost

