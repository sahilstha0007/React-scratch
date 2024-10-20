import { useContext } from "react"
import React  from 'react'
import UserContext from "../src/Context/UserContext"


function Profile() {
    const {user} = useContext(UserContext)


    if(!user) return <div>Please Login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile
