export const modulesData = [
  {
    id: 1,
    title: "React Basics & JSX",
    description: "Introduction to React, virtual DOM, and JSX syntax.",
    lessons: ["Advantages of React", "Creating Elements", "JSX Syntax & Expressions"],
    icon: "FaReact"
  },
  {
    id: 2,
    title: "Components & Props",
    description: "Building reusable UI with functional components and data flow.",
    lessons: ["Functional Components", "Props & Data Flow", "Component Composition"],
    icon: "FaPuzzlePiece"
  },
  {
    id: 3,
    title: "State & Events",
    description: "Managing interactive UIs with useState and event handlers.",
    lessons: ["useState Hook", "Event Handling", "Updating Objects/Lists in State with Immutability"],
    icon: "FaHandPointer"
  },
  {
    id: 4,
    title: "Rendering & Lists",
    description: "Conditional rendering and rendering lists with keys.",
    lessons: ["Conditional Rendering", "Lists and Keys", "Reconciliation & Batch Updating"],
    icon: "FaListUl"
  },
  {
    id: 5,
    title: "Side Effects & Data Fetching",
    description: "Using useEffect for side effects and fetching data from APIs.",
    lessons: ["useEffect & Rules of Hooks", "API Calls with fetch", "Scheduler Methods & Clearing Intervals"],
    icon: "FaServer"
  },
  {
    id: 6,
    title: "Routing & Navigation",
    description: "Building Single Page Applications with React Router.",
    lessons: ["Multi-page vs SPA", "React Router & Path Parameters", "useNavigate & Navigate"],
    icon: "FaRoute"
  },
  {
    id: 7,
    title: "Forms & Storage",
    description: "Handling forms, inputs, and local browser storage.",
    lessons: ["Controlled vs Uncontrolled Inputs", "Local Storage & Cookies", "JSON Methods"],
    icon: "FaWpforms"
  },
  {
    id: 8,
    title: "Authentication & Context API",
    description: "Managing global state and securing routes.",
    lessons: ["Auth vs Authorization", "JWT Token Handling & Protected Routes", "Context API, Provider, useContext"],
    icon: "FaLock"
  },
  {
    id: 9,
    title: "Best Practices & Debugging",
    description: "Common pitfalls and how to debug React applications.",
    lessons: ["Common Mistakes (import/export/state)", "Debugging with React DevTools", "Third-party Packages"],
    icon: "FaBug"
  }
];

export const labsData = [
  {
    id: 1,
    title: "Greeting App",
    description: "A simple app to practice props and conditional rendering.",
    difficulty: "Beginner",
    path: "/labs/greeting"
  },
  {
    id: 2,
    title: "Task Manager",
    description: "Practice useState, forms, and list rendering with keys.",
    difficulty: "Intermediate",
    path: "/labs/tasks"
  },
  {
    id: 3,
    title: "Character API Explorer",
    description: "Fetch data from an external API and display profiles.",
    difficulty: "Intermediate",
    path: "/labs/characters"
  },
  {
    id: 4,
    title: "Product Catalog",
    description: "Explore routing with path parameters and search filtering.",
    difficulty: "Advanced",
    path: "/labs/products"
  },
  {
    id: 5,
    title: "Authentication Flow",
    description: "Mock login dashboard using Context API and Protected Routes.",
    difficulty: "Advanced",
    path: "/labs/auth"
  }
];

export const quizQuestions = [
  {
    id: 1,
    question: "What is the correct way to update an array in React state?",
    options: [
      "stateArray.push(newItem)",
      "setStateArray(stateArray.push(newItem))",
      "setStateArray([...stateArray, newItem])",
      "stateArray = [...stateArray, newItem]"
    ],
    answer: 2
  },
  {
    id: 2,
    question: "Which hook is used for performing side effects in functional components?",
    options: ["useState", "useEffect", "useContext", "useReducer"],
    answer: 1
  },
  {
    id: 3,
    question: "Why do we need to pass a 'key' prop when rendering a list of elements?",
    options: [
      "To style the elements differently",
      "To help React identify which items have changed, been added, or removed",
      "To pass data to the child components",
      "Keys are optional and don't affect anything"
    ],
    answer: 1
  },
  {
    id: 4,
    question: "What is the difference between Authentication and Authorization?",
    options: [
      "They are exactly the same thing",
      "Authentication is verifying who you are, Authorization is verifying what you have access to",
      "Authorization is verifying who you are, Authentication is verifying what you have access to",
      "Authentication is used for servers, Authorization is for clients"
    ],
    answer: 1
  },
  {
    id: 5,
    question: "What does the Context API solve in React?",
    options: [
      "It makes the application run faster",
      "It prevents prop drilling by providing a way to share values between components",
      "It replaces the need for local component state",
      "It allows you to write components without JSX"
    ],
    answer: 1
  }
];
