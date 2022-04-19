import React from 'react';
import {ProfilePageType} from "./redux/store";
import {addPostActionCreator, profileReducer} from "./redux/profile-reducer";

test('state length should be 5', () => {
        const initialState: ProfilePageType = {
            postsData: [
                {id: 1, message: 'Hi, how are you', likesCount: 12},
                {id: 2, message: 'I`d like to drink', likesCount: 111},
                {id: 3, message: 'Go to it-incubator', likesCount: 112},
            ],
            status: '',
            profile: {
                // aboutMe: "я круто чувак 1001%",
                // contacts: {
                //     facebook: "facebook.com",
                //     website: null,
                //     vk: "vk.com/dimych",
                //     twitter: "https://twitter.com/@sdf",
                //     instagram: "instagra.com/sds",
                //     youtube: null,
                //     github: "github.com",
                //     mainLink: null
                // },
                // lookingForAJob: true,
                // lookingForAJobDescription: "не ищу, а дурачусь",
                // fullName: "samurai dimych",
                // userId: 2,
                // photos: {
                //     small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
                //     large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
                // }}
            }
        }
        const action = addPostActionCreator('New post')
        const newState = profileReducer(initialState, action)
        expect(newState.postsData.length).toBe(4)
    }


)