import React from "react";

export type DialogType = {
    userName: string
    id: number
    img:string
}
export type MessageType = {
    message: string
    id: number
}
export type PostType = {
    message: string
    likesCount: number
}
export type MessagesDataType = Array<MessageType>
export type DialogsDataType = Array<DialogType>
export type PostsDataType = Array<PostType>
export type ProfilePageType ={
    postsData: PostsDataType
}
export type DialogsPageType = {
    messagesData: MessagesDataType
    dialogsData: DialogsDataType
}
export type FriendsType = {
    id: number
    img:string
    userName: string
}
export type SideBarPageType = {
    friends: FriendsType[]
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sideBarPage: SideBarPageType
}
export let state: StateType  = {
    profilePage: {
        postsData:  [
            {message: 'Hi, how are you', likesCount: 12},
            {message: 'I`d like to drink', likesCount: 111},
            {message: 'Go to it-incubator', likesCount: 112},
        ],
    },
    dialogsPage: {
        messagesData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'I`s my first project'},
            {id: 3, message: 'Kavabanga'},
        ],
        dialogsData: [
            {id: 1, userName: 'Julia',img:'https://cs8.pikabu.ru/post_img/2016/07/09/10/1468084255134888644.jpg' },
            {id: 2, userName: 'Artem',img:'https://cs8.pikabu.ru/post_img/2016/07/09/10/1468084255134888644.jpg'},
            {id: 3, userName: 'John', img:'https://cs8.pikabu.ru/post_img/2016/07/09/10/1468084255134888644.jpg'},
            {id: 4, userName: 'Evgeniy', img:'https://cs8.pikabu.ru/post_img/2016/07/09/10/1468084255134888644.jpg'},
            {id: 5, userName: 'Viktor',img:'https://cs8.pikabu.ru/post_img/2016/07/09/10/1468084255134888644.jpg'},
        ]
    },
    sideBarPage:{
        friends: [
            {id: 1, img:'https://cs8.pikabu.ru/post_img/2016/07/09/10/1468084255134888644.jpg', userName: 'Julia'},
            {id: 2, img:'https://cs8.pikabu.ru/post_img/2016/07/09/10/1468084255134888644.jpg',userName: 'Artem'},
            {id: 3, img:'https://cs8.pikabu.ru/post_img/2016/07/09/10/1468084255134888644.jpg',userName: 'John'},
        ]
    }
}


