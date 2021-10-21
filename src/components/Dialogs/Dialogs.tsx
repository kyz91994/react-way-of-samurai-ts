import React from "react"
import c from './Dialogs.module.css';
import Message, {MessagePropsType} from "./Messages/Messages";
import DialogItem, {DialogItemPropsType} from "./DialogItem/DialogItem";

type MessagesDataType = Array<MessagePropsType>
type DialogsDataType = Array<DialogItemPropsType>

let messagesData: MessagesDataType = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'I`s my first project'},
    {id: 3, message: 'Kavabanga'},
]
let dialogsData: DialogsDataType = [
    {id: 1, userName: 'Julia'},
    {id: 2, userName: 'Artem'},
    {id: 3, userName: 'John'},
    {id: 4, userName: 'Evgeniy'},
    {id: 5, userName: 'Viktor'},
]
let dialogElements = dialogsData.map(d => <DialogItem userName={d.userName} id={d.id}/>)
let messageElements = messagesData.map(m => <Message message={m.message} id={m.id}/>)

function Dialogs() {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {
                    dialogElements
                }
            </div>
            <div className={c.messagesItem}>
                {
                    messageElements
                }
            </div>
        </div>
    )
}

export default Dialogs