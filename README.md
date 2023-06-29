# LAB - Class 31

## Project: Context API

### Author: Hayden Cooper

### Problem Domain  

In Phase 2, we’re going to extend the functionality of our application by allowing the user to make some decisions on how they would like the application to function. Specifically, we’ll let them make changes to 2 settings.

- Implement the Context API to make some basic application settings available to components.
  - How many To Do Items to show at once.
  - Whether or not to show completed items.
  - Hint: if reusing the custom useForm() hook, event validation may be necessary if using any Mantine component other than <TextInput />.
- Provide the users with a form where they can change the values for those settings.
  - This should be given in the form of a new component, perhaps linked to from the main navigation.
  - Hint: Use Browser Router to create the page/route/component for this.
  - Once settings are updated, render the updated settings to the right of the “form”. Consider using <Grid />, <Card />, and <When /> components.
- Save the users choices in Local Storage.
- Retrieve their preferences from Local Storage and apply them to the application on startup.

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
![Todo Comp](./Screenshot%202023-06-29%20at%2011.14.01%20AM.png)
![Settings Comp](./Screenshot%202023-06-29%20at%2011.14.13%20AM.png)
