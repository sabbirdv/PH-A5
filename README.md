# Dev Stack Builder

**Dev Stack Builder is a simple React website where users can see different technologies and make their own technology stack.**


## Technologies Used

* React
* JavaScript
* Tailwind CSS
* DaisyUI
* React Icons
* React Toastify
* JSON
* Vite
* Varcel (Deployment)


## Features
1. Users can see different technologies with their name, category, rating, difficulty and description.
2. Users can add technologies to their own stack. The same technology cannot be added two times.
3. Users can remove selected technology one by one from the stack or remove all selected technologies.




## React Questions

### 1. What is JSX, and why is it used in React?
JSX is a way to write HTML inside JavaScript or TypeScript.

### 2. What is the difference between props and state?
Props are used to send data from a parent component to a child component. 
State is used to store data that can change inside a component.

### 3. What does the useState hook do, and where did you use it in this project?
useState is useed to store a default value & if the value changed it update the specific UI section.
I used it to manage the selected technologies in the stack.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
useEffect runs code after the component renders. 
It can be used to load data from a JSON file when the component runs.

### 5. Why does every item in a .map() list need a unique key prop?
React uses the key to identify each item in a list.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing something based on a condition. 
I used it in the Your Stack section. When there are no selected technologies, it shows an empty message.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent sends data to a child using props. A child can send data back by calling a function.
