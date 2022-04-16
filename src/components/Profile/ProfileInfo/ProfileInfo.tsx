import React from "react";
import c from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/profile-reducer";
import photoUser from '../../../asserts/images/pngtree-users-vector-icon-png-image_3725294.jpeg'
import {Preloader} from "../../common/Preloader";
import ProfileStatus from "../ProfileStatus";
import {ProfileStatusWithHooks} from "../ProfileStatusHooks";

type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    updateUserStatus:(status:string)=> void
}

function ProfileInfo(props: ProfileInfoPropsType) {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                {/*<img*/}
                {/*    src='https://img.championat.com/s/735x490/news/big/o/j/stadion-finala-evro-serdce-futbola_16260263101386131676.jpg'/>*/}
            </div>
            <div className={c.descriptionBlock}>
                {props.profile.photos ?
                    <img width={'150px'} src={props.profile.photos.small ? props.profile.photos.small : photoUser}/> :
                    <img width={'150px'} src={photoUser}/>
                }
                <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus} />


                <ul>
                    <li>
                        My name: {props.profile.fullName}
                    </li>
                    <li>
                        About me: {props.profile.aboutMe ? props.profile.aboutMe : 'No information'}
                    </li>
                    <li>
                        Looking for a
                        job:{props.profile.lookingForAJob ? props.profile.lookingForAJob : 'No information'}
                    </li>
                    <li>
                        Looking for a job
                        description:{props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : 'No information'}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileInfo