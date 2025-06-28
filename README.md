# ⚡ PulseBoard

- [📸 Screenshots](#screenshots)

Welcome to PulseBoard! Keep track of your team like never before with a sleek, modern full stack Employee Tracker application.

Designed with HR teams and managers in mind, this application lets you add, edit, and monitor employee details effortlessly — **all from a centralised dashboard**.

Responsive frontend built with React + TypeScript, Spring Boot (Java) backend and MySQL database.

## Tech Stack

- Frontend: React, TypeScript
- Styling: SCSS/ CSS Modules
- Backend: Java, Spring Boot,Spring Data JPA, Maven
- Database: MySQL
- Hosting: Netlify (frontend), Render (backend)

## Table of Contents

- [🔍 Overview](#overview)
- [✨ Key Features](#key-features)
- [🎯 Project Objectives](#project-objectives)
- [📸 Screenshots](#screenshots)
- [⚙️ Installation Guide](#installation-guide)
- [🧩 Challenges](#challenges)
- [🚀 Areas for Growth](#areas-for-growth)

## Overview

PulseBoard is a responsive and interactive tool for managing employee records. It allows users to add, edit, and remove employees, and view them as individual cards or in a centralized dashboard. The dashboard provides filtering options to help users quickly find relevant employee information and gain useful overviews.

## Key Features

Frontend (React + TypeScript):

- Hosted on Netlify for fast global delivery via CDN

- Add, edit, and delete employee records

- View employees in a card-based layout

- Dashboard overview with filter and search functionality

- Real-time form validation and error handling

- Custom global state management using a React Context Provider to manage employee data efficiently and avoid prop drilling

Backend (Spring Boot)

- Hosted on Render cloud platform with auto-deploy from GitHub

- Connected to a MySQL database for persistent data storage, with optimized data retrieval using native SQL queries for specific business logic.

- Implemented Hibernate and JPA for efficient ORM and database interaction

- Built a RESTful API with complete CRUD operations

- Integrated input validation and centralized exception handling

- Returns meaningful HTTP status codes and descriptive error messages

 AWS S3 Integration (Image Uploading)
 
- Integrated AWS S3 for secure image storage and retrieval

- Backend handles multipart file uploads and stores images in Amazon S3.

- URL is returned to the frontend for real-time image preview and persistent display

- Configured Spring Boot to manage credentials and bucket configuration securely using exported environment variables 



## Project Objectives

- Create a clean and intuitive tool for managing employees at a glance

- Streamline HR/admin workflows with easy editing, filtering, and deleting of employee records

- Learn and implement a full stack application using React, TypeScript, Java Spring Boot, and MySQL

- Apply best practices in form validation, state management, and component design

## Screenshots

### Dashboard

![Image](https://github.com/user-attachments/assets/70067e9d-84b5-47ab-b13f-c915e81a757b)

### Employee List

![Image](https://github.com/user-attachments/assets/7dd66224-45df-4ff8-8c33-785ae5a26173)

### Employee Form

![Image](https://github.com/user-attachments/assets/7af481ff-6bdf-4b2f-addd-4f2b713a7caf)

### Form Validation

![Image](https://github.com/user-attachments/assets/e353463c-a90d-4479-83c5-5155150b362d)

### DashBoard overviews

![Image](https://github.com/user-attachments/assets/99ee865f-13dd-416b-9d57-fac29b811fec)

## Installation Guide

To run this app locally, you'll need both the **frontend** and **backend** running.

**Install Prerequisites**
Before installing/running the backend, please make sure you have the following installed:

☕ Java Development Kit (JDK)

📦 Apache Maven

🐬 MySQL Database

### 🧩 Backend Setup (Spring Boot)

➡️ Backend Repo: [pulseboard-backend](https://github.com/ronaldkwan93/spring-employee-track)

**1. Clone the backend repository:**

```bash
git clone https://github.com/ronaldkwan93/spring-employee-track.git
cd spring-employee-track
```

**2. Configure MySQL:**

- Log in to MySQL

```bash
mysql -u root -p
```

- Create a new database:

```sql
CREATE DATABASE your_database_name;
```

**3. Configure the application properties:**

- Navigate to the src/main/resources directory

- Create an **application.properties** file and add the following configuration:

```properties
spring.application.name=employeeTracker
spring.datasource.url=jdbc:mysql://localhost:3306/${DB_NAME}
spring.datasource.username=${MYSQL_USER}
spring.datasource.password=${MYSQL_PASS}
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.database-platform=org.hibernate.dialect.MySQL8Dialect
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true

aws.s3.access.key = ${AWS_KEY}
aws.s3.secret.key = ${AWS_SECRET_KEY}
aws.s3.bucket=${AWS_BUCKET_NAME}
```

**4. Install Dependencies:**

```sh
mvn clean install
```

**5. Export your environment variables**

- Use the following command with existing credentials

```sh
export MYSQL_PASS=yourpassword
export DB_NAME=yourdbname
export MYSQL_USER=root
export AWS_KEY=yourawskey
export AWS_SECRET_KEY=yoursecretawskey
export AWS_BUCKET_NAME=yourawsbucketname
```

**6. Run the application:**

- Use the following command to run the application:

```sh
mvn spring-boot:run
```

### ⚛️ Frontend Setup (React)

#### 1. Clone frontend repository

```bash
git clone https://github.com/ronaldkwan93/client-employee-tracker.git
cd client-employee-tracker
```

#### 2. Install Dependencies

```bash
npm install
```

#### 3. Run the application

```bash
npm run dev
```

- Vite should prompt you to connect to localhost: [http://localhost:5173/](http://localhost:5173/)

## Challenges

- Handling case-insensitive search and filtering effectively

- Synchronizing frontend validation (FormData API + Zod) with backend constraints

- Ensuring smooth data flow between frontend and backend with DTOs and API contracts

- Migrating and offloading business logic from frontend to backend for a better client experience

- Avoided prop drilling by implementing global state management using React's `useContext` and a custom provider

## Areas for Growth

- Add user authentication and role-based access (e.g. manager vs HR)

- Introduce pagination and lazy loading for large datasets

- Enable profile picture uploads or avatars per employee
