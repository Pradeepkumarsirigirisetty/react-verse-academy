# ReactVerse Academy

ReactVerse Academy is a comprehensive React.js educational website designed as a B.Tech term submission. It features a vibrant, modern UI, interactive labs, quizzes, and mock authentication to teach React concepts effectively.

## Features

- **Modern UI:** Vibrant colors, glassmorphism, smooth animations, and light/dark mode support.
- **Responsive Design:** Fully responsive layout for mobile, tablet, and desktop.
- **Syllabus & Modules:** Searchable and filterable course syllabus.
- **Interactive Labs & Playground:** Try out React hooks and features directly on the site.
- **Knowledge Check:** Interactive quiz to test your React knowledge.
- **Mock Authentication:** JWT-style mock login with protected routes.
- **Global State:** Uses Context API for Theme and Auth management.
- **No External UI Frameworks:** Pure custom CSS leveraging variables and modern layout techniques.

## Technologies Used

- **React 19**
- **Vite**
- **React Router v7**
- **React Icons**
- **Vanilla CSS**

## Getting Started

Follow these steps to run the project locally:

1. **Clone the repository or navigate to the project directory:**
   \`\`\`bash
   cd reactverse-academy
   \`\`\`

2. **Install dependencies:**
   Make sure you have Node.js installed, then run:
   \`\`\`bash
   npm install
   \`\`\`
   *(Note: The project uses \`react-router-dom\`, \`react-icons\`, and \`lucide-react\`.)*

3. **Start the development server:**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open in Browser:**
   Navigate to \`http://localhost:5173\` (or the port specified in your terminal).

## Demo Credentials

To access the Dashboard (Protected Route), use the following credentials on the Login page:

- **Email:** \`student@reactverse.edu\`
- **Password:** \`react123\`

## Project Structure

- \`src/components/\`: Reusable UI components (Navbar, Footer, Cards, etc.)
- \`src/context/\`: Context API files for Auth and Theme.
- \`src/data/\`: Mock JSON data for modules, labs, and quizzes.
- \`src/pages/\`: Page components for routing.

## License
MIT License
