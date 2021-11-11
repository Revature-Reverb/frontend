This document will outline the structure of the application for future reference. Note that README.md contains instructions for starting the application, including all necessary dependencies and commands. 

# Frontend:
* Index.tsx contains the ReactDOM.render() method and creates the Router
* App.tsx renders the navbar besides the MainRouter
* MainRouter.tsx displays the specific page depending on the path
* The store is configured using redux toolkit, store and hooks are in the app folder
* Slices are in the slices folder
* Models are in the models folder. Note that since Firebase is managing user credentials, there are no user models other than a Token. Users are attributed to posts and comments on the backend, though the backend associates profiles to comments and posts as a field (also reflected in the frontend models), allowing the frontend to link profiles to comments and posts.
* The remote/reverb-api folder contains asynchronous axios call declarations.

# Backend:
* All controllers are located in the com.revature.controllers package
* Controllers call services located in the com.revature.services package
* Repository access classes are located in com.revature.repositories
* com.revature.security.firebase and com.revature.security.props contains configuration files that specify which endpoints require authentication
* A user object is associated to authenticated requests and is retrieved using “@AuthenticatedPrinciple User user” as a parameter in a controller endpoint

# Important Notes:
* The backend MUST be running at all times during app usage! User registration goes to firebase and the backend, and this is the only chance for the backend to create a corresponding user and profile in the database.
* We have little error handling on the frontend, so the above can lead to problems where users do not have profiles.
