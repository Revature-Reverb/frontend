import { userInfo } from 'os';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser }  from '../slices/userSlice';
import { getUserAsync } from '../slices/userSlice';
import { User } from '../models/userModel'

export default function UserNameWidget() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
        let dud = {wtf: 0};
        dispatch(getUserAsync(dud) );
    }, [])

    return (
        <div>
            <h1>{user.username}</h1>
        </div>
    )
} 