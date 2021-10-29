import React from "react";
import { selectUser } from '../slices/userSlice'
import { useDispatch, useSelector } from "react-redux";

function UserComponent() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    console.log("the username: "+user.username);

    return (
        <div>
            <h1>This is the username: {user.username}</h1>
        </div>
    )
}

export default UserComponent;