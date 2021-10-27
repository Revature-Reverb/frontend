import React, { useState } from 'react'
import {Nav, NavLink, Form} from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Logo from '../reverb_logo2.png'
//import RevLogo from '../rev-logo.png'
import ProfileImage from '../logo.svg'
import App from '../App'
const NavigationBar:React.FC = (props:any) =>
{
    // The state of the input typed in the search field.
    // Used later when calling the searchHandler.
    const [search, setSearch] = useState("")

    // The method that will be used to do the 'search'.
    const searchHandler = (props:string) => {    
        console.log(props)
        return props;
    }

    // Handles the form submitting. Used to stop it from refreshing the page as well as
    // having it 'search'.
    const formHandler = (event:any) => {
        searchHandler(search);
        event.preventDefault();
    }

    // Assigning the navbar to a variable to make it easier to use with the return later.
    // Float left is needed to keep the other content right of the navbar instead of 
    // below it.
    const sideNavBar = <div style={{float:"left"}}>
    <Navbar style={{backgroundColor:"#B9B9BA",
    width: 150, height:"100vh",fontSize:"24px",lineHeight:"30px"}}
                className="justify-content-center">
        <Nav className="mr-auto"></Nav>
        {/* The  100vh is used to make it the entire screen height.
            the top:0px is used to keep the content attached to the top of the screen.*/}
        <Nav defaultActiveKey="home" 
        className="flex-column justify-content-center text-center" 
        style={{position:"absolute", top:"0px", height:"100vh"}}>


            {/* The Home button that is the logo.*/}
            <Nav.Link className="justify-content-center" eventKey="home">
                <img
                    alt=""
                    src={Logo}
                    width="120"
                    height="70"
                    className="d-inline-block align-top"
                />
            </Nav.Link>
            <ul className="nav flex-column mb-auto text-center">

                {/* The Profile Image above the word Profile.
                    Clicking Either will change to the profile page. */}
                <Nav.Link className="justify-content-center" eventKey="profile-link">
                    <img
                        alt=""
                        src={ProfileImage}
                        width="120"
                        height="70"
                        className="d-inline-block align-top"
                    />
                    Profile
                </Nav.Link>

                {/* The form takes in the on submit to make sure the page
                    does not refresh on submit. It also calls the search function. */}
                <Form className="text-center" 
                    onSubmit={(e)=>formHandler(e)}
                    style={{paddingLeft:"4px", paddingRight:"4px"}}
                >
                    
                    <input type="search"
                    className="form-control" 
                    placeholder="Search..." 
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                    aria-label="Search"
                    />
                </Form>

                {/* The link to the friends page. */}
                <Nav.Link eventKey="friends-link">
                    Friends
                </Nav.Link>
                
                {/* The link to the chat page. */}
                <Nav.Link eventKey="chat-link">
                    Chat
                </Nav.Link>
            </ul>
            
            {/* These elements are instead attached to the bottom. */}
            {/* The link to the settings page. */}
            <Nav.Link eventKey="settings-link">
                Settings
            </Nav.Link>

            {/* The link to logout. */}
            <NavLink 
                eventKey="logout-link" 
                style={{bottom:"0px"}}>
                Logout
            </NavLink>
        </Nav>
    </Navbar>
</div>
const otherNavbar = 
{/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ width: 200, height:"100vh"}}>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">


    <Nav className="mr-auto">
    <Nav.Link href="#features">Features</Nav.Link>

        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
    </Nav>
    <Nav>
    </Nav>
</Navbar.Collapse>
</Navbar> */}

    return(
        <div>
            {sideNavBar}
            <div>
                <App/>
            </div>
        </div>
        )
}

export default NavigationBar;