# Challenge: Library

## Objective
Refactor the project provided by R5, implementing the Google Books API and an additional public API for book searches.

### Repository with code to refactor:
[https://github.com/cfvargas/R5-test/tree/master/src](https://github.com/cfvargas/R5-test/tree/master/src)

The idea is to fork this repository and create a personal one, which should be shared with the R5 team upon completion of the test with the code of the exercise.

## Proposed Scope
- Perform searches from the route `/`, which should query the Google Books API.
- Perform searches from the route `/bookstore`, which should query another book API (any other API can be used).
- On the `/` route, the user can only see the book results and cannot perform any other actions.
- On the `/bookstore` route, the user can view the book details, add to favorites, and write a comment (the last two saved locally).
- Implement tests for the created routes.
- Refactor the tests created in the project.

## Technical Requirements
1. Develop with React 17.
2. Any library for routing can be used.
3. Create a repository on GitHub/GitLab/Bitbucket/other and keep uploading the commits.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
