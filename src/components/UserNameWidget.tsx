import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserAsync, getUserAsync, postUserAsync, putUserAsync, selectUser } from '../slices/userSlice';
import { User } from '../models/userModel'

export default function UserNameWidget() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
        let dud: User= {
            userid: "0",
            email: "Fake_Email"
        };
        console.log("Fake: " + dud.email);
        dispatch(getUserAsync(dud) );
        dispatch(postUserAsync(dud) );
        dispatch(putUserAsync(dud) );
        dispatch(deleteUserAsync(dud) );
    }, [])

    return (
        <div>
            <h1>{user.email}</h1>
        </div>
    )
} 