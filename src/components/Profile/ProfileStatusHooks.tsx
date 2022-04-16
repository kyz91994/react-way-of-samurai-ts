import React, {ChangeEvent, useEffect, useState} from 'react'

type ProfileStatusPropsType = {
    status: string
    updateUserStatus: (status: string) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [localStatus, setLocalStatus] = useState<string>(props.status)

    const activateMode = () => {
        setEditMode(true)
    }
    const deActivateMode = () => {
        setEditMode(false)
        props.updateUserStatus(localStatus)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalStatus(e.currentTarget.value)
    }
    useEffect(()=>{
        setLocalStatus(props.status)
    },[props.status])
    return (
        <>
            {!editMode &&
            <div>
                <span onDoubleClick={activateMode}>{props.status|| 'No status'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={deActivateMode}
                       value={localStatus}/>
            </div>
            }
        </>
    )

}


