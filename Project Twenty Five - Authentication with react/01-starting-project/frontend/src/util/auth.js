import { redirect } from "react-router-dom"

export function getTokenDuration(){
    const storedExpirationDate =  localStorage.getItem('tokenExp')
    const expirationDate = new Date(storedExpirationDate)
    const now = new Date()
    const duration = expirationDate.getTime() - now.getTime()
    return duration
}

export function getAuthToken(){
    const token = localStorage.getItem('token')
    const duration = getTokenDuration()

    if(!token){
        return null
    }

    if(duration < 0){
        return 'EXPIRED'
    }
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