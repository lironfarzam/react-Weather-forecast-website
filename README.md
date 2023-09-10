[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=7785018&assignment_repo_type=AssignmentRepo)
# React exercise - Internet Programming Course
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Authors:

Liron Farzam - lironfa@edu.hac.ac.il <br>
<br>

## General Information:
<h3>
Website for the weather forecast for the coming week.
</h3><br>

<h2>Home:</h2>
<p>
    This page shows a list of reserved cities. When the user selects a city he will get the weather forecast for the coming week.
    In the forecast we will represent:
    <ul>
        <li>Verbal description.</li>
        <li>Icon represents the weather.</li>
        <li>Temperature (maximum - minimum).</li>
        <li>Wind speed in km/h.</li>
    </ul>
    <br>
</p>


<h2>AddLocation:</h2>
<p>
    The user can add a city to the saved citys.
    by selecting the city name, and cordenates.

    The new city will be added to the list of saved cities, and the user will be able to delete it.
    there will be no dubell name citys.
</p>
<br>

<h2>Developer Information:</h2>
<p>
    Technologies used:
    
        - React.js
        - React-router-dom
        - Bootstrap
        - Axios
        - React-bootstrap
        - React-icons
        - Font-awesome
        - React-weather-icons
        
    API:
        - OpenWeatherMap
        - www.7timer.info - http://www.7timer.info/doc.php?lang=en#api
    
    Storage (localStorage):
        Saved cities - Array of objects with the following properties:
            - name - The name of the city.
            - lat - The latitude of the city.
            - lon - The longitude of the city.
    
</p>


### libraries used for this project:

    - React:
        - create-react-app
        - react-router-dom
        - react-bootstrap
        - react-icons
    - axios:
        - axios (used for the weather forecast)
    - bootstrap:
        - bootstrap
    

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`


Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
