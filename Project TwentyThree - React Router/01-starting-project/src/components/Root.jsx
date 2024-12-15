import { Outlet } from "react-router-dom"
import MainNavigation from "./MainNavigation"

// outlet component render the places where the child components should be rendered to 


function Root(){
    return <>
    <MainNavigation />
    <main ><Outlet /></main>
    
    
    </>
}

export default Root