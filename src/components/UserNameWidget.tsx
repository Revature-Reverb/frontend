import { userInfo } from 'os';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser }  from '../slices/userSlice';
import { deleteUserAsync, getUserAsync, postUserAsync, putUserAsync } from '../slices/userSlice';
import { User } from '../models/userModel'

export default function UserNameWidget() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
        let dud: User= {
            userid: "",
            email: "",
            profile: {
                id: 0,
                firstname: "Testor",
                lastname: "",
                about_me: ""
            }
        };
        dispatch(getUserAsync(dud) );
        dispatch(postUserAsync(dud) );
        dispatch(putUserAsync(dud) );
        dispatch(deleteUserAsync(dud) );
    }, [])

    return (
        <div>
            <h1>{user.profile.firstname}</h1>
        </div>
    )
} 