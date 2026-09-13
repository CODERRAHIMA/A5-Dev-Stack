# 🚀 Dev Stack

**Dev Stack** is a modern web application that helps developers **explore, compare, and choose technologies** for building their ideal development stack. The project provides an intuitive interface for discovering tools across frontend, backend, database, language, styling, and DevOps categories.
Dev Stack makes technology selection **faster, simpler, and more organized**, helping developers make informed decisions when planning their projects.

## ✨ Features

- 🧩 Explore technologies by category and compare different technologies
- 🛠️ Build a personalized development stack
- 📱 Fully responsive and modern UI

## 🧰 Tech Stack

- ⚛️ React
- 🟦 TypeScript
- ⚡ Vite
- 🎨 Tailwind CSS
- 🌼 DaisyUI
- 🔷 React Icons
- 🔔 React Toastify

---

## 📚 React Concepts

### 1. What is JSX, and why is it used in React?

JSX(JavaScript XML) is a syntax that lets us write HTML-like code inside JavaScript.  
It makes React components easier to write and understand.

### 2. What is the difference between props and state?

- **Props** are data passed from a parent component to a child component.
- **State** is data managed inside a component that can change over time.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` lets a React component store and update data.

In this project, I used it to manage the **selected technologies/stack** and update the UI when technologies are added or removed.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` hook is used to handle side effects like data fetching by running code asynchronously after the component renders. 
It is necessary for loading JSON data because it prevents infinite render loops and stops network requests from blocking the user interface.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list.  
It helps React efficiently update only the items that have changed.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

For example, show an **empty stack message** when the user has not selected any technologies:

```tsx
{selectedStack.length === 0 && (
  <>
    ......
    <p>Your stack is empty.</p>
    ......
  </>
)}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

- A parent component passes data to a child component using **props**.
- A child can send data back to the parent by calling a **function passed through props**.

Example of this project,
```tsx
// Parent Component
const Technologies = (...) => {
  const [selectedStack, setSelectedStack] = useState<ITechnologies[]>([]);
  return (
    <SelectedStack selectedStack={selectedStack} setSelectedStack={setSelectedStack} />
  );
}

// Child Component
const SelectedStack = ({selectedStack, setSelectedStack}: ISelectedStackProps) => {
  const handleRemoveAll = () => {
    setSelectedStack([]);
  };
  return(
    ......
  );
}
```
