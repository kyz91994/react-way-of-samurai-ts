import axios from "axios";
const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': 'c52baf86-5b23-4558-8b14-2fc821e20411'
    }
})
export const userAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    unFollowUser(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    followUser(id: number) {
        return instance.post(`follow/${id}`, {})
            .then(response => response.data)
    }
}
export const profileApi = {
    getProfile(userId: string){
        return instance.get(`profile/${userId}`)
            .then(response=> response.data)
    },
    getUserStatus(userId: string){
        return instance.get(`profile/status/${userId}`)
            .then(response=> response.data)
    },
    updateUserStatus(status:string){
        return instance.put('/profile/status',{status:status} )
    }
}
export const authAPI = {
    me(){
        return instance.get(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean = false){
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout(){
        return instance.delete(`auth/login`)
    }
}