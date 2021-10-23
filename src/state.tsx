import React, {useState} from "react";


export type MessagesDataType = Array<MessageType>
export type DialogsDataType = Array<DialogType>
export type PostsDataType = Array<PostType>;
export type DialogType = {
    userName: string
    id: number
}
export type MessageType = {
    message: string
    id: number
}
export type PostType = {
    message: string
    likesCount: number
}
export type StateType = {
    postsData: PostsDataType
    messagesData: MessagesDataType
    dialogsData: DialogsDataType
}
export let state: StateType  = {
    postsData:  [
    {message: 'Hi, how are you', likesCount: 12},
    {message: 'I`d like to drink', likesCount: 111},
    {message: 'Go to it-incubator', likesCount: 112},
],
    messagesData: [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'I`s my first project'},
    {id: 3, message: 'Kavabanga'},
],
    dialogsData: [
    {id: 1, userName: 'Julia'},
    {id: 2, userName: 'Artem'},
    {id: 3, userName: 'John'},
    {id: 4, userName: 'Evgeniy'},
    {id: 5, userName: 'Viktor'},
]
}


