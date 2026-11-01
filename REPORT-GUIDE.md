# Assignment 6 PDF Report Guide

Use this guide to prepare your own PDF report. Add your actual name, PRN, division, date, deployment URL and screenshots from your own Postman tests. Do not claim deployment or tests that you have not completed.

## Title page
**Assignment 6: RESTful CRUD API for Student Records, Deployed and Tested with Postman**

- Student name:
- PRN / Roll No.:
- Division / Batch:
- Course: Web Technology (2304362L)
- Practical No.: 6

## Aim
To develop a RESTful API that performs Create, Read, Update and Delete operations on student records stored in a MongoDB database, and to test the API using Postman.

## Problem statement
Educational institutions need a structured way to manage student information. This project provides API endpoints to add, view, update and delete student records.

## Technologies
- Node.js: JavaScript runtime
- Express.js: HTTP server and routing
- MongoDB: NoSQL database
- Mongoose: MongoDB object modelling and validation
- Postman: API testing

## Architecture / request flow

```text
Postman Client
     |
     v
Express Server (server.js / app.js)
     |
     v
Student Routes
     |
     v
Student Controller
     |
     v
Mongoose Student Model
     |
     v
MongoDB Database
```

## Endpoint table

| Method | URL | Purpose | Expected status |
|---|---|---|---|
| POST | /api/students | Create student | 201 |
| GET | /api/students | Retrieve all students | 200 |
| GET | /api/students/:id | Retrieve one student | 200 |
| PUT | /api/students/:id | Update student | 200 |
| DELETE | /api/students/:id | Delete student | 200 |

Also explain 400 (invalid input/ID), 404 (record or route not found) and 500 (unexpected server error).

## Implementation notes
Explain in your own words:
1. `server.js` loads environment variables, connects to MongoDB and starts Express.
2. `src/config/db.js` establishes the database connection.
3. `src/models/Student.js` defines fields and validation rules.
4. `src/routes/studentRoutes.js` maps HTTP methods and URLs to controller functions.
5. `src/controllers/studentController.js` performs CRUD operations.
6. `src/middleware/errorHandler.js` returns consistent error responses.

## Output screenshots to add
Capture your own Postman screenshots and label them:
1. Health check
2. Create student (201)
3. Get all students (200)
4. Get student by ID (200)
5. Update student (200)
6. Delete student (200)
7. Invalid create or invalid ID (400)
8. Student not found / deleted student (404)

## Testing and conclusion
Write what you tested, whether each endpoint worked, any issue you encountered and how you resolved it. Mention any limitations honestly.

## AI use declaration
Complete the declaration required by your assignment. State the AI tool and the prompts/outputs you actually used, one output you checked and how, and one thing you corrected or rejected and why. Follow your instructor's rules.
