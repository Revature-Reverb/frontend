import React from "react";
import { selectUser } from '../slices/userSlice'
import { useDispatch, useSelector } from "react-redux";

function UserComponent() {
    const users = useSelector(selectUser);
    const dispatch = useDispatch();

    console.log("the username: "+users.username);

    return (
        <div>
            <h1>This is the username: {users.username}</h1>
        </div>
    )
}

export default UserComponent;