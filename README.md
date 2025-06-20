# ⚡ PulseBoard

Welcome to PulseBoard! Keep track of your team like never before with a sleek, modern full stack Employee Tracker application.

Designed with HR teams and managers in mind, this application lets you add, edit, and monitor employee details effortlessly — **all from a centralised dashboard**.

Responsive frontend built with React + TypeScript, Spring Boot (Java) backend and MySQL database.

## Tech Stack

- Frontend: React, TypeScript
- Styling: SCSS/ CSS Modules
- Backend: Java, Spring Boot,Spring Data JPA, Maven
- Database: MySQL

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

- Add, edit, and delete employee records

- View employees in a card-based layout

- Dashboard overview with filter and search functionality

- Real-time form validation and error handling

- Custom global state management using a React Context Provider to manage employee data efficiently and avoid prop drilling

Backend (Spring Boot)

- Connected to a MySQL database for persistent data storage

- Implemented Hibernate and JPA for efficient ORM and database interaction

- Built a RESTful API with complete CRUD operations

- Integrated input validation and centralized exception handling

- Returns meaningful HTTP status codes and descriptive error messages

## Project Objectives

- Create a clean and intuitive tool for managing employees at a glance

- Streamline HR/admin workflows with easy editing, filtering, and deleting of employee records

- Learn and implement a full stack application using React, TypeScript, Java Spring Boot, and MySQL

- Apply best practices in form validation, state management, and component design

## Screenshots

### Dashboard

![Image](https://github.com/user-attachments/assets/70067e9d-84b5-47ab-b13f-c915e81a757b)

### Employee List

![Image](https://github.com/user-attachments/assets/0f0b4624-56e8-4026-a566-b0ebd4ed3154)

### Employee Form

![Image](https://github.com/user-attachments/assets/763d9fe8-6ff2-42a0-b2f4-c1bb2d84413d)

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
spring.datasource.url=jdbc:mysql://localhost:3306/your_database_name
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
```

**4. Install Dependencies:**

```sh
mvn clean install
```

**5. Run the application:**

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
