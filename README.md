Name of the Project: Web Development Stack Technologies

Description: This projects presents various technologies about Web Development Stack technologies. In the explore Technologies section there are various technologies having their name, small description , their category and difficulty level. When a specific card is selected then it is added to the right side stack. The user can delete the selected card one by one or all the cards at a time. 

Features
1.Push & Pop Operations — Add or remove items from the stack with a click, and watch the UI update instantly.
2.Live Visualization — The stack is rendered visually (top to bottom), so you can see exactly how items stack up and get removed.
3.Empty State Handling — When the stack has no items, a friendly message is shown instead of a blank screen, guiding the user on what to do next.

Technology Used:
1.React.js
2.Tailwind CSS, DaisyUI
3.TypeScript / JavaScript (ES6+)
4.React-Toastify (NPM Package)
5.JSON (for technology data)
6.Vite (build tool)

1. What is JSX, and why is it used in React?

JSX is a syntax extension that lets write HTML-like code directly inside JavaScript. It's used in React because it makes describing what the UI should look like much easier to read and write, compared to building elements manually with plain JavaScript.

2.Te What is the difference between props and state?

Props are data passed into a component from its parent — they're read-only from the child's perspective. State is data that a component manages itself and can change over time, usually in response to user actions. In short: props come from outside, state lives inside.

3. What does the useState hook do, and where did you use it in this project?

useState lets a component hold and update its own local data, and re-renders the component whenever that data changes. In this project, I used useState to keep track of the stack array itself (the list of items) and to store the current input value for new items being pushed.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect lets you run code in response to a component rendering or specific values changing — commonly used for things like fetching data. I used useEffect to load the JSON data once when the component first mounts, so the stack could be pre-filled with initial items as soon as the page loads.

5. Why does every item in a .map() list need a unique key prop?

React uses the key prop to tell items in a list apart so it can efficiently figure out which ones were added, removed, or changed. Without a unique key, React can get confused about which item is which, leading to bugs or unnecessary re-renders.

6. What is conditional rendering? Show one place you used it (example: the empty stack message).

Conditional rendering means showing different UI depending on a condition — like showing one thing if data exists and something else if it doesn't. Example from this project:

jsx
{stack.length === 0 ? (
  <p>The stack is empty. Push an item to get started!</p>
) : (
  <ul>
    {stack.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
)}
7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data down to a child using props — just like passing arguments to a function. For a child to send data back up, the parent passes down a function as a prop, and the child calls that function (often with some data as an argument) whenever it needs to communicate something, like a button click or new input value.
