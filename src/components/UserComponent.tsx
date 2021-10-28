import React from "react";
import { selectUsers } from '../slices/userSlice'
import { useDispatch, useSelector } from "react-redux";

function UserComponent() {
    const users = useSelector(selectUsers);
    const dispatch = useDispatch();

    console.log("the username: "+users[0].username);

    return (
        <div>
            <h1>This is the username: {users[0].username}</h1>
        </div>
    )
}

export default UserComponent;