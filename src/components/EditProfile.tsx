import { Grid } from '@material-ui/core';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import "./EditProfile.css";

function EditProfile() {

    const history = useHistory();

    const profile = {
        first_name: "",
        last_name: "",
        profile_img: "",
        header_img: "",
        about_me: ""
    }

    const[input, setInput] = useState(profile);

    const handleChange = (e: any) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };

    const update = (e: any) => {
        e.preventDefault();
        let editProfile = {first_name: input.first_name, last_name: input.last_name, profile_img: input.profile_img, header_img: input.header_img, about_me: input.about_me};
        console.log('editProfile' + JSON.stringify(editProfile));
    }

    const cancel = (e: any) => {
        e.preventDefault();
        history.push('/profile');
    }

    return (
        <div>
            <Grid container direction="column" alignItems="center" justify="center">
            <Card>
                 <div className="form_input-group">
                    <label htmlFor="first_name">First Name</label>
                    <input className="form_input" type="text" name="first_name" placeholder="John" value={input.first_name} 
                    onChange={handleChange} required />
                </div>

                <div className="form_input-group">
                    <label htmlFor="last_name">Last Name</label>
                    <input className="form_input" type="textbox" name="last_name" placeholder="Kim"  value={input.last_name} 
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

                <div className="form_input-group">
                    <label htmlFor="about_me">About Me</label>
                    <textarea className="form_input" rows={5} name="about_me" placeholder="I am a software developer"  value={input.about_me}
                    onChange={handleChange}  > </textarea>
                </div>

                <button className="btn_color" type="submit" onClick={update} >Update</button><br />
                <button className="cancel_color" type="submit" onClick={cancel} >Cancel</button><br />
            </Card>
            </Grid>
        </div>
    )

}

export default EditProfile;
