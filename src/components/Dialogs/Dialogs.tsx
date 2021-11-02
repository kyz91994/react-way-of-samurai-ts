import React from "react"
import c from './Dialogs.module.css';
import Message from "./Messages/Messages";
import DialogItem from "./DialogItem/DialogItem";
import {DialogsPageType, StateType} from "../../redux/state";

type DialogsPropsType = {
    state: DialogsPageType
}

function Dialogs(props: DialogsPropsType) {
    let dialogElements = props.state.dialogsData.map(d => <DialogItem key={d.id} userName={d.userName} id={d.id} src={d.img}/>)
    let messageElements = props.state.messagesData.map(m => <Message key={m.id} message={m.message} id={m.id}/>)

    let newMessageElementRef = React.createRef<HTMLTextAreaElement>()
    let addMessage = () => {
        let message = newMessageElementRef.current?.value
        alert(message)
    }

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogElements}
            </div>
            <div className={c.messagesItem}>
                {messageElements}
                <div>
                    <textarea ref={newMessageElementRef}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>


            </div>
        </div>
    )
}

export default Dialogs