import {ActionsTypes, DialogsPageType, MessageType} from "./store";
const initialState:DialogsPageType = {
    messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'I`s my first project'},
        {id: 3, message: 'Kavabanga'},
    ],
    dialogsData: [
        {id: 1, userName: 'Julia', img: 'https://cs8.pikabu.ru/post_img/2016/07/09/10/1468084255134888644.jpg'},
        {id: 2, userName: 'Artem', img: 'https://cs8.pikabu.ru/post_img/2016/07/09/10/1468084255134888644.jpg'},
        {id: 3, userName: 'John', img: 'https://cs8.pikabu.ru/post_img/2016/07/09/10/1468084255134888644.jpg'},
        {
            id: 4,
            userName: 'Evgeniy',
            img: 'https://cs8.pikabu.ru/post_img/2016/07/09/10/1468084255134888644.jpg'
        },
        {
            id: 5,
            userName: 'Viktor',
            img: 'https://cs8.pikabu.ru/post_img/2016/07/09/10/1468084255134888644.jpg'
        },
    ],
}
export const dialogReducer = (state:DialogsPageType = initialState, action:ActionsTypes):DialogsPageType => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            const newMessage: MessageType = {
                id: 5, message: action.newMessageBody,
            }
            return {...state,messagesData:[...state.messagesData,newMessage ],}
        default: return state
    }
}
export const addMessageActionCreator = (newMessageBody:string) => ({type: 'ADD-MESSAGE',newMessageBody} as const)
