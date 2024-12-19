import { redirect } from "react-router-dom"

export function action(){
    console.log("logout file");
    
    localStorage.removeItem('token')
    localStorage.removeItem('tokenExp')
    return redirect('/')
}