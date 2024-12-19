import { redirect } from "react-router-dom"

export function getAuthToken(){
    const token = localStorage.getItem('token')
    return token
}

export function tokenLoader(){
    return getAuthToken()
}

// will be used for checking or restrict aaccess to certain routes if we try to manipulate url directly instead of app
export function checkAuthLoader(){

    const token = getAuthToken()

    if(!token){
        redirect('/auth')
    }

    // loader must always return something
    return null
}