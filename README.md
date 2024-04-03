# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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



<!-- Navigation -->
import React from "react";
import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <nav className="navbarr">
      <div className="containerr">
        <h1 className="logo">Mentor Match</h1>
        <ul className="nav-links">
          <li>
            <Link to="/"></Link>Home
          </li>
          <li>
            <Link to="/about"></Link>About
          </li>
          <li>
            <Link to="/login" className="btn btn-primary">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
<!-- Landing PAge -->

import React from "react";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="heroine">
        <div className="container">
          <h1>Welcome to MentorMatch</h1>
          <p>Find the perfect mentor to guide you in your journey.</p>
        </div>
        <section className="get-started">
          <div className="container">
            <h2>Get Started</h2>
            <p>Sign up now to start your mentoring journey!</p>
            <Link to="/signup" className="btnn btn-primary">
              Sign Up
            </Link>
          </div>
        </section>
      </header>
    </div>
  );
};

export default LandingPage;


 from-[#ff80b5] to-[#9089fc]