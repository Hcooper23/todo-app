# LAB - Class 31

## Project: Context API

### Author: Hayden Cooper

### Problem Domain  

In Phase 1, we’re going to perform some refactoring of a Todo application built by another team. This application mixes application state and user settings at the top level and passes things around. It was a good proof of concept, but we need to make this production ready.

    - Create a Detailed UML.
    - Properly modularize the application into separate components, note the proposed file structure below.
    - Implement the Context API to make some basic application settings available to components.
        - Show three items by default.
        - Hide completed items by default.
        - Add the sort word ‘difficulty’ by default.
    - Style the application using the Mantine Component API{target:_blank}.
        - NOTE: The expectation to style this entire component in one day is likely unrealistic. The recommendation is to implement the required functionality, then systematically begin styling with Mantine. Match the comp image(s) as closely as possible. 80% of the design work will likely take 20% of your time. By the end of the week, being mostly there with style is the goal!

### Links and Resources

- [GitHub Actions ci/cd](https://github.com/Hcooper23/todo-app/actions/new)
- [front-end application](https://codesandbox.io/p/github/Hcooper23/todo-app/main?workspaceId=d6b0a7b3-fc47-4e4d-b1fa-ce55109e7d9e)

### Collaborators

### Setup

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

