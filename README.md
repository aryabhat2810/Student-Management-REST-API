# Student Management REST API

A RESTful CRUD API for managing student records. Built with Node.js, Express.js and MongoDB (Mongoose).

## 1. Requirements

- Node.js (LTS recommended) and npm
- MongoDB running locally, or a MongoDB Atlas connection string
- Postman (for endpoint testing)

## 2. Run in VS Code

1. Extract the ZIP file.
2. Open the extracted `Student-Management-API` folder in VS Code.
3. Open **Terminal → New Terminal**.
4. Install dependencies:

   ```bash
   npm install
   ```

5. Create a file named `.env` in the project root (same level as `server.js`).
6. Copy the contents of `.env.example` into `.env`.
7. Make sure MongoDB is running locally, or replace `MONGODB_URI` with your MongoDB Atlas connection string.
8. Start the development server:

   ```bash
   npm run dev
   ```

9. Open `http://localhost:5000/`. A JSON health-check response should appear.

Example local `.env`:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/student_management
```

**Do not upload or share your `.env` file.** It contains your database connection details.

## 3. Student resource

Base URL: `http://localhost:5000/api/students`

| Method | Endpoint | Purpose | Success status |
|---|---|---|---|
| POST | `/api/students` | Create a student | 201 |
| GET | `/api/students` | Get all students | 200 |
| GET | `/api/students/:id` | Get a student by MongoDB ID | 200 |
| PUT | `/api/students/:id` | Update a student | 200 |
| DELETE | `/api/students/:id` | Delete a student | 200 |

Error responses include:
- `400 Bad Request`: missing/invalid fields, invalid ID format, duplicate email or roll number.
- `404 Not Found`: student or route does not exist.
- `500 Internal Server Error`: unexpected server-side error.

## 4. Example request body

Use **Body → raw → JSON** in Postman:

```json
{
  "name": "Aarav Sharma",
  "email": "aarav.sharma@example.com",
  "rollNo": "CS101",
  "course": "Computer Engineering",
  "semester": 5
}
```

All five fields are required when creating a student. Email and roll number must be unique. Semester must be from 1 to 8.

## 5. Postman

Import `postman/Student-Management-API.postman_collection.json` into Postman.

The collection uses a `baseUrl` variable set to `http://localhost:5000` and a `studentId` variable. Run **Create Student** first; its test script saves the returned ID for the Get, Update and Delete requests. Run Delete last because it removes that record.

Also test the invalid and not-found requests. Capture screenshots showing the request, response JSON and HTTP status for your report.

## 6. Project structure

```text
Student-Management-API/
├── src/
│   ├── config/db.js
│   ├── controllers/studentController.js
│   ├── middleware/errorHandler.js
│   ├── models/Student.js
│   ├── routes/studentRoutes.js
│   └── app.js
├── postman/
│   └── Student-Management-API.postman_collection.json
├── .env.example
├── .gitignore
├── package.json
├── server.js
└── README.md
```

## 7. Deployment (Render + MongoDB Atlas)

1. Create a MongoDB Atlas database and allow your deployment service to connect. Use a strong database user password.
2. Push this project to your own GitHub repository. Do not commit `.env`, credentials or `node_modules`.
3. On Render, create a **Web Service** connected to your repository.
4. Set **Build Command** to `npm install` and **Start Command** to `npm start`.
5. Add environment variables in Render:
   - `MONGODB_URI` = your Atlas connection string
   - `NODE_ENV` = `production`
6. Deploy. Your base URL will be similar to `https://your-service-name.onrender.com`.
7. Test the deployed URL in Postman by changing the collection's `baseUrl` variable.

Deployment must be completed and verified in your own accounts before you report a live URL.

## 8. Before submission

- [ ] Run the API locally.
- [ ] Test all CRUD endpoints in Postman.
- [ ] Test missing fields, duplicate email/roll number, invalid ID and non-existent student.
- [ ] Export/save your Postman collection.
- [ ] Deploy and test the live API.
- [ ] Prepare the PDF report with your own screenshots and details.
- [ ] Add your own name, PRN and division to the report.
- [ ] Exclude `node_modules` and `.env` from the submission ZIP.

You should understand the model, routes, controller, middleware and status codes before your practical demonstration.
