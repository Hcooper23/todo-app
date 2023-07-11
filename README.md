# LAB - Class 33

## Project: <Login /> and <Auth />

### Author: Hayden Cooper

### Problem Domain  

In Phase 3, we’d like to extend the functionality of the application by requiring users be logged in to view items and also restrict access based on user type. The user stories from Phases 1, and 2 remain unchanged. For this phase, we are now adding the following new user stories.

- As a user, I want to provide a way for other users to create new accounts.
- As a user, I want to provide a way for all users to login to their account.
- As a user, I want to make sure that my To Do items are only viewable to users that have logged in with a valid account.
- As a user, I want to ensure that only fellow users that are allowed to “create”, based on their user type, can add new To Do Items.
- As a user, I want to ensure that only fellow users that are allowed to “update”, based on their user type, can mark To Do Items complete.
- As a user, I want to ensure that only fellow users that are allowed to “delete”, based on their user type, can delete new To Do Items.

### Links and Resources

- [GitHub Actions ci/cd](https://github.com/Hcooper23/todo-app/actions/new)
- [front-end application](https://codesandbox.io/p/github/Hcooper23/todo-app/main?workspaceId=d6b0a7b3-fc47-4e4d-b1fa-ce55109e7d9e)

### Collaborators

### Setup

run npm i for complete package.json 

#### `.env` requirements (where applicable)

#### How to initialize/run your application (where applicable)

- e.g. `npm start`

#### How to use your library (where applicable)

#### Features

- The consumption of the global state by components is facilitated by setting up a provider with context at the root index level of the app. This allows the context information established in the Todo component to be passed down to all components through the App component, enabling them to access and utilize the global state.

- The useForm() operation is utilized to handle form submission and the modification of input fields. This operation involves passing the initial state of the form as a parameter and returning the values and handleInputChange function, which can be employed within the form component to manage form data and input field changes.

#### Tests

npm test

#### UML

![UML](assets/Lab31.png)

