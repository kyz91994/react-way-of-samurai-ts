import {UserType} from "../redux/user-reducer";

export const genericMap = (items: UserType[], itemId: number, objPropName: 'id', actionObj: {followed: boolean})=> {
    return items.map(u => {
            if (u[objPropName] === itemId) {
                return {...u, ...actionObj}
            }
            return u
        }
    )
}