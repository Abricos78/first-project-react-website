import React from 'react'
import style from './Messages.module.css'
import Dialog from './Dialog/Dialog'
import UserDialogs from './UserDialogs/UserDialogs'



const Messages = props => {
    debugger 
    let newMessageElement = React.createRef(),
    sendMessage = () => {
        props.sendMessage()
    },
    changeTextarea = () => {
        props.changeTextarea(newMessageElement.current.value)
    }


    let dialogComponents = props.messagesContent.dialog.map( dialog => <Dialog id={dialog.id} content={dialog.content}/>),
        userDialogsComponents = props.messagesContent.userDialogs.map( user => <UserDialogs id={user.id} name={user.name} />)
    return (
        <div className={style.messages}>
            <div className={style.dialogs}>
                {userDialogsComponents}
            </div>
            <div className={style.dialog}>
                {dialogComponents}
                <textarea onChange={changeTextarea}  ref={newMessageElement} value={props.messagesContent.textareaMessage}></textarea>
                <button onClick={sendMessage}>Send Message</button>
            </div>
        </div>
    )
}

export default Messages