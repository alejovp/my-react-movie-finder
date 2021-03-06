# My React Movie Finder

This is a simple movie finder web app created with react + [redux](https://redux.js.org/) and [The Movie DB API](https://www.themoviedb.org/documentation/api).

You can see the demo here: http://my-react-movie-finder.s3-website.eu-west-3.amazonaws.com/.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

In order to run this project you need to have a 'The Mobie DB' API Key. This key will be used by the action creators and it's imported from a Constants file with the name of `API_KEY`.

>If you don't have an API key you can generete one following this steps: [Getting Started](https://developers.themoviedb.org/3/getting-started/introduction) (You will need to sign up first).

Your constants.js file must be like this:

```
const Constants = {
  API_KEY: "<Your API key>"
}

export default Constants;
```

And needs to be placed in the root of the src folder (or change the path in the actions/index.js file to your file location).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Table of Contents

- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.