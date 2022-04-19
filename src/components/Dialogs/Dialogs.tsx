import React from "react"
import c from './Dialogs.module.css';
import Message from "./Messages/Messages";
import DialogItem from "./DialogItem/DialogItem";
import {DialogsPageType} from "../../redux/store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {TextArea} from "../common/FormsControls/FormsControl";
import {maxLengthCreator, required} from "../../utils/validators/validator";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    addMessage:(newMessageBody:string)=> void
    // isAuth: boolean
}
type DialogsFormPropsType = {
    newMessageBody: string
}
const maxLength100 = maxLengthCreator(100)
const DialogsForm = (props:InjectedFormProps<DialogsFormPropsType>) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='Enter your message' component={TextArea} name={'newMessageBody'} validate={[required, maxLength100]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
const DialogsReduxForm = reduxForm<DialogsFormPropsType>({form: 'dialog'})(DialogsForm)


const  Dialogs = (props: DialogsPropsType) => {

    let dialogElements = props.dialogsPage.dialogsData.map(d => <DialogItem key={d.id} userName={d.userName} id={d.id} src={d.img}/>)
    let messageElements = props.dialogsPage.messagesData.map(m => <Message key={m.id} message={m.message} id={m.id}/>)
    let onAddMessage = (formData:DialogsFormPropsType) => {
        props.addMessage(formData.newMessageBody)
    }
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogElements}
            </div>
            <div className={c.messagesItem}>
                {messageElements}
                <DialogsReduxForm onSubmit={onAddMessage}/>
            </div>

        </div>
    )
}

export default Dialogs