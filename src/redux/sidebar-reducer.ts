import {ActionsTypes, SideBarPageType} from "./store";
const initialState: SideBarPageType = {
    links: [
        {id:'1',navLink:'/profile', tittle: 'Profile' },
        {id:'2',navLink:'/dialogs' , tittle: 'Messages' },
        {id:'3',navLink:'/news', tittle: 'News'},
        {id:'4',navLink:'/music', tittle: 'Music'},
        {id:'5',navLink:'/settings', tittle: 'Settings'},
        {id:'6',navLink:'/friends', tittle: 'Friends'},
        {id:'7',navLink:'/users', tittle: 'Users'},
    ],
    friends: [
        {id: 1, img: 'https://cs8.pikabu.ru/post_img/2016/07/09/10/1468084255134888644.jpg', userName: 'Julia'},
        {id: 2, img: 'https://cs8.pikabu.ru/post_img/2016/07/09/10/1468084255134888644.jpg', userName: 'Artem'},
        {id: 3, img: 'https://cs8.pikabu.ru/post_img/2016/07/09/10/1468084255134888644.jpg', userName: 'John'},
    ]
}

export const sideBarReducer = (state:SideBarPageType = initialState, action: ActionsTypes):SideBarPageType => {
    return state
}