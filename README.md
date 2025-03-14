# CRUD API with Express, SQLite & Sequelize

## 📌 Project Overview

This project is a backend API built with **Node.js**, **Express.js**, **SQLite**, and **Sequelize**. It performs **CRUD operations** on multiple datasets, including:

- Tracks
- Posts
- Employees

The project includes:  
✅ **Multiple API files** for modular structure  
✅ **Separate database files** for each dataset  
✅ **Sequelize integration** for database operations  
✅ **Database seeding API** to populate sample data

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: SQLite
- **ORM**: Sequelize

---

## 📂 Project Structure

```
/project-root
│── /databases
│   ├── tracksDB.js
│   ├── postsDB.js
│   ├── employeesDB.js
│
│── /dataset
│   ├── trackData.js
│   ├── postData.js
│   ├── employeeData.js
│
│── /lib
│   ├── index.js  (Sequelize initialization)
│
│── /models
│   ├── track.model.js
│   ├── post.model.js
│   ├── employee.model.js
│
│── trackAPI.js
│── postsAPI.js
│── employeeAPI.js
│── index.js
│── package.json
│── README.md
```

---

## 🚀 Getting Started

### 1️⃣ Install Dependencies

```bash
npm install
```

### 2️⃣ Start the Server

```bash
node index.js
```

By default, the server runs on **port 3010**.

---

## 📌 API Endpoints

### 🎵 Track API (`trackAPI.js`)

| Method | Endpoint             | Description                           |
| ------ | -------------------- | ------------------------------------- |
| GET    | `/tracks`            | Get all tracks                        |
| POST   | `/tracks/new`        | Add a new track                       |
| POST   | `/tracks/update/:id` | Update track by ID                    |
| POST   | `/tracks/delete`     | Delete track by ID                    |
| POST   | `/tracks/seed`       | Seed tracks database with sample data |

#### Example Requests:

**GET all tracks:**

```http
GET http://localhost:3010/tracks
```

**POST seed database:**

```http
POST http://localhost:3010/tracks/seed
```

**POST a new track:**

```http
POST http://localhost:3010/tracks/new
Content-Type: application/json

{
  "newTrack": {
    "name": "Raabta",
    "genre": "Romantic",
    "release_year": 2012,
    "artist": "Arijit Singh",
    "album": "Agent Vinod",
    "duration": 4
  }
}
```

**POST update track:**

```http
POST http://localhost:3010/tracks/update/12
Content-Type: application/json

{
  "name": "Raabta Remix",
  "genre": "Romantic",
  "release_year": 2013
}
```

**POST delete track:**

```http
POST http://localhost:3010/tracks/delete
Content-Type: application/json

{
  "id": 11
}
```

---

### 📝 Posts API (`postsAPI.js`)

| Method | Endpoint            | Description                          |
| ------ | ------------------- | ------------------------------------ |
| GET    | `/posts`            | Get all posts                        |
| POST   | `/posts/new`        | Add a new post                       |
| POST   | `/posts/update/:id` | Update post by ID                    |
| POST   | `/posts/delete`     | Delete post by ID                    |
| POST   | `/posts/seed`       | Seed posts database with sample data |

#### Example Requests:

**GET all posts:**

```http
GET http://localhost:3010/posts
```

**POST seed database:**

```http
POST http://localhost:3010/posts/seed
```

**POST a new posts:**

```http
POST http://localhost:3010/posts/new
Content-Type: application/json

{
  "newPost": {
    title: "Advanced CSS Layouts",
    content: "Learn how to create complex layouts using CSS Grid and Flexbox.",
    author: "Hannah Lewis",
  }
}
```

**POST update posts:**

```http
POST http://localhost:3010/posts/update/12
Content-Type: application/json

{
  title: "Advanced CSS Layouts",
}
```

**POST delete posts:**

```http
POST http://localhost:3010/posts/delete
Content-Type: application/json

{
  "id": 11
}
```

---

### 👨‍💼 Employee API (`employeeAPI.js`)

| Method | Endpoint                | Description                              |
| ------ | ----------------------- | ---------------------------------------- |
| GET    | `/employees`            | Get all employees                        |
| POST   | `/employees/new`        | Add a new employee                       |
| POST   | `/employees/update/:id` | Update employee by ID                    |
| POST   | `/employees/delete`     | Delete employee by ID                    |
| POST   | `/employees/seed`       | Seed employees database with sample data |

#### Example Requests:

**GET all employees:**

```http
GET http://localhost:3010/employees
```

**POST seed database:**

```http
POST http://localhost:3010/employees/seed
```

**POST a new employees:**

```http
POST http://localhost:3010/employees/new
Content-Type: application/json

{
  "newEmployee": {
        "name": "Jane Smith",
        "designation":"Software Engineer",
        "department": "Engineering",
        "salary": 75000
  }
}
```

**POST update employees:**

```http
POST http://localhost:3010/employees/update/12
Content-Type: application/json

{
  name: "Aditya Pandey ",
}
```

**POST delete employees:**

```http
POST http://localhost:3010/employees/delete
Content-Type: application/json

{
  "id": 11
}
```

---

## 🛠️ How to Modify & Expand the Project

1. **Add a new model**:

   - Create a new file in `/models` (e.g., `product.model.js`).
   - Define the Sequelize schema.
   - Add associations if needed (e.g., `belongsTo`, `hasMany`).

2. **Add new routes**:

   - Create a new API file (e.g., `productAPI.js`) in the root directory.
   - Add necessary CRUD operations.
   - Import and use the new route in `index.js`.

3. **Integrate with the main app**:
   - Import the new API in `index.js`.
   - Register it using `app.use()`.

---

## 🎯 Future Enhancements

✅ **Authentication & Authorization** (JWT for secure API access)  
✅ **API Documentation** (Swagger integration for better documentation)  
✅ **Pagination & Filtering** (For better handling of large datasets)  
✅ **Docker Support** (Containerized deployment)  
✅ **Unit & Integration Tests** (Using Jest/Mocha)

---

## 💡 Conclusion

This project provides a **modular, scalable backend** for managing multiple datasets with **CRUD operations** using **Express, SQLite, and Sequelize**. 🚀

Feel free to contribute or modify as per your requirements! 🎯
