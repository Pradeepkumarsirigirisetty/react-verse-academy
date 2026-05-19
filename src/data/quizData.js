// Module-wise quiz data derived from the reading material
// Answer pattern for each module: Q1: A(0), Q2: A(0), Q3: B(1), Q4: B(1), Q5: C(2), Q6: C(2), Q7: D(3), Q8: D(3)

export const moduleQuizData = {
  1: {
    title: "React Basics & JSX",
    questions: [
      {
        id: 1,
        question: "What is React primarily used for?",
        options: [
          "Building fast, interactive user interfaces",
          "Managing backend databases directly",
          "Styling web pages with CSS animations",
          "Creating operating system kernels"
        ],
        answer: 0
      },
      {
        id: 2,
        question: "What is the Virtual DOM in React?",
        options: [
          "A lightweight copy of the actual DOM kept in memory",
          "A physical server hosted by Facebook",
          "A browser extension for debugging JavaScript",
          "A deprecated feature replaced by real DOM manipulation"
        ],
        answer: 0
      },
      {
        id: 3,
        question: "Which of the following is a key advantage of React?",
        options: [
          "Bi-directional data flow that mutates parent state",
          "Component-Based Architecture for building reusable UI",
          "Direct real DOM manipulation for every single keystroke",
          "Built-in SQL database engine"
        ],
        answer: 1
      },
      {
        id: 4,
        question: "Under the hood, what does JSX compile down to?",
        options: [
          "document.getElementById() calls",
          "React.createElement() calls",
          "HTML5 Web Components",
          "Vanilla CSS stylesheets"
        ],
        answer: 1
      },
      {
        id: 5,
        question: "How do you embed a JavaScript expression inside JSX?",
        options: [
          "Inside square brackets []",
          "Inside parentheses ()",
          "Inside curly braces {}",
          "Inside angle brackets <>"
        ],
        answer: 2
      },
      {
        id: 6,
        question: "Which attribute name must be used in JSX instead of the standard HTML 'class'?",
        options: [
          "classID",
          "styleClass",
          "className",
          "cssClass"
        ],
        answer: 2
      },
      {
        id: 7,
        question: "What is the process of comparing the new Virtual DOM with the previous snapshot called?",
        options: [
          "Compiling",
          "Transpiling",
          "Injecting",
          "Diffing"
        ],
        answer: 3
      },
      {
        id: 8,
        question: "What is the process of applying minimal changes to the real DOM called?",
        options: [
          "Batching",
          "Hydration",
          "Rendering",
          "Reconciliation"
        ],
        answer: 3
      }
    ]
  },

  2: {
    title: "Components & Props",
    questions: [
      {
        id: 1,
        question: "What convention should be used when naming React components?",
        options: [
          "PascalCase (e.g., StudentCard)",
          "camelCase (e.g., studentCard)",
          "snake_case (e.g., student_card)",
          "kebab-case (e.g., student-card)"
        ],
        answer: 0
      },
      {
        id: 2,
        question: "What are React components best described as?",
        options: [
          "Building blocks that encapsulate their own structure, style, and logic",
          "Global variables that store user passwords",
          "External CSS files for animating layouts",
          "Database tables for storing student records"
        ],
        answer: 0
      },
      {
        id: 3,
        question: "What is the primary purpose of 'props' in React?",
        options: [
          "To store local state that changes over time",
          "To pass data from a parent component to a child component",
          "To directly mutate the real DOM elements",
          "To fetch data from external REST APIs"
        ],
        answer: 1
      },
      {
        id: 4,
        question: "Which of the following is a strict rule regarding props?",
        options: [
          "Props should be modified by the child component whenever user clicks",
          "Props are read-only and a child should never modify its own props",
          "Props can only contain string values, never numbers or functions",
          "Props must be stored in localStorage before rendering"
        ],
        answer: 1
      },
      {
        id: 5,
        question: "What does 'Component Composition' refer to in React?",
        options: [
          "Compiling React code into production bundles",
          "Deleting unused components from the codebase",
          "Building complex UIs by combining simpler components",
          "Converting functional components into class components"
        ],
        answer: 2
      },
      {
        id: 6,
        question: "Which special prop is used to pass wrapper/layout content into a component?",
        options: [
          "content",
          "elements",
          "children",
          "innerHTML"
        ],
        answer: 2
      },
      {
        id: 7,
        question: "Why does React enforce a one-way (unidirectional) data flow?",
        options: [
          "To make the application run slower",
          "To allow child components to overwrite parent state",
          "To prevent the use of JSX syntax",
          "To make the application predictable and easy to debug"
        ],
        answer: 3
      },
      {
        id: 8,
        question: "How does a functional component receive props?",
        options: [
          "As a global window variable",
          "As a string argument",
          "As an array of DOM nodes",
          "As an object passed to the function argument"
        ],
        answer: 3
      }
    ]
  },

  3: {
    title: "State & Events",
    questions: [
      {
        id: 1,
        question: "What does the useState hook return?",
        options: [
          "An array with the current state value and a setter function",
          "An object with the previous state and a reset function",
          "A boolean indicating if the component has rendered",
          "A DOM element reference"
        ],
        answer: 0
      },
      {
        id: 2,
        question: "Why should you never modify state directly (e.g. count = 5)?",
        options: [
          "Because React won't know it changed and won't trigger a re-render",
          "Because JavaScript throws a syntax error immediately",
          "Because it causes the browser tab to crash",
          "Because state is permanently locked in memory"
        ],
        answer: 0
      },
      {
        id: 3,
        question: "How are React events named?",
        options: [
          "lowercase (e.g., onclick)",
          "camelCase (e.g., onClick)",
          "UPPERCASE (e.g., ONCLICK)",
          "kebab-case (e.g., on-click)"
        ],
        answer: 1
      },
      {
        id: 4,
        question: "What do you pass to a React event handler like onClick?",
        options: [
          "A string containing JavaScript code",
          "A function reference (e.g., onClick={handleClick})",
          "A function call (e.g., onClick={handleClick()})",
          "A boolean value (e.g., onClick={true})"
        ],
        answer: 1
      },
      {
        id: 5,
        question: "How does React detect changes in state objects or arrays?",
        options: [
          "By checking the byte size of the object",
          "By deeply comparing every nested property on every keystroke",
          "By comparing references (object identity)",
          "By asking the server if the data changed"
        ],
        answer: 2
      },
      {
        id: 6,
        question: "What is the correct way to add an item to an array in React state?",
        options: [
          "items.push(newItem)",
          "setItems(items.push(newItem))",
          "setItems([...items, newItem])",
          "items[items.length] = newItem"
        ],
        answer: 2
      },
      {
        id: 7,
        question: "Which method is commonly used to remove an item from an array in state immutably?",
        options: [
          "array.splice()",
          "array.pop()",
          "array.delete()",
          "array.filter()"
        ],
        answer: 3
      },
      {
        id: 8,
        question: "How do you prevent the default form submission behavior (page reload) in React?",
        options: [
          "event.stopPropagation()",
          "event.exit()",
          "return false",
          "event.preventDefault()"
        ],
        answer: 3
      }
    ]
  },

  4: {
    title: "Rendering & Lists",
    questions: [
      {
        id: 1,
        question: "Which operator is commonly used for inline conditional rendering of two different views?",
        options: [
          "Ternary operator (condition ? a : b)",
          "Bitwise OR (|)",
          "Nullish coalescing (??)",
          "Exponentiation (**)"
        ],
        answer: 0
      },
      {
        id: 2,
        question: "What is the early return pattern in React?",
        options: [
          "Returning JSX (like a loading message) before the main return statement",
          "Exiting the browser application automatically",
          "Returning a function inside useEffect",
          "Canceling an ongoing HTTP request"
        ],
        answer: 0
      },
      {
        id: 3,
        question: "Which logical operator is used to render an element only if a condition is truthy?",
        options: [
          "Logical OR (||)",
          "Logical AND (&&)",
          "Logical NOT (!)",
          "Strict Equality (===)"
        ],
        answer: 1
      },
      {
        id: 4,
        question: "Which array method is used to transform a list of data into JSX elements?",
        options: [
          ".filter()",
          ".map()",
          ".reduce()",
          ".forEach()"
        ],
        answer: 1
      },
      {
        id: 5,
        question: "Why does every element in a React list need a unique 'key' prop?",
        options: [
          "To apply unique CSS styles to each list item",
          "To pass the item's index to the child component",
          "To help React efficiently track which items changed, were added, or removed",
          "To encrypt the list data in the DOM"
        ],
        answer: 2
      },
      {
        id: 6,
        question: "Why is using the array index as a key generally discouraged if the list can change?",
        options: [
          "Because indexes are always negative numbers",
          "Because strings cannot be used as keys",
          "Because reordering or filtering the list can cause subtle rendering bugs",
          "Because React throws a fatal error if index is used"
        ],
        answer: 2
      },
      {
        id: 7,
        question: "What does React do when multiple state updates occur in the same event handler?",
        options: [
          "It re-renders the component immediately after each individual update",
          "It ignores all updates except the first one",
          "It throws a warning in the console",
          "It batches them into a single re-render for maximum performance"
        ],
        answer: 3
      },
      {
        id: 8,
        question: "What is the algorithm React uses to compare Virtual DOM trees called?",
        options: [
          "Binary Search",
          "Bubble Sort",
          "Dijkstra's Algorithm",
          "Reconciliation"
        ],
        answer: 3
      }
    ]
  },

  5: {
    title: "Side Effects & Data Fetching",
    questions: [
      {
        id: 1,
        question: "What is considered a 'side effect' in a React component?",
        options: [
          "Operations that reach outside the component (API calls, timers, DOM manipulation)",
          "Updating a local variable inside a loop",
          "Passing props from parent to child",
          "Writing CSS classes in a stylesheet"
        ],
        answer: 0
      },
      {
        id: 2,
        question: "When does the useEffect hook run?",
        options: [
          "After the component renders",
          "Before the component renders",
          "Only when the user clicks a button",
          "During the Webpack build process"
        ],
        answer: 0
      },
      {
        id: 3,
        question: "What does an empty dependency array [] in useEffect mean?",
        options: [
          "The effect runs after every single render",
          "The effect runs exactly once when the component mounts",
          "The effect never runs at all",
          "The effect runs only when the component unmounts"
        ],
        answer: 1
      },
      {
        id: 4,
        question: "What happens if you omit the dependency array entirely in useEffect?",
        options: [
          "It causes a syntax error",
          "The effect runs after every render",
          "The effect runs only on mount",
          "The effect runs only on unmount"
        ],
        answer: 1
      },
      {
        id: 5,
        question: "How do you perform cleanup in useEffect (e.g. clearing a timer)?",
        options: [
          "By calling React.cleanup()",
          "By passing a second function argument to useEffect",
          "By returning a cleanup function from inside the effect",
          "By deleting the component file"
        ],
        answer: 2
      },
      {
        id: 6,
        question: "Which browser API is most commonly used inside useEffect to fetch data?",
        options: [
          "localStorage.getItem()",
          "document.write()",
          "fetch()",
          "window.alert()"
        ],
        answer: 2
      },
      {
        id: 7,
        question: "Why is it important to handle loading and error states when fetching data?",
        options: [
          "To increase the bundle size of the application",
          "To prevent the use of JSX",
          "To force the user to reload the page",
          "To provide a smooth, clear, and professional user experience"
        ],
        answer: 3
      },
      {
        id: 8,
        question: "What must you do with setInterval inside a useEffect cleanup function?",
        options: [
          "Pause it with Math.pause()",
          "Restart it with setInterval()",
          "Double the interval time",
          "Clear it with clearInterval()"
        ],
        answer: 3
      }
    ]
  },

  6: {
    title: "Routing & Navigation",
    questions: [
      {
        id: 1,
        question: "What is a Single Page Application (SPA)?",
        options: [
          "An app that loads once and dynamically swaps content without full page reloads",
          "A website that only has one single paragraph of text",
          "A web page that cannot be accessed on mobile devices",
          "A static HTML file without any JavaScript"
        ],
        answer: 0
      },
      {
        id: 2,
        question: "Which library is the industry standard for routing in React?",
        options: [
          "react-router-dom",
          "react-navigation-mesh",
          "express-router",
          "window-location-api"
        ],
        answer: 0
      },
      {
        id: 3,
        question: "Which component is used to wrap the entire application to enable routing?",
        options: [
          "<RouterSwitch>",
          "<BrowserRouter>",
          "<NavContainer>",
          "<PageWrapper>"
        ],
        answer: 1
      },
      {
        id: 4,
        question: "How do you define a dynamic path parameter in a Route (e.g. student ID)?",
        options: [
          "path=\"/students?id\"",
          "path=\"/students/:id\"",
          "path=\"/students[id]\"",
          "path=\"/students/id\""
        ],
        answer: 1
      },
      {
        id: 5,
        question: "Which hook is used to extract dynamic path parameters from the URL?",
        options: [
          "useLocation()",
          "useRoute()",
          "useParams()",
          "useSearchParams()"
        ],
        answer: 2
      },
      {
        id: 6,
        question: "Which hook provides programmatic navigation (e.g. redirecting after login)?",
        options: [
          "useHistory()",
          "useRedirect()",
          "useNavigate()",
          "useProgrammatic()"
        ],
        answer: 2
      },
      {
        id: 7,
        question: "Which component is used for declarative redirects (e.g. protecting a route)?",
        options: [
          "<Redirector>",
          "<Switch>",
          "<Forward>",
          "<Navigate>"
        ],
        answer: 3
      },
      {
        id: 8,
        question: "Which component should be used instead of an HTML <a> tag to link between SPA pages?",
        options: [
          "<Href>",
          "<Anchor>",
          "<Jump>",
          "<Link>"
        ],
        answer: 3
      }
    ]
  },

  7: {
    title: "Forms & Storage",
    questions: [
      {
        id: 1,
        question: "What is a controlled input in React?",
        options: [
          "An input where React state is the single source of truth driving the value",
          "An input that can only be edited by an administrator",
          "An input that automatically submits to a SQL database",
          "An input that uses the browser's default DOM state"
        ],
        answer: 0
      },
      {
        id: 2,
        question: "What is an uncontrolled input in React?",
        options: [
          "An input where the DOM holds the value and you read it using a ref",
          "An input that has no event handlers or attributes",
          "An input that randomly changes its value",
          "An input that cannot be styled with CSS"
        ],
        answer: 0
      },
      {
        id: 3,
        question: "Why are controlled inputs generally preferred over uncontrolled inputs?",
        options: [
          "They render 10 times faster in the Virtual DOM",
          "They give you full control over instant validation, formatting, and state synchronization",
          "They do not require the use of the useState hook",
          "They automatically store data in cloud servers"
        ],
        answer: 1
      },
      {
        id: 4,
        question: "What is the main characteristic of localStorage?",
        options: [
          "It gets deleted automatically when the user closes the browser tab",
          "It persists data across browser sessions even after closing the tab",
          "It can store up to 500GB of video files",
          "It is only accessible inside class components"
        ],
        answer: 1
      },
      {
        id: 5,
        question: "How does localStorage store data?",
        options: [
          "As binary buffers",
          "As live JavaScript objects",
          "As key-value string pairs",
          "As encrypted SQL tables"
        ],
        answer: 2
      },
      {
        id: 6,
        question: "Which method is used to convert a JavaScript object into a string for localStorage?",
        options: [
          "JSON.parse()",
          "Object.toString()",
          "JSON.stringify()",
          "JSON.concat()"
        ],
        answer: 2
      },
      {
        id: 7,
        question: "Which method is used to convert a JSON string back into a JavaScript object?",
        options: [
          "JSON.decode()",
          "JSON.objectify()",
          "JSON.revert()",
          "JSON.parse()"
        ],
        answer: 3
      },
      {
        id: 8,
        question: "What is the primary difference between localStorage and cookies?",
        options: [
          "Cookies can store larger files than localStorage",
          "localStorage is sent to the server with every HTTP request",
          "Cookies cannot be read by JavaScript",
          "Cookies have expiration dates and are sent with HTTP requests"
        ],
        answer: 3
      }
    ]
  },

  8: {
    title: "Authentication & Context API",
    questions: [
      {
        id: 1,
        question: "What does Authentication verify in a web application?",
        options: [
          "\"Who are you?\" — verifying user identity (e.g., email/password login)",
          "\"What can you do?\" — verifying admin permissions",
          "The version of React installed in package.json",
          "The IP address of the database server"
        ],
        answer: 0
      },
      {
        id: 2,
        question: "What does Authorization verify in a web application?",
        options: [
          "\"What can you do?\" — checking permissions and access control",
          "\"Who are you?\" — verifying user identity",
          "The SSL certificate of the website",
          "The speed of the user's internet connection"
        ],
        answer: 0
      },
      {
        id: 3,
        question: "What is a JWT (JSON Web Token)?",
        options: [
          "A physical hardware key used for logging in",
          "A compact, URL-safe token containing encoded user information sent by the server",
          "A React component for rendering login forms",
          "A built-in browser database"
        ],
        answer: 1
      },
      {
        id: 4,
        question: "Where is a JWT typically stored on the client side?",
        options: [
          "In the Virtual DOM tree",
          "In localStorage or httpOnly cookies",
          "In package.json",
          "In a CSS stylesheet"
        ],
        answer: 1
      },
      {
        id: 5,
        question: "What specific problem does the Context API solve in React?",
        options: [
          "Slow rendering speeds of large images",
          "Syntax errors in JSX files",
          "Prop drilling — passing data through many levels of components",
          "Network latency during API calls"
        ],
        answer: 2
      },
      {
        id: 6,
        question: "Which function is used to create a new Context?",
        options: [
          "React.makeContext()",
          "React.initContext()",
          "createContext()",
          "buildContext()"
        ],
        answer: 2
      },
      {
        id: 7,
        question: "Which component is used to wrap the component tree and supply the context value?",
        options: [
          "<Context.Supplier>",
          "<Context.Source>",
          "<Context.Emitter>",
          "<Context.Provider>"
        ],
        answer: 3
      },
      {
        id: 8,
        question: "Which hook is used to consume a context value in a functional component?",
        options: [
          "useValue()",
          "useGlobal()",
          "useProvider()",
          "useContext()"
        ],
        answer: 3
      }
    ]
  },

  9: {
    title: "Best Practices & Debugging",
    questions: [
      {
        id: 1,
        question: "Which of the following is a strict rule of React Hooks?",
        options: [
          "Hooks must always be called at the top level, never inside loops, conditions, or nested functions",
          "Hooks can only be called inside class components",
          "Hooks must be named starting with 'get' (e.g., getCount)",
          "Hooks automatically delete unused code"
        ],
        answer: 0
      },
      {
        id: 2,
        question: "What happens if you mutate state directly (e.g., items.push('new'))?",
        options: [
          "React does not detect the reference change and will not re-render the UI",
          "React automatically creates a deep copy of the array",
          "The browser prompts the user to save the file",
          "The component converts into an uncontrolled component"
        ],
        answer: 0
      },
      {
        id: 3,
        question: "What is React DevTools?",
        options: [
          "A command-line tool for formatting CSS",
          "A browser extension for inspecting the component tree, props, state, and performance",
          "An antivirus program for JavaScript",
          "A premium cloud IDE hosted by Facebook"
        ],
        answer: 1
      },
      {
        id: 4,
        question: "What is the purpose of React.StrictMode?",
        options: [
          "It forces the app to use TypeScript",
          "It intentionally double-renders components in development mode to catch bugs and side effects early",
          "It blocks all external API calls",
          "It prevents the user from opening browser dev tools"
        ],
        answer: 1
      },
      {
        id: 5,
        question: "Which common mistake leads to infinite loops inside useEffect?",
        options: [
          "Using the useState hook outside useEffect",
          "Passing a string as a dependency",
          "Forgetting the dependency array or setting state that triggers the effect repeatedly",
          "Importing React at the top of the file"
        ],
        answer: 2
      },
      {
        id: 6,
        question: "Which third-party package is widely used for elegant toast notifications in React?",
        options: [
          "react-bread",
          "react-popup-box",
          "react-hot-toast",
          "react-alert-modal"
        ],
        answer: 2
      },
      {
        id: 7,
        question: "Which package is commonly used as a powerful HTTP client alternative to fetch?",
        options: [
          "superagent-react",
          "http-fetcher",
          "rest-axios",
          "axios"
        ],
        answer: 3
      },
      {
        id: 8,
        question: "Which package is widely used for adding beautiful icons to React applications?",
        options: [
          "react-glyphs",
          "react-svgs",
          "react-symbols",
          "react-icons"
        ],
        answer: 3
      }
    ]
  }
};
