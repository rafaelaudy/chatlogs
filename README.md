# Chatlogs

## Questions:
- How would you achieve this with Redux?
```
I would remove any mention to the React state in the components and add that behaviour information on the redux store.

For that I would dispatch actions on the components to signal the UI changes.
Create the reducers to change the store based on the actions raised.
And I would use middleware library, like redux-thunk, to request the chatlog data from the API.
```
  - How would you handle an error from the API?
```
I could catch error with a catch on the request promise and add that information to the Redux store.
The UI would react to that showing a user friendly message on the screen.
```
  - If you were to continue this application, what would you add?
```
CI, Redux, a middleware library, SASS, SMACSS, a real server for the API, high level functional tests and integration, monitoring tools.
Of course that would change depending on how big the team thinks that the application may grow.
```
- If you were to deploy this application (or any web application) to production, how would you personally do it?
```
I would like to have a one-click deployment infrastructure in place.
That would mean having a CI tool which would run:

  * Unit test;
  * Functional tests;
  * Integrations tests:
  * Check coverage;
  * Deployment scripts.

I also would like to have different hosts for the UI and the API so it gets easier to deploy and scale the app.
```
  - Finally, what did you think of the test? 😀
```
Fun test, small without being shallow, quite a feat :)
It was fun to use react-scripts as well, I had never used it before.
I did update the libraries since I was having some issues adding enzyme with the old versions of React and react-scripts.

Also, I added the following libraries:
  *  Enzyme and it's dependencies;
  *  Eslint and it's dependencies.

Sorry for not asking beforehand, I coded this at night :)
```