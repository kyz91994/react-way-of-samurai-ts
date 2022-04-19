import React from "react";
import {addMessageActionCreator, dialogReducer} from "./dialog-reducer";
import {addPostActionCreator, profileReducer, ProfileType, setUserProfile, setUserStatus,} from "./profile-reducer";
import {sideBarReducer} from "./sidebar-reducer";
import {
    onFollowButton,
    onUnFollowButton,
    setCurrentPage,
    setToggleIsFetching,
    setTotalUsersCount,
    setUsers,
    toggleFollowingProgress
} from "./user-reducer";
import {setAuthUser} from "./auth-reducer";
import {setInitialized} from "./app-reducer";

export type addMessageType = () => void
export type DialogType = {
    userName: string
    id: number
    img: string
}
export type MessageType = {
    message: string
    id: number
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type MessagesDataType = Array<MessageType>
export type DialogsDataType = Array<DialogType>
export type PostsDataType = Array<PostType>
export type ProfilePageType = {
    status: string
    postsData: PostsDataType
    profile: ProfileType
}
export type DialogsPageType = {
    messagesData: MessagesDataType
    dialogsData: DialogsDataType
}
export type FriendsType = {
    id: number
    img: string
    userName: string
}
export type LinkType = {
    id: string
    navLink: string
    tittle: string
}
export type SideBarPageType = {
    links: LinkType[]
    friends: FriendsType[]
}
export type AddMessageStateType = () => void
export type addPostType = () => void
//ACTION TYPES
export type AddMessageActionType = ReturnType<typeof addMessageActionCreator>
export type ActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof addMessageActionCreator>
    | ReturnType<typeof onFollowButton>
    | ReturnType<typeof onUnFollowButton>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setToggleIsFetching>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setAuthUser>
    | ReturnType<typeof toggleFollowingProgress>
    | ReturnType<typeof setUserStatus>
    | ReturnType<typeof setInitialized>
export type DispatchType = (action: ActionsTypes) => void
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sideBarPage: SideBarPageType
}
export type StoreType = {
    _state: StateType
    _callSubscriber: (state: StateType) => void
    getState: () => StateType
    subscribe: (observer: () => void) => void
    dispatch: DispatchType
}
export let store: StoreType = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hi, how are you', likesCount: 12},
                {id: 2, message: 'I`d like to drink', likesCount: 111},
                {id: 3, message: 'Go to it-incubator', likesCount: 112},
            ],
            status: '',
            profile: {
                aboutMe: "я круто чувак 1001%",
                contacts: {
                    facebook: "facebook.com",
                    website: null,
                    vk: "vk.com/dimych",
                    twitter: "https://twitter.com/@sdf",
                    instagram: "instagra.com/sds",
                    youtube: null,
                    github: "github.com",
                    mainLink: null
                },
                lookingForAJob: true,
                lookingForAJobDescription: "не ищу, а дурачусь",
                fullName: "samurai dimych",
                userId: 2,
                photos: {
                    small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
                    large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
                }
            }
        },
        dialogsPage: {
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
        },
        sideBarPage: {
            links: [
                {id: '1', navLink: '/profile', tittle: 'Profile'},
                {id: '2', navLink: '/dialogs', tittle: 'Messages'},
                {id: '3', navLink: '/news', tittle: 'News'},
                {id: '4', navLink: '/music', tittle: 'Music'},
                {id: '5', navLink: '/settings', tittle: 'Settings'},
                {id: '6', navLink: '/friends', tittle: 'Friends'},
            ],
            friends: [
                {id: 1, img: 'https://cs8.pikabu.ru/post_img/2016/07/09/10/1468084255134888644.jpg', userName: 'Julia'},
                {id: 2, img: 'https://cs8.pikabu.ru/post_img/2016/07/09/10/1468084255134888644.jpg', userName: 'Artem'},
                {id: 3, img: 'https://cs8.pikabu.ru/post_img/2016/07/09/10/1468084255134888644.jpg', userName: 'John'},
            ]
        },
    },
    _callSubscriber(state) {
        console.log('state changes')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.sideBarPage = sideBarReducer(this._state.sideBarPage, action)
        this._callSubscriber(this._state)
    },

}
