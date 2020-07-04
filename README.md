# misfits-market-test

[![Netlify Status](https://api.netlify.com/api/v1/badges/92cfec53-5f31-4fc0-9658-b8b328e0bac1/deploy-status)](https://app.netlify.com/sites/misfits-market-test/deploys) [![Heroku](https://heroku-badge.herokuapp.com/?app=misfits-market-test)](<https://misfits-market-test.herokuapp.com/>)

## Intro

Forked from my [react-boilerplate-app](<https://github.com/willbuckingham/react-boilerplate-app>) which is based on Create React App, to get started.

Added:

* Material UI (which I've been meaning to add to the boiler plate anyways, so I'll back port that later)
* There are a basic set of tests, though I would not consider them fully covered.
* Fetch was setup as a quick request.
* Thought a % of MSRP call out was a nice touch
* Also added a placeholder image that ideally would be in the JSON and would reflect the product.

## Room for Improvement

* Use Redux Store so that data is scoped to Home page, and cart pulls its own data instead of passing thru page
* Relocated API calls and handle api errors
* Improve logic around notification widget so that multiple show up if action taken in quick succession
* While it wasnt technically a requirement, we'd prob want to have more support to remove items, and I prob would reconsider the text field as it is clunky, a dropdown might be better though depends on your quantity range.  I've seen some places just use a `+` `-` buttons and the UI works pretty well, though a notification every addition might be annoying.  Alternatively, you could make all your selections of quantity without clicking add and then click add at the end, but that works best only when entire list is on page from the beginning.
* Yes, quantity on selection page resets to one after adding, though I admit this might not be best.
* Cart would normally have functionality, but for sake of test, didn't.

## Commands

In the project directory, you can run:

### `npm start`


Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test` & `npm test:coverage`

Launches the tests in watch mode or in coverage report mode.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run lint` & `npm run lint:fix`

Runs the code linting and applies fix respectively.
