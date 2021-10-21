import React from "react";
import c from './ProfileInfo.module.css'

function ProfileInfo(props: any) {
    return (
        <div>
            <div>
                <img src='https://img.championat.com/s/735x490/news/big/o/j/stadion-finala-evro-serdce-futbola_16260263101386131676.jpg'/>
            </div>
            <div className={c.descriptionBlock}>
                ava+description
            </div>
        </div>
    )
}
export default ProfileInfo