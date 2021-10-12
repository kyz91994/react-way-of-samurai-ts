import React from "react"
import c from './Profile.module.css'

function Profile(){
    return(
        <div className={c.content}>
            <div>
                <img src='https://img.championat.com/s/735x490/news/big/o/j/stadion-finala-evro-serdce-futbola_16260263101386131676.jpg'/>
            </div>
            <div>
                ava+description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <div className={c.item}>post 1</div>
                    <div className={c.item}>post 2</div>
                </div>
            </div>
        </div>
    )
}
export default Profile