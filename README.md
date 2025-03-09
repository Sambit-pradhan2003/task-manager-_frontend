Task Manager - Frontend

This is the frontend for the Task Manager application, built using React.js and Tailwind CSS. It allows users to add, manage, and delete tasks with authentication.

Features

✅ User Authentication (JWT-based login/logout)

✅ Add, Edit, and Delete Tasks

✅ Toggle Task Completion

✅ Categorize Tasks

✅ Responsive UI with Tailwind CSS

Tech Stack

Frontend: React.js, React Router, Tailwind CSS, Axios

Backend: Spring Boot (separate repository)

Database: MySQL (handled by backend)

Installation

1️⃣ Clone the Repository

git clone https://github.com/yourusername/task-manager-frontend.git
cd task-manager-frontend

2️⃣ Install Dependencies

npm install

3️⃣ Configure Backend URL

Edit the axios API calls in src/api.js or inside individual components to point to your backend:

const API_BASE_URL = "http://localhost:8080/api";

4️⃣ Start the App

npm start

This will start the development server at http://localhost:3000/.

API Endpoints Used

Authentication

POST /api/auth/login - User login

POST /api/auth/register - User signup

POST /api/auth/logout - Logout

Tasks

GET /api/tasks - Get all tasks

POST /api/tasks - Create a new task

PUT /api/tasks/{taskId}/toggle - Toggle completion status

DELETE /api/tasks/{taskId} - Delete a task

Project Structure

src/
├── components/
│   ├── TaskList.jsx
│   ├── AddTask.jsx
│   ├── Navbar.jsx
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Register.jsx
├── App.js
├── index.js
├── styles/
│   ├── tailwind.css
└── README.md

Usage

1️⃣ Login with a registered user.2️⃣ Add Tasks with a title and category.3️⃣ Mark as Complete or delete tasks.4️⃣ Tasks persist in the database.

Troubleshooting

If you encounter issues:

Check the backend is running (http://localhost:8080/api should be accessible)

Check console logs (F12 in browser for errors)

Verify authentication token (localStorage.getItem('token') should return a value)

License

This project is open-source and available under the MIT License.

Author

Developed by Sambit Pradhan 🚀
