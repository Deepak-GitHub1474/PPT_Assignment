# ------- Photo Gallery App ------------- #

This is a simple React application that displays a photo gallery with details for each photo. 
The app uses React Router for navigation and makes API calls to fetch photo data.

## Components

# App.js
The main entry point of the application. It sets up the routing using React Router and renders 
different components based on the URL path.

# Gallery.js
This component fetches a list of photos from the API and displays them in a grid. Each photo is 
a link to its corresponding details page.

# PhotoDetails.js
This component displays detailed information about a specific photo. It fetches data for the selected 
photo based on the URL parameter.

# Libraries:

- React Router DOM: Used for client-side routing and navigation.
- Axios: Used to make API requests and handle responses.
- react-router-dom: Used for handling routes and navigation within the app.
- useParams: useParams Hook returns an object of key/value pairs from the current URL's dynamic parameters.

# API Endpoint
The app fetches photo data from the following API endpoint:
https://api.slingacademy.com/v1/sample-data/photos
