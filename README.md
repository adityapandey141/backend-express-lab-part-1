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
node app.js
```

By default, the server runs on **port 3010**.

---

## 📌 API Endpoints

### 🎵 Track API (`trackAPI.js`)

| Method | Endpoint             | Description        |
| ------ | -------------------- | ------------------ |
| GET    | `/tracks`            | Get all tracks     |
| POST   | `/tracks/new`        | Add a new track    |
| POST   | `/tracks/update/:id` | Update track by ID |
| POST   | `/tracks/delete/:id` | Delete track by ID |

#### Example Requests:

**GET all tracks:**

```http
GET http://localhost:3010/tracks
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
POST http://localhost:3010/tracks/delete/12
```

---

### 📝 Posts API (`postsAPI.js`)

| Method | Endpoint            | Description       |
| ------ | ------------------- | ----------------- |
| GET    | `/posts`            | Get all posts     |
| POST   | `/posts/new`        | Add a new post    |
| POST   | `/posts/update/:id` | Update post by ID |
| POST   | `/posts/delete/:id` | Delete post by ID |

#### Example Requests:

**GET all posts:**

```http
GET http://localhost:3010/posts
```

**POST a new post:**

```http
POST http://localhost:3010/posts/new
Content-Type: application/json

{
  "newPost": {
    "title": "My First Blog",
    "content": "This is a sample post.",
    "author": "John Doe"
  }
}
```

**POST update post:**

```http
POST http://localhost:3010/posts/update/5
Content-Type: application/json

{
  "title": "Updated Blog Title"
}
```

**POST delete post:**

```http
POST http://localhost:3010/posts/delete/5
```

---

### 👨‍💼 Employee API (`employeeAPI.js`)

| Method | Endpoint                | Description           |
| ------ | ----------------------- | --------------------- |
| GET    | `/employees`            | Get all employees     |
| POST   | `/employees/new`        | Add a new employee    |
| POST   | `/employees/update/:id` | Update employee by ID |
| POST   | `/employees/delete/:id` | Delete employee by ID |

#### Example Requests:

**GET all employees:**

```http
GET http://localhost:3010/employees
```

**POST a new employee:**

```http
POST http://localhost:3010/employees/new
Content-Type: application/json

{
  "newEmployee": {
    "name": "Alice",
    "designation": "Software Engineer",
    "salary": 60000
  }
}
```

**POST update employee:**

```http
POST http://localhost:3010/employees/update/3
Content-Type: application/json

{
  "salary": 70000
}
```

**POST delete employee:**

```http
POST http://localhost:3010/employees/delete/3
```

---

## 🛠️ How to Modify & Expand the Project

1. **Add a new model**:

   - Create a new file in `/models` (e.g., `product.model.js`).
   - Define the Sequelize schema.

2. **Add new routes**:

   - Create a new API file in `/routes` (e.g., `productAPI.js`).
   - Add CRUD routes.

3. **Integrate with the main app**:
   - Import the new API in `app.js` and use it with `app.use()`.

---

## 🎯 Future Enhancements

✅ Authentication & Authorization (JWT)  
✅ API Documentation (Swagger)  
✅ Docker Support

---

## 💡 Conclusion

This project provides a simple yet scalable way to manage multiple datasets with CRUD operations using **Express, SQLite, and Sequelize**. 🚀

Feel free to contribute or modify as per your requirements!
