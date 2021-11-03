import React from "react";
import { selectUser } from '../slices/userSlice'
import { useSelector } from "react-redux";

function UserComponent() {
    const users = useSelector(selectUser);

    console.log("the username: "+users.firstName);

    return (
        <div>
            <h1>This is the username: {users.firstName}</h1>
        </div>
    )
}

export default UserComponent;