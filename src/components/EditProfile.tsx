import { updateProfile } from '@firebase/auth';
import { Grid } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Profile } from '../models/profileModel';
import { getProfileAsync, selectProfile, updateProfileAsync } from '../slices/profileSlice';
// import "./EditProfile.css";

export default function EditProfile() {
    useEffect(() => {
        // dispatch(getUserAsync(dud));
        dispatch(getProfileAsync(profile));
      }, []);

    const profile = useSelector(selectProfile);
    const dispatch = useDispatch();

    const history = useHistory();

    

    const[input, setInput] = useState(profile);

    const handleChange = (e: any) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };

    
    const update = (e: any) => {
        e.preventDefault();
        console.log('editProfile' + JSON.stringify(input));
        dispatch(updateProfileAsync(input));
        history.push('/profile');
    }

    const cancel = (e: any) => {
        e.preventDefault();
        history.push('/profile');
    }

    return (
        <div>
            <Grid container direction="column" alignItems="center" justify="center">
            <Card id="EditProfile">
                 <div className="form_input-group">
                    <label htmlFor="first_name">First Name</label>

                    <input className="form_input" type="text" name="first_name" placeholder="First name" value={input.first_name} 

                    onChange={handleChange} required />
                </div>

                <div className="form_input-group">
                    <label htmlFor="last_name">Last Name</label>

                    <input className="form_input" type="textbox" name="last_name" placeholder="Last name"  value={input.last_name} 
                    onChange={handleChange} required />
                </div>

                <div className="form_input-group">
                    <label htmlFor="about_me">About Me</label>
                    <textarea className="form_input" rows={10} name="about_me" placeholder="Your about me"  value={input.about_me}
                    onChange={handleChange}  > </textarea>
                </div>

                <div className="form_input-group">
                    <label htmlFor="last_name">Birthday</label>
                    <input className="form_input" type="textbox" name="birthday" placeholder="Birthday"  value={input.birthday} 

                    onChange={handleChange} required />
                </div>

                <div className="form_input-group">
                    <label htmlFor="last_name">Hobbies</label>
                    <input className="form_input" type="textbox" name="hobby" placeholder="Hobby"  value={input.hobby} 
                    onChange={handleChange} required />
                </div>

                <div className="form_input-group">
                    <label htmlFor="last_name">Location</label>
                    <input className="form_input" type="textbox" name="location" placeholder="Location"  value={input.location} 
                    onChange={handleChange} required />
                </div>
                
                <div className="form_input-group">
                    <label htmlFor="profile_img">Select Profile Image</label>
                    <input className="form_input" type="text" name="profile_img" placeholder="Profile Image url"  value={input.profile_img}
                    onChange={handleChange} required />
                </div>

                <div className="form_input-group">
                    <label htmlFor="header_img">Select Header Image</label>
                    <input className="form_input" type="text" name="header_img" placeholder="Header Image url"  value={input.header_img}
                    onChange={handleChange} required />
                </div>
                <br /><br />
                <button id = "UpdateProfile" type="submit" onClick={update} >Update</button><br />
                <button id="CancelEdits" type="submit" onClick={cancel} >Cancel</button><br />
            </Card>
            </Grid>
        </div>
    )

}


